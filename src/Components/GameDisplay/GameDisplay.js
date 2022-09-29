import React from "react";
import './GameDisplay.css'
import Rock from '../Rock/Rock'
import Paper from '../Paper/Paper'
import Scissors from '../Scissors/Scissors'

export default function GameDisplay() {
    return (
        <>
            <div className="display-container-player-pick">
                <Rock />
                <Paper />
                <Scissors />
            </div>
        </>
    )
}