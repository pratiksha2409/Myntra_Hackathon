import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Myntra Stories</h1>
      <nav>
        <Link to="/upload">Upload Story</Link>
        <Link to="/stories">View Stories</Link>
        <Link to="/sizefit">Size Fit</Link>

      </nav>
    </div>
  );
}

export default Home;
