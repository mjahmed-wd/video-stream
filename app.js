import React, { useState } from "react";
import "./styles.css";
import Lottie from "react-lottie";
import animationData from "./file.json";
import sound from "./sound.json";

export default function App() {
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  // add button style
  const buttonStyle = {
    display: "block",
    margin: "10px auto"
  };

  // add default lottie options
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: sound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isPaused={isPaused}
        direction={direction}
      />
      <button style={buttonStyle} onClick={() => setIsPaused(!isPaused)}>
        Pause/Play
      </button>
      <button onClick={() => setDirection((prev) => (prev === 1 ? -1 : 1))}>
        direction
      </button>
    </div>
  );
}
