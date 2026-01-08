from flask import Flask
import mysql.connector

app = Flask(__name__)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="tejaspatil@2004",
    database="smart_crop"
)

@app.route("/")
def home():
    cursor = db.cursor()
    cursor.execute("SHOW TABLES")
    return "MySQL Connected Successfully"

if __name__ == "__main__":
    app.run(debug=True)
