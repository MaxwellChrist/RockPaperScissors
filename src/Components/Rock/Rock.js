import React from "react";
import './Rock.css'

export default function Rock(props) {
    return (
        <>
            <div className="symbol-background rock-background" onClick={() => props.runUserPick("rock")}>
                <div className="rock symbol">
                    <img src="./images/icon-rock.svg" alt="rock icon" />
                </div>
            </div>
        </>
    )
}