from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from textToSpeech import pdf_to_mp3
import os

# Define the temporary directory based on the operating system
temp_dir = 'C:\\temp\\' if os.name == 'nt' else '/tmp/'
pdf_path = os.path.join(temp_dir, 'input.pdf')
mp3_path = os.path.join(temp_dir, 'output.mp3')

app = Flask(__name__)
CORS(app)

@app.route('/generate-speech', methods=['POST'])
def generate_speech():
    if 'pdfFile' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    pdf_file = request.files['pdfFile']
    if pdf_file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Save the uploaded PDF file to the determined temporary path
        pdf_file.save(pdf_path)
        if not pdf_to_mp3(pdf_path, mp3_path):
            raise Exception('Conversion failed. Unable to extract text or generate speech.')

        if not os.path.exists(mp3_path):
            raise Exception('MP3 file not found after conversion.')

        # Return the MP3 file as a downloadable attachment
        return send_file(mp3_path, as_attachment=True)
    except Exception as e:
        app.logger.error('Failed to generate speech: %s', str(e))  # Log the error for more details
        return jsonify({'error': str(e)}), 500
