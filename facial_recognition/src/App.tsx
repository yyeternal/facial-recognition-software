import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FaceDetection from "./FaceDetection";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<Home/>}/>
                <Route path="/facedetection" element={<FaceDetection/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App