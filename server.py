from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


@app.route("/")
def serve_index():
    return render_template('index.html')

<<<<<<< HEAD
@app.route("/chartjs")
=======

@app.route('/chartjs')
>>>>>>> 15fc88d6ceef29d412c8fb28bfff428234e7f1e9
def serve_chartjs():
    return render_template('chartjs.html')

if __name__ == "__main__":
    app.run(debug=True)