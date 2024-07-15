# from flask import Flask, request, jsonify
# import pandas as pd
# import numpy as np
# from flask_cors import CORS

# from sklearn.preprocessing import LabelEncoder
# from sklearn.tree import DecisionTreeClassifier
# from sklearn.model_selection import train_test_split

# app = Flask(_name_)
# CORS(app) 
# # Load the data
# data = pd.read_csv("Size Data.csv")

# # Convert Categories to Numbers
# brand_encoder = LabelEncoder()
# brand_encoder.fit(data['Brand'])
# data['Brand'] = brand_encoder.transform(data['Brand'])

# # Split the Data into Features and Labels
# features = data[['Height', 'Weight', 'BurstSize', 'WaistSize', 'Brand']]
# labels = data['Fit']

# # Split the Features and Labels into Training and Test sets
# train_features, test_features, train_labels, test_labels = train_test_split(features, labels, test_size=0.2)

# # Classifier
# model = DecisionTreeClassifier()
# model.fit(train_features, train_labels)

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.json
#     height = data['height']
#     weight = data['weight']
#     burst_size = data['burst_size']
#     waist_size = data['waist_size']
#     brand = 'A'  # Assuming brand A for now
#     brand = brand_encoder.transform([brand])[0]

#     pred_data = pd.Series([height, weight, burst_size, waist_size, brand], index=['Height', 'Weight', 'BurstSize', 'WaistSize', 'Brand'])
#     pred_data = np.array(pred_data).reshape(1, -1)

#     pred_result = model.predict(pred_data)

#     return jsonify({"fit": pred_result[0]})

# if _name_ == '_main_':
#     app.run(debug=True)
from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from flask_cors import CORS

from sklearn.preprocessing import LabelEncoder
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split

app = Flask(_name_)
CORS(app) 

# Load the data
data = pd.read_csv("Size Data.csv")

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
    brand = data['brand']  # Get brand name directly from JSON

    # Transform the brand using the LabelEncoder
    brand = brand_encoder.transform([brand])[0]

    pred_data = pd.Series([height, weight, burst_size, waist_size, brand], index=['Height', 'Weight', 'BurstSize', 'WaistSize', 'Brand'])
    pred_data = np.array(pred_data).reshape(1, -1)

    pred_result = model.predict(pred_data)

    return jsonify({"fit": pred_result[0]})

if _name_ == '_main_':
    app.run(debug=True)