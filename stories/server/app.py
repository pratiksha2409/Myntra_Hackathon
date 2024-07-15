from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from datetime import timedelta
import boto3
from botocore.exceptions import NoCredentialsError
from pymongo import MongoClient
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split




app = Flask(__name__)
CORS(app) 
# Load the data
data = pd.read_csv("Size Data.csv")


app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
app.config['SECRET_KEY'] = 'your_flask_secret_key'
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=1)

# Manually specify AWS S3 credentials
AWS_ACCESS_KEY_ID = "AKIAT7AVHGHPZE2JGMBU"
AWS_SECRET_ACCESS_KEY = "MDfygpXIZVqGjf8VBnHPwMNSMxQOczQeAjzIl0lM"
AWS_S3_BUCKET_NAME = "myntra-stories-bucket"
AWS_S3_REGION = "ap-south-1"

# Initialize JWTManager
jwt = JWTManager(app)

# MongoDB connection URI (local instance)
client = MongoClient('mongodb://localhost:27017/')
db = client['myntra']  # Replace 'myntra' with your database name
collection = db['stories'] 

# Example route for testing backend connection
@app.route('/', methods=['GET'])
def index():
    return '<center style="height: 100vh"><h1>Backend Link</h1></center>'

# Function to upload file to AWS S3
def upload_to_s3(file, filename):
    s3 = boto3.client(
        's3',
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
        region_name=AWS_S3_REGION
    )
    try:
        s3.upload_fileobj(file, AWS_S3_BUCKET_NAME, filename)
        url = f"https://{AWS_S3_BUCKET_NAME}.s3.{AWS_S3_REGION}.amazonaws.com/{filename}"
        return url
    except NoCredentialsError as e:
        print(f"Error uploading to S3: {e}")
        return None

# Route to handle video upload and store URL in MongoDB
@app.route('/api/upload', methods=['POST'])
def upload_story():
    if 'video' not in request.files:
        return jsonify({"error": "No video file provided"}), 400

    video = request.files['video']
    filename = video.filename
    url = upload_to_s3(video, filename)
    
    if not url:
        return jsonify({"error": "Failed to upload to S3"}), 500

    story = {"filename": filename, "url": url}
    collection.insert_one(story)
    return jsonify({"message": "Story uploaded successfully", "url": url}), 200

# Route to retrieve all stories from MongoDB
@app.route('/api/stories', methods=['GET'])
def get_stories():
    stories = collection.find()
    stories_list = [{"filename": story["filename"], "url": story["url"]} for story in stories]
    return jsonify(stories_list), 200





# Convert Categories to Numbers
brand_encoder = LabelEncoder()
brand_encoder.fit(data['Brand'])
data['Brand'] = brand_encoder.transform(data['Brand'])

# Split the Data into Features and Labels
features = data[['Height', 'Weight', 'BurstSize', 'WaistSize', 'Brand']]
labels = data['Fit']

# Split the Features and Labels into Training and Test sets
train_features, test_features, train_labels, test_labels = train_test_split(features, labels, test_size=0.2)

# Classifier
model = DecisionTreeClassifier()
model.fit(train_features, train_labels)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    height = data['height']
    weight = data['weight']
    burst_size = data['burst_size']
    waist_size = data['waist_size']
    brand = 'A'  # Assuming brand A for now
    brand = brand_encoder.transform([brand])[0]

    pred_data = pd.Series([height, weight, burst_size, waist_size, brand], index=['Height', 'Weight', 'BurstSize', 'WaistSize', 'Brand'])
    pred_data = np.array(pred_data).reshape(1, -1)

    pred_result = model.predict(pred_data)

    return jsonify({"fit": pred_result[0]})






if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
