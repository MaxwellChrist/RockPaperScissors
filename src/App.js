import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './Components/Header/Header';
import GameDisplay from './Components/GameDisplay/GameDisplay';
import Rules from './Components/Rules/Rules';
import ResultsDisplay from './Components/ResultsDisplay/ResultsDisplay'

function App() {
  let [userPick, setUserPick] = useState("")
  let [computerPick, setComputerPick] = useState("")
  // let [points, setPoints] = useState(0)
  // let [turnResult, setTurnResult] = useState(0)
  // let [result, setResult] = useState("lets see who wins")
  // let [gameOver, setGameOver] = useState(false)

  // useEffect(() => {
  //   runComputerPick()
  // }, [userPick])

  function runComputerPick() {
    let decider = Math.floor(Math.random() * 3)
    if (decider === 0) {
      setComputerPick("rock")
    } else if (decider === 1) {
      setComputerPick("paper")
    } else {
      setComputerPick("scissors")
    }
  }

  function runUserPick(pick) {
    let gameContainer = document.querySelector(".display-container")
    let resultsContainer = document.querySelector(".results-container")
    gameContainer.style.display = "none"
    resultsContainer.style.display = "grid"
    setUserPick(pick)
    runComputerPick()
  }
  console.log("the users pick is " + userPick)
  console.log("the computer pick is " + computerPick)
  
  return (
    <div className="App">
      <Header />
      <GameDisplay runUserPick={runUserPick} />
      <ResultsDisplay userPick={userPick} computerPick={computerPick} />
      <Rules />
    </div>
  );
}

export default App;
