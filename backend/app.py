from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def get_data():
    data = request.get_json()
    prompt = data.get("prompt")

    return jsonify({
        "reply": f"You sent: {prompt}"
    })

if __name__ == "__main__":
    app.run(debug=True)