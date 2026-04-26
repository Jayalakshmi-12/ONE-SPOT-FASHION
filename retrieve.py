from pymongo import MongoClient
import gridfs
import os

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['image_database']
fs = gridfs.GridFS(db)

# Create a folder to store retrieved images
output_folder = "retrieved_images"
os.makedirs(output_folder, exist_ok=True)

# Debugging: Check how many files are in GridFS
print("\n--- Checking files in GridFS ---")
files = list(fs.find())  # Retrieve all files
print(f"Total files found in GridFS: {len(files)}")

# List the filenames stored in GridFS
if len(files) > 0:
    print("\nFilenames in GridFS:")
    for file in files:
        print(f"- {file.filename}")
else:
    print("No files found in GridFS!")

# Retrieve and save all images from GridFS
count = 0
for file in files:
    filename = file.filename
    output_path = os.path.join(output_folder, filename)

    with open(output_path, "wb") as f:
        f.write(file.read())
    
    count += 1
    print(f"{filename} saved to {output_path}")

print(f"\nTotal images retrieved and saved: {count}")