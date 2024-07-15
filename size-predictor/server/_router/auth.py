from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token
from model import db, bcrypt

auth = Blueprint("auth", __name__)


@auth.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    user = db.users.find_one({"email": data["email"]})
    if not user:
        return jsonify({"message": "User not found", "success": False})
    if bcrypt.check_password_hash(user["password"], data["password"]):
        access_token = create_access_token(identity=user["email"])
        return jsonify({"message": "Login successful", "access_token": access_token, "success": True})
    else:
        return jsonify({"message": "Incorrect password", "success": False})
    

@auth.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    user = db.users.find_one({"email": data["email"]})
    print(user)
    if user:
        return jsonify({"message": "User with this email already exists", "success": False})
    db.users.insert_one({
        "name": data["name"],
        "email": data["email"],
        "password": bcrypt.generate_password_hash(data["password"]).decode("utf-8")
    })
    return jsonify({"message": "User created successfully", "success": True})
