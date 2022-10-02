import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './Components/Header/Header';
import GameDisplay from './Components/GameDisplay/GameDisplay';
import Rules from './Components/Rules/Rules';
import ResultsDisplay from './Components/ResultsDisplay/ResultsDisplay'

function App() {
  let [userPick, setUserPick] = useState("")
  let [computerPick, setComputerPick] = useState("")
  let [points, setPoints] = useState(0)
  let [result, setResult] = useState("lets see who wins")

  useEffect(() => {
    if (
      (userPick === "paper" && computerPick === "rock") || 
      (userPick === "scissors" && computerPick === "paper") || 
      (userPick === "rock" && computerPick === "scissors")) {
      setResult("You Win")
    } else if (
      (computerPick === "paper" && userPick === "rock") || 
      (computerPick === "scissors" && userPick === "paper") || 
      (computerPick === "rock" && userPick === "scissors")) {
      setResult("You Lose")
    } else {
      setResult("Draw")
    }
  }, [computerPick, userPick])

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
    let computerIcon = document.querySelector(".symbol-background")
    computerIcon.style.height = "300px";
    computerIcon.style.width = "300px";
    setUserPick(pick)
    runComputerPick()
  }

  function resetPicks() {
    setUserPick("")
    setComputerPick("")
    setResult("lets see who wins")
    let gameContainer = document.querySelector(".display-container")
    let resultsContainer = document.querySelector(".results-container")
    gameContainer.style.display = "grid"
    resultsContainer.style.display = "none"
    let computerIcon = document.querySelector(".symbol-background")
    computerIcon.style.height = "200px";
    computerIcon.style.width = "200px";
  }
  
  return (
    <div className="App">
      <Header points={points}/>
      <GameDisplay runUserPick={runUserPick} />
      <ResultsDisplay resetPicks={resetPicks} points={points} setPoints={setPoints} result={result} userPick={userPick} computerPick={computerPick} />
      <Rules />
    </div>
  );
}

export default App;
