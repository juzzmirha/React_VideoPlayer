import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';

function App() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    { id: 1, source: '/videos/video1.mp4' },
    { id: 2, source: '/videos/video2.mp4' },

  ];

  const handleVideoEnd = () => {
    if (currentVideoIndex + 1 < videos.length) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="App">
      <h1>MXRXSS  Video Player</h1>
      <div className="video-container">
        {videos.map((video, index) => (
          <div key={video.id} style={{ display: index === currentVideoIndex ? 'block' : 'none' }}>
            <p>{video.title}</p>
            <video controls width="854 " height="480" onEnded={handleVideoEnd}>
              <source src={video.source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
