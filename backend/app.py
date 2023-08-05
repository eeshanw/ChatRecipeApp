from flask import Flask, request, jsonify
from flask_cors import CORS
import chatgptreq

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return "hello world"


@app.route("/chat-gpt", methods=['POST'])
def recipes():
    data = request.get_json()
    prompt = data['prompt']
    number = data['number']
    answer = chatgptreq.prep_res(
        chatgptreq.generateChatResponse(number, prompt))
    return answer


if __name__ == '__main__':
    app.run(debug=True)
