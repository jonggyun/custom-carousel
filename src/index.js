import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Wrapper, Ul, List } from "./styled.js";

const INTERVAL = 2000;

function App() {
  const dataArray = [
    { name: "1st content." },
    { name: "2nd content." },
    { name: "3rd content." },
    { name: "4rd content." },
    { name: "5rd content." }
  ];

  const customArray = [...dataArray, dataArray[0]]; // 임의로 마지막에 첫번째 요소가 된 배열 생성.
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const customInterval =
      currentIndex === 0 || currentIndex + 1 === customArray.length
        ? INTERVAL / 2
        : INTERVAL; // 첫번째와 마지막 요소는 interval을 절반으로 설정
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % customArray.length);
    }, customInterval);

    return () => {
      clearInterval(interval);
    };
  }, [customArray.length, currentIndex]);

  return (
    <div className="App">
      <Wrapper>
        <Ul currentIndex={currentIndex} isFirst={currentIndex === 0}>
          {customArray.map(data => (
            <List>{data.name}</List>
          ))}
        </Ul>
      </Wrapper>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
