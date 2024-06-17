"""
Main route definitions.
"""

from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    """
    Home page
    """
    return 'Set up ready...!'

@app.route('/login')
def home():
    """
    Login 
    """
    return 'Auth token'

if __name__ == '__main__':
    app.run(debug=True)
