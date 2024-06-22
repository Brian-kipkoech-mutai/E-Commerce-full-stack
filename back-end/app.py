"""
Main route definitions.
"""
import os
import traceback
from datetime import timedelta, datetime, timezone
from flask import Flask, jsonify, request
from flask_jwt_extended import (
    JWTManager, create_access_token, jwt_required,
    get_jwt, set_access_cookies, unset_jwt_cookies
)
from werkzeug.security import generate_password_hash, check_password_hash

from models.main_models import User
from engine.db_storage import DBStorage

# Instantiate a storage object and flush all classes that need to be mapped to database tables
storage = DBStorage()
storage.reload()
storage.save()
storage.close()

app = Flask(__name__)

app.config["JWT_COOKIE_SECURE"] = False
app.config["JWT_TOKEN_LOCATION"] = ["cookies"]
app.config["JWT_SECRET_KEY"] = os.getenv('JWT_SECRET_KEY', 'wertyu567890hjkl98ytergvcx')

jwt = JWTManager(app)

@app.route('/register', methods=['POST'], strict_slashes=False)
def register_user():
    """Register a new user."""
    if request.method == 'POST':
        registration_data = request.get_json()
        username = registration_data.get('username')
        password = registration_data.get('password')
        role = registration_data.get('role', 'member')

        # Early return if essential fields are missing
        if not all([username, password]):
            return jsonify({"error": "Missing required fields"}), 400

        # Check if username already exists
        if storage.get_user(username):
            return jsonify({"error": "Username already exists"}), 400

        password_hashed = generate_password_hash(password)

        try:
            new_user = User(
                username=username,
                password=password_hashed,
                role=role
            )
            storage.new(new_user)

            access_token = create_access_token(
                identity=username,
                additional_claims={"role": role},
                expires_delta=timedelta(hours=24)
            )
            response = jsonify(access_token=access_token), 200
            set_access_cookies(response, access_token)
            return response

        # pylint: disable=broad-except
        except Exception as e:
            storage.rollback()
            traceback.print_exc()
            return jsonify(error=str(e)), 500
        finally:
            storage.close()
    return jsonify({"error": "Invalid method"}), 405

@app.route('/login', methods=['POST'], strict_slashes=False)
def login():
    """Log in a user."""
    if request.method == 'POST':
        login_data = request.get_json()
        username = login_data.get('username')
        password = login_data.get('password')

        try:
            storage.reload()
            user = storage.get_user(username)

            if not user or not check_password_hash(user.password, password):
                return jsonify(error='Wrong username or password'), 401

            access_token = create_access_token(
                identity=user.username,
                additional_claims={"role": user.role},
                expires_delta=timedelta(hours=24)
            )
            response = jsonify(data='Login successful'), 200
            set_access_cookies(response, access_token)
            return response

        # pylint: disable=broad-except
        except Exception as e:
            traceback.print_exc()
            return jsonify(error=str(e)), 500

        finally:
            storage.close()
    return jsonify({"error": "Invalid method"}), 405


@app.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    """Log out a user."""
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

# Using an `after_request` callback, we refresh any token that is within 30 minutes of expiry
@app.after_request
def refresh_expiring_jwts(response):
    """Refresh expiring JWT tokens."""
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            username = get_jwt()["sub"]
            role = get_jwt()["role"]
            access_token = create_access_token(
                identity=username,
                additional_claims={"role": role},
                expires_delta=timedelta(hours=24)
            )
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original response
        return response

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
