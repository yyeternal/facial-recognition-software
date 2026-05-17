import React from 'react'
import { Link } from "react-router-dom";
import "./App.css"; 

const Home = () => {
  return (
    <div className="Home">
      <h1 className="Home-letter">
        Welcome to the Face Detection App
      </h1>
      <div className="Home-subsection">
        <h3 className="Home-letter">
            This app uses React and faceapi to analyze a video stream through your web cam. All you have to do is click the button below and then start webcam.
            Make sure to allow webcam on your browser and then it will start. It will give information like predicted gender and age along with a certainty. 
            Don't be offended by its predictions, it's not 100% accurate. 
            I hope you enjoy it! 
        </h3>

        <Link to="/facedetection">
            <button className="Home-button">
            Go to Face Detection
            </button>
        </Link>
      </div>
    </div>
  );
}

export default Home