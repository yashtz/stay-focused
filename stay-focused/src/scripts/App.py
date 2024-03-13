from flask import Flask, request, send_file
from flask_cors import CORS 
from textToSpeech import pdf_to_mp3

app = Flask(__name__)
CORS(app)

@app.route('/generate-speech', methods=['POST'])
def generate_speech():
    try:
        pdf_file = request.files['pdfFile']
        pdf_path = '/tmp/input.pdf'  # Save PDF file temporarily
        mp3_path = '/tmp/output.mp3'  # Save MP3 file temporarily
        pdf_file.save(pdf_path)
        pdf_to_mp3(pdf_path, mp3_path)
        return send_file(mp3_path, as_attachment=True)
    except Exception as e:
        return str(e), 500  # Return the error message and set status code to 500 (Internal Server Error)
