import React, { useRef, useEffect, useState } from 'react';
import * as faceMesh from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';

function FaceShapeDetector({ onStop, setShape }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraRef = useRef(null);
  const [isFaceInsideBox, setIsFaceInsideBox] = useState(false); // State to check if face is inside box

  useEffect(() => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const ctx = canvasElement.getContext('2d');

    const faceMeshInstance = new faceMesh.FaceMesh({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMeshInstance.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMeshInstance.onResults((results) => {
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      // Mirror the video feed by drawing it with scaleX(-1)
      ctx.save();
      ctx.translate(canvasElement.width, 0);
      ctx.scale(-1, 1); // This will mirror the video feed horizontally
      ctx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
      ctx.restore();

      if (results.multiFaceLandmarks.length > 0) {
        const landmarks = results.multiFaceLandmarks[0];
        const w = canvasElement.width;
        const h = canvasElement.height;

        const getPoint = (i) => [landmarks[i].x * w, landmarks[i].y * h];
        const distance = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

        const jawLeft = getPoint(234);
        const jawRight = getPoint(454);
        const chin = getPoint(152);
        const forehead = getPoint(10);
        const cheekLeft = getPoint(93);
        const cheekRight = getPoint(323);
        const templeLeft = getPoint(127);
        const templeRight = getPoint(356);

        const jawWidth = distance(jawRight, jawLeft);
        const cheekWidth = distance(cheekRight, cheekLeft);
        const templeWidth = distance(templeRight, templeLeft);
        const faceHeight = distance(forehead, chin);

        const jawCheekRatio = jawWidth / cheekWidth;
        const heightWidthRatio = faceHeight / cheekWidth;

        let shape = "Unknown";
        if (jawCheekRatio >= 1.05 && heightWidthRatio >= 1.3) shape = "Rectangle";
        else if (jawCheekRatio < 1.05 && heightWidthRatio >= 1.2 && heightWidthRatio <= 1.45) shape = "Oval";
        else if (jawCheekRatio >= 1.05 && heightWidthRatio < 1.3) shape = "Square";
        else if (jawCheekRatio < 1.05 && heightWidthRatio < 1.2) shape = "Round";
        else if (templeWidth > cheekWidth * 1.05 && forehead[1] < cheekLeft[1]) shape = "Heart";
        else if (templeWidth > cheekWidth * 1.05 && forehead[1] > cheekLeft[1]) shape = "Diamond";

        // Get the center of the face (for checking if the face is inside the box)
        const eyeLeft = getPoint(33);
        const eyeRight = getPoint(133);
        const faceCenter = [(eyeLeft[0] + eyeRight[0]) / 2, (eyeLeft[1] + eyeRight[1]) / 2];

        // Define the smaller green box area (fixed position and size)
        const boxLeft = 150;  // Adjusted position of the box (from the left)
        const boxTop = 150;   // Adjusted position of the box (from the top)
        const boxWidth = 300; // Smaller width of the box
        const boxHeight = 240; // Smaller height of the box

        // Draw the green box on the canvas
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 3;
        ctx.strokeRect(boxLeft, boxTop, boxWidth, boxHeight);

        // Check if the center of the face is inside the box
        if (
          faceCenter[0] >= boxLeft &&
          faceCenter[0] <= boxLeft + boxWidth &&
          faceCenter[1] >= boxTop &&
          faceCenter[1] <= boxTop + boxHeight
        ) {
          setIsFaceInsideBox(true); // Set the face inside box state
        } else {
          setIsFaceInsideBox(false); // Set the face outside box state
        }

        // Set face shape only if the face is inside the box
        if (isFaceInsideBox) {
          setShape(shape);
        }

        // Display face shape
        ctx.fillStyle = 'lime';
        ctx.font = '24px Arial';
        ctx.fillText(`Face Shape: ${shape}`, 10, 30);
      }
    });

    const camera = new cam.Camera(videoElement, {
      onFrame: async () => {
        await faceMeshInstance.send({ image: videoElement });
      },
      width: 640,
      height: 480,
    });

    camera.start();
    cameraRef.current = camera;

    return () => {
      camera.stop();
    };
  }, [setShape, isFaceInsideBox]);

  useEffect(() => {
    if (onStop) {
      onStop(() => {
        cameraRef.current?.stop();  // Stop camera on calling onStop
      });
    }
  }, [onStop]);

  return (
    <div className="flex justify-center items-center">
      {/* Video element is hidden, only used to capture the webcam feed */}
      <video
        ref={videoRef}
        style={{
          display: 'none', // Hide the video element
        }}
        autoPlay
        muted
      ></video>
      {/* Canvas only, where the mirrored video and face shape results are drawn */}
      <canvas ref={canvasRef} width={640} height={480}></canvas>
    </div>
  );
}

export default FaceShapeDetector;
