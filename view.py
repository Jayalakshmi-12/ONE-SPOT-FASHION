import pymongo
import gridfs
from PIL import Image
from io import BytesIO

# Step 1: Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["image_database"]  # use your database name

# Step 2: Set up GridFS
fs = gridfs.GridFS(db)

# Step 3: Find and read the file
file = fs.find_one({"filename": "RF1.jpg"})

if file:
    # Step 4: Open and display the image
    image = Image.open(BytesIO(file.read()))
    image.show()
else:
    print("Image 'CA1.jpg' not found in GridFS.")

