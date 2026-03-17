from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/greet', methods=["POST"])
def send_greet():

    data = request.get_json()   # get full JSON body
    msg = data.get("message")   # extract message

    response = "hello " + msg

    return jsonify({
        "msg": response
    })

if __name__ == "__main__":
    app.run(debug=True)