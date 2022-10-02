import React from "react";
import "./ResultsDisplay.css";
import Rock from "../Rock/Rock";
import Paper from "../Paper/Paper";
import Scissors from "../Scissors/Scissors";

export default function ResultsDisplay(props) {
  function reset() {
    if (props.result === "You Win") {
      props.setPoints(props.points + 1);
    }
    props.resetPicks();
  }
  return (
    <>
      <div className="results-container">
        <h1 className="results-heading user-picked-heading">You Picked</h1>
        <h1 className="results-heading computer-picked-heading">
          The house Picked
        </h1>
        <div className="results-display-and-button">
          <h1 className="results-display">{props.result}</h1>
          <button onClick={reset}>Play again</button>
        </div>
        <div className="user-pick-result">
          <div className="winner-outer">
            <div className="winner-middle">
              <div className="winner-inner">
                {props.userPick === "rock" && <Rock />}
                {props.userPick === "paper" && <Paper />}
                {props.userPick === "scissors" && <Scissors />}
              </div>
            </div>
          </div>
        </div>
        <div className="computer-pick-result">
          <div className="winner-outer">
            <div className="winner-middle">
              <div className="winner-inner">
                {props.computerPick === "rock" && <Rock />}
                {props.computerPick === "paper" && <Paper />}
                {props.computerPick === "scissors" && <Scissors />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
