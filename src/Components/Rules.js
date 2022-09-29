import React from 'react';
import './Rules.css'

export default function Rules() {
    function showRules() {
        console.log("these are the rules!")
    }

    return (
        <>
            <div className='rules-btn-container'>
                <div className='rules-btn' onClick={showRules}>Rules</div>
            </div>
        </>
    )
}