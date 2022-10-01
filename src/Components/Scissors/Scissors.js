import React from "react";
import './Scissors.css'

export default function Scissors(props) {
    return (
        <>
            <div className="symbol-background scissors-background" onClick={() => props.runUserPick("scissors")}>
                <div className="scissors symbol">
                    <img src="./images/icon-scissors.svg" alt="scissors icon" />
                </div>
            </div>
        </>
    )
}