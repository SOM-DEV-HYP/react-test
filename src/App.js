import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse movement
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <h1
        className="interactive-text"
        style={{
          transform: `translate(${(mousePos.x - window.innerWidth/2)/30}px, ${(mousePos.y - window.innerHeight/2)/30}px)`
        }}
      >
        Welcome Somnath Sahoo !!!
      </h1>
      <h2
        className="interactive-text"
        style={{
          transform: `translate(${(mousePos.x - window.innerWidth/2)/50}px, ${(mousePos.y - window.innerHeight/2)/50}px)`
        }}
      >
        {time.toLocaleTimeString()}
      </h2>
      <p className="sub-text">We're thrilled to have you here 🚀</p>
    </div>
  );
}

export default App;
