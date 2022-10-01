import React from "react";
import './ResultsDisplay.css'
import Rock from '../Rock/Rock'
import Paper from '../Paper/Paper'
import Scissors from '../Scissors/Scissors'

export default function ResultsDisplay(props) {
    return (
        <>
            <div className="results-container">
                <h1 className="results-heading user-picked-heading">You Picked</h1>
                <h1 className=" results-heading computer-picked-heading">The house Picked</h1>
                <div className="user-pick-result">
                    {props.userPick === "rock" && <Rock  />}
                    {props.userPick === "paper" && <Paper />}
                    {props.userPick === "scissors" && <Scissors />}
                </div>
                <div className="computer-pick-result">
                    {props.computerPick === "rock" && <Rock  />}
                    {props.computerPick === "paper" && <Paper />}
                    {props.computerPick === "scissors" && <Scissors />}
                </div>
            </div>
        </>
    )
}