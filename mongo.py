import os
from pymongo import MongoClient
import gridfs

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['image_database']
fs = gridfs.GridFS(db)

# Path to your folder with images
folder_path = 'C:/Users/Jayalakshmi/OneDrive/Desktop/project/src/components/photo'

# Store each image
for filename in os.listdir(folder_path):
    if filename.endswith(('.jpg', '.jpeg', '.png')):
        with open(os.path.join(folder_path, filename), 'rb') as f:
            fs.put(f, filename=filename)
            print(f"{filename} stored in MongoDB using GridFS.")
 

image = fs.find_one({"filename": "CA1.jpg"})
with open("retrieved_example.jpg", "wb") as f:
    f.write(image.read())