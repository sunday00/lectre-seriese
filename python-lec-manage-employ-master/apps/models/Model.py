from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = "secret_key"

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://Tester:Zktm500CC!@127.0.0.1/TestForLaravel'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

