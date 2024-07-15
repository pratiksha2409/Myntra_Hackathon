import React, { useState } from 'react';
import axios from 'axios';

function UploadStory() {
  const [video, setVideo] = useState(null);

  const handleVideoUpload = (event) => {
    setVideo(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('video', video);

    try {
      await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Video uploaded successfully!');
    } catch (error) {
      alert('Error uploading video');
    }
  };

  return (
    <div>
      <h2>Upload a Story</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={handleVideoUpload} />
        <button type="submit">Upload Video</button>
      </form>
    </div>
  );
}

export default UploadStory;
