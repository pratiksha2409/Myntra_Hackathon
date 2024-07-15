import os
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv, find_dotenv
from pymongo import MongoClient

load_dotenv(find_dotenv())

db = MongoClient(os.environ['MONGO_URI'])['myntra']
bcrypt = Bcrypt()