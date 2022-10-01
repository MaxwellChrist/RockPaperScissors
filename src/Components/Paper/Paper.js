import React from "react";
import './Paper.css'

export default function Paper(props) {
    return (
        <>
            <div className="symbol-background paper-background" onClick={() => props.runUserPick("paper")}>
                <div className="paper symbol">
                    <img src="./images/icon-paper.svg" alt="paper icon" />
                </div>
            </div>
        </>
    )
}