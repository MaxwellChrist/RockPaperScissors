import React from "react";
import './GameDisplay.css'
import Rock from '../Rock/Rock'
import Paper from '../Paper/Paper'
import Scissors from '../Scissors/Scissors'

export default function GameDisplay(props) {
    return (
        <>
            <div className="display-container">
                <Rock runUserPick={props.runUserPick} />
                <Paper runUserPick={props.runUserPick} />
                <Scissors runUserPick={props.runUserPick} />
            </div>
        </>
    )
}