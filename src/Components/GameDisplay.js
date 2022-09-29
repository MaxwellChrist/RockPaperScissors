import React from "react";
import './GameDisplay.css'

export default function GameDisplay() {
    return (
        <>
            <div className="display-container-player-pick">
                <div className="symbol-background rock-background">
                    <div className="rock symbol">
                        <img src="./images/icon-rock.svg" alt="faded lines connecting game icons" />
                    </div>
                </div>
                <div className="symbol-background paper-background">
                    <div className="paper symbol">
                        <img src="./images/icon-paper.svg" alt="faded lines connecting game icons" />
                    </div>
                </div>
                <div className="symbol-background scissors-background">
                    <div className="scissors symbol">
                        <img src="./images/icon-scissors.svg" alt="faded lines connecting game icons" />
                    </div>
                </div>
            </div>
        </>
    )
}