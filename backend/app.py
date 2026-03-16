from flask import Flask, jsonify, request
from flask_cors import CORS
import ollama

app = Flask(__name__)
CORS(app)

@app.route("/res", methods=["POST"])
def get_data():

    data = request.get_json()
    prompt = data.get("prompt")

    response = ollama.chat(
        model="llama3",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    reply = response["message"]["content"]

    return jsonify({
        "reply": reply
    })


if __name__ == "__main__":
    app.run(debug=True)