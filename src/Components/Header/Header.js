import React from "react";
import './Header.css'

export default function Header(props) {
    return (
        <>
            <div className="Header">
                <div className="gameNameContainer">
                    <div className="gameNames">
                        <h1 className="gameNameRock">Rock</h1>
                        <h1 className="gameNamePaper">Paper</h1>
                        <h1 className="gameNameScissors">Scissors</h1>
                    </div>
                    <div className="scoreboard">
                        <div className="scoreName">
                            <h3>Score</h3>
                        </div>
                        <div className="user-score">
                            <h3>{props.points}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}