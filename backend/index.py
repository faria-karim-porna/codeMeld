
from flask import flash, request, jsonify, render_template
from flask_cors import CORS
from flask_mysqldb import MySQL
from flask import Flask
import mysql.connector
from dotenv import load_dotenv
import os
load_dotenv()

app = Flask(__name__)
CORS(app)
myDB = mysql.connector.connect(
    host = "cloud.mindsdb.com",
    user = os.environ.get("USER"),
    password = os.environ.get("PASSWORD"),
    port = "3306"
)

@app.route('/')
def index():
    return "MindsDB"

@app.route('/codeConverter', methods=['POST'])
def codeConverter():
    try:
        _json = request.json
        codes = _json['codes']
        inputLanguage = _json['inputLanguage']
        outputLanguage = _json['outputLanguage']
        if codes and inputLanguage and outputLanguage and request.method == 'POST':
            cursor = myDB.cursor()
            cursor.execute("SELECT response FROM mindsdb.gpt_model_for_codemeld WHERE codes = %s AND inputLanguage = %s AND outputLanguage = %s;",(codes, inputLanguage, outputLanguage))
            result = []
            for queryResult in cursor:
                result = list(queryResult)
                print(list(queryResult))
            resp = jsonify(result)
            resp.status_code = 200
            return resp
    except Exception as e:
        print(e)
    finally:
        cursor.close()
		
if __name__ == "__main__":
    app.run()