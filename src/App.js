import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = () => {
    inputRef.current.click();
  };

  return (
    <div className="App">
      <div class="representativeImage">
        <h2>대표이미지</h2>
        <div className="xIcon">
          <FontAwesomeIcon icon={faX} size="xl" />
        </div>
      </div>

      <div onClick={handleImageClick}>
        <img src="./upload.png" alt=""></img>
        <input
          type="file"
          ref={inputRef}
          onchange={handleImageChange}
          style={{ display: "none" }}
        ></input>
      </div>
    </div>
  );
}

export default App;
