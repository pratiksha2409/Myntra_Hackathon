from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection URI
client = MongoClient('mongodb+srv://mamtag3s89:frozen8989@myntra.omrgbw6.mongodb.net/?retryWrites=true&w=majority&appName=myntra')
db = client['Myntra']  # Replace 'myntra' with your database name
collection = db['registration']  # Replace 'test_collection' with your collection name

def insert_data():
    # Data to insert
    data = {
        "name": "John Doe",
        "email": "john.doe@example.com"
    }

    # Insert data into MongoDB collection
    result = collection.insert_one(data)
    print(f"Data inserted with id: {result.inserted_id}")

if __name__ == '__main__':
    with app.app_context():
        insert_data()