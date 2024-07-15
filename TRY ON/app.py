from flask import Flask, request, jsonify
from gradio_client import Client, handle_file
from flask_cors import CORS
import os
import tempfile

app = Flask(__name__)
CORS(app)
# Initialize Gradio client
client = Client("levihsu/OOTDiffusion")

# Path to the garment image in the project directory
GARMENT_IMAGE_PATH = "img/red.jpg"

@app.route('/process_images', methods=['POST'])
def process_images():
    if 'vton_img' not in request.files:
        return jsonify({"error": "Please provide vton_img"}), 400

    vton_img = request.files['vton_img']

    # Save uploaded images to temporary files
    vton_img_path = os.path.join(tempfile.gettempdir(), vton_img.filename)
    vton_img.save(vton_img_path)

    try:
        # Use Gradio client to predict
        result = client.predict(
            vton_img=handle_file(vton_img_path),
            garm_img=handle_file(GARMENT_IMAGE_PATH),
            n_samples=1,
            n_steps=20,
            image_scale=2,
            seed=-1,
            api_name="/process_hd"
        )
        # Assuming `result` contains the URL of the generated image
        generated_image_url = result[0]  # Adjust based on actual response structure
        return jsonify({"result": [{"generated_image": generated_image_url}]})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        # Clean up uploaded images
        if os.path.exists(vton_img_path):
            os.remove(vton_img_path)

if __name__ == '__main__':
    app.run(debug=True)
