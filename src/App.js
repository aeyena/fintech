import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return <>{isMobile && children}</>;
};

export const PC = ({ children }) => {
  const isPC = useMediaQuery({
    query: "(min-width: 769px)",
  });
  return <>{isPC && children}</>;
};

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <Mobile>
        <div className="representativeImage">
          <h2>대표이미지</h2>
          <div className="xIcon">
            <FontAwesomeIcon icon={faX} size="xl" />
          </div>
        </div>

        <div class="list">
          <div className="img-upload">
            <img src="./Gangnam.jpg" width="91"></img>
          </div>

          {[1, 2, 3].map(function () {
            return (
              <div className="space">
                <img src="./upload.png" />
              </div>
            );
          })}

          {[1, 2, 3, 4].map(function () {
            return (
              <div className="space">
                <img src="./upload.png" />
              </div>
            );
          })}

          {[1, 2, 3, 4].map(function () {
            return (
              <div className="space">
                <img src="./upload.png" />
              </div>
            );
          })}

          <button className="img-upload-btn">대표이미지 변경 완료</button>
        </div>
      </Mobile>
    </div>
  );
}

export default App;
