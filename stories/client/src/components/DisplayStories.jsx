import React, { useEffect, useState } from 'react';
import axios from 'axios';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './DisplayStories.css'; // Make sure to create this CSS file for styling

function DisplayStories() {
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/stories');
        setStories(response.data);
      } catch (error) {
        alert('Error fetching stories');
      }
    };
    fetchStories();
  }, []);

  useEffect(() => {
    if (stories.length > 0) {
      // Initialize Video.js for the current video element
      const currentStory = document.getElementById(`video-${currentStoryIndex}`);
      if (currentStory) {
        const player = videojs(currentStory, {}, function onPlayerReady() {
          this.on('ended', function () {
            // Handle video ended event (e.g., move to the next story)
            if (currentStoryIndex < stories.length - 1) {
              setCurrentStoryIndex(currentStoryIndex + 1);
            }
          });
        });

        return () => {
          player.dispose();
        };
      }
    }
  }, [stories, currentStoryIndex]);

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };

  const handlePreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  return (
    <div className="display-stories-container">
      <h2>Stories</h2>
      <div className="stories-slider">
        {currentStoryIndex > 0 && (
          <button className="nav-button previous" onClick={handlePreviousStory}>
            &#10094;
          </button>
        )}
        <div className="video-container" >
          {stories.map((story, index) => (
            <div key={index} className={`video-wrapper ${index === currentStoryIndex ? 'active' : ''}`} >
              <video 
                id={`video-${index}`}
                className="video-js"
                controls
                preload="auto"
                width="900" // Adjust the width as needed
                height="800" // Adjust the height as needed
              >
                <source src={story.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
        {currentStoryIndex < stories.length - 1 && (
          <button className="nav-button next" onClick={handleNextStory}>
            &#10095;
          </button>
        )}
      </div>
    </div>
  );
}

export default DisplayStories;
