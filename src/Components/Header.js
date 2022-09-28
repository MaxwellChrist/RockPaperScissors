import React from "react";
import './Header.css'

export default function Header() {
    return (
        <>
            <div className="Header">
                <div className="gameNameContainer">
                    <div className="gameNames">
                        <div className="gameName">
                            <h1>Rock</h1>
                        </div>
                        <div className="gameName">
                            <h1>Paper</h1>
                        </div>
                        <div className="gameName">
                            <h1>Scissors</h1>
                        </div>
                    </div>
                    <div className="scoreboard">
                        <div className="scoreName">
                            <h3>Score</h3>
                        </div>
                        <div className="userscore">
                            <h3>0</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}