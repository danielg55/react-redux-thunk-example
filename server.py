from flask import Flask
from json import dumps

app = Flask(__name__)


@app.route('/api/get_word/', methods=['POST'])
def get_word():
    return dumps(dict(word='RemoteWord!'))


if __name__ == '__main__':
    app.run()