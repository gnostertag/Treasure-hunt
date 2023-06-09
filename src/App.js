import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";
import video from './assets/waves.mp4';

const App = () => {
  const initialBoard = ["?", "?", "?", "?", "?", "?", "?", "?", "?"];
  const [board, setBoard] = useState(initialBoard);
  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [reset, setReset] = useState(false);

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board];
    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "💎";
      setBoard(updateBoard);
      setTimeout(() => {
        alert("You Win!");
      }, 500);
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣";
      setBoard(updateBoard);
      setTimeout(() => {
        alert("Too Bad");
      }, 500);
    } else {
      updateBoard[clickedSquare] = "❌";
      setBoard(updateBoard);
    }
  };
  const resetGame = () => {
    setBoard(initialBoard);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
    setReset(true);
  };

  return (
    <>
      <div className="background">
        <video src={video} autoPlay loop muted type='video.mp4' className="video"/>
      <h1> </h1>
      <div className="board">
        {board.map((square, index) => {
          return (
            <Square
              square={square}
              index={index}
              key={index}
              reset={reset}
              handleGamePlay={handleGamePlay}
            />
          );
        })}
      </div>
      <button onClick={resetGame} className="button">
      🔄 Reset Game 🔄
      </button>
      </div>
    </>
  );
};

export default App;
