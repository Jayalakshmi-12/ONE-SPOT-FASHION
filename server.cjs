const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const { PythonShell } = require('python-shell');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests
app.use(bodyParser.urlencoded({ extended: true }));

db.connect((err) => {
  if (err) {
    console.error('❌ DB connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL');
});

// Utility function to get local system datetime in MySQL-compatible format
function getLocalDatetime() {
  const date = new Date();
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  // Format as 'YYYY-MM-DD HH:MM:SS'
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Register new user - Generate unique user ID
app.get('/api/generate-userid', (req, res) => {
  const uniqueId = `USER-${Date.now()}`;
  res.json({ userid: uniqueId });
});


/

// POST /api/login - Login route
app.post('/api/login', (req, res) => {
  const { name, userId, password } = req.body;

  if (!name || !userId || !password) {
    return res.status(400).json({ success: false, error: 'Name, UserID, and Password required' });
  }

  db.query('SELECT * FROM users WHERE name = ? AND userid = ?', [name, userId], async (err, results) => {
    if (err) {
      console.error('❌ Login error:', err.message);
      return res.status(500).json({ success: false, error: 'Login failed' });
    }

    if (results.length === 0) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    // Create a session after successful login
    const actionTime = getLocalDatetime(); // Use the local system time for action_time

    const insertSessionQuery = `
    INSERT INTO user_sessions (userid, action_type, action_time)
    VALUES (?, 'login', ?)
  `;
  
    console.log(`Inserting login session for user: ${userId} at ${actionTime}`);

    db.query(insertSessionQuery, [userId, actionTime], (err, result) => {
      if (err) {
        console.error('❌ Error creating user session:', err);
        return res.status(500).json({ success: false, error: 'Session creation failed' });
      }

      if (result && result.insertId) {
        console.log(`✅ Session created successfully with ID: ${result.insertId}`);
      } else {
        console.error('❌ No session ID returned from insert operation');
        return res.status(500).json({ success: false, error: 'Failed to create session' });
      }

      res.status(200).json({
        success: true,
        message: 'Login successful',
        userId: user.userid,
        name: user.name,
        email: user.email,
        sessionId: result.insertId, // Return the session ID
      });
    });
  });
});

// POST /api/logout - Logout route
app.post('/api/logout', (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ success: false, error: 'User ID is required' });
  }

  const checkActiveSessionQuery = `
    SELECT session_id, userid, action_time, logout_time
    FROM user_sessions
    WHERE userid = ? AND logout_time IS NULL
    ORDER BY action_time DESC LIMIT 1
  `;

  db.query(checkActiveSessionQuery, [userId], (err, result) => {
    if (err) {
      console.error('Error checking for active session:', err);
      return res.status(500).json({ success: false, error: 'Failed to check session', details: err });
    }

    if (result.length === 0) {
      return res.status(404).json({ success: false, error: 'No active session found for this user' });
    }

    const session = result[0];
    const actionTime = new Date(session.action_time);
    const currentTime = new Date();

    // Helper function to get local datetime in MySQL format (YYYY-MM-DD HH:mm:ss)
    function getLocalDatetime() {
      const pad = (num) => (num < 10 ? '0' + num : num);
      const dt = new Date();
      return (
        dt.getFullYear() + '-' +
        pad(dt.getMonth() + 1) + '-' +
        pad(dt.getDate()) + ' ' +
        pad(dt.getHours()) + ':' +
        pad(dt.getMinutes()) + ':' +
        pad(dt.getSeconds())
      );
    }

    const logoutTime = getLocalDatetime();  // Get local system time for logout
    const timeSpentSeconds = Math.floor((currentTime - actionTime) / 1000);

    const updateLogoutQuery = `
      UPDATE user_sessions
      SET logout_time = ?, time_spent = ?
      WHERE session_id = ?
    `;

    db.query(updateLogoutQuery, [logoutTime, timeSpentSeconds, session.session_id], (err, updateResult) => {
      if (err) {
        console.error('❌ Error logging out:', err);
        return res.status(500).json({ success: false, error: 'Failed to logout' });
      }

      res.json({
        success: true,
        message: 'User logged out successfully',
        sessionId: session.session_id,
        logout_time: logoutTime,
        time_spent: timeSpentSeconds, // seconds
      });
    });
  });
});

// Run skin color analysis
app.get('/start-analysis', (req, res) => {
  const scriptPath = path.join(__dirname, 'Skincolor', 'analysis.py');
  const pyshell = new PythonShell(scriptPath);

  let responded = false;

  pyshell.on('pythonError', (err) => {
    console.error('Python script error:', err);
    if (!responded) {
      res.status(500).json({ message: 'Script failed', error: err.message });
      responded = true;
    }
  });
