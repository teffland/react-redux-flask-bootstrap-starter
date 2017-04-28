from __future__ import print_function

from flask import Flask, render_template, render_template_string
from flask_restful import Resource, Api

app = Flask(__name__)
# api = Api(app)

@app.route('/', methods=['GET'])
def root():
    return render_template('index.html')

@app.route('/<path:path>', methods=['GET'])
def any_root_path(path):
    return render_template('index.html')

@app.route('/api', methods=["GET"])
def api_root():
    return render_template_string('<h1>API Whaa!</h1>')
# TODO Add in REST demonstration

if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True)
