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
      let winnerOuter = document.querySelector(".user-pick-outer")
      winnerOuter.style.backgroundColor = "rgba(255, 255, 255, 0.02)"
      let winnerMiddle = document.querySelector(".user-pick-middle")
      winnerMiddle.style.backgroundColor = "rgba(255, 255, 255, 0.02)"
      let winnerInner = document.querySelector(".user-pick-inner")
      winnerInner.style.backgroundColor = "rgba(255, 255, 255, 0.02)"
    } else if (
      (computerPick === "paper" && userPick === "rock") || 
      (computerPick === "scissors" && userPick === "paper") || 
      (computerPick === "rock" && userPick === "scissors")) {
      setResult("You Lose")
      let winnerOuter = document.querySelector(".computer-pick-outer")
      winnerOuter.style.backgroundColor = "rgba(255, 255, 255, 0.02)"
      let winnerMiddle = document.querySelector(".computer-pick-middle")
      winnerMiddle.style.backgroundColor = "rgba(255, 255, 255, 0.02)"
      let winnerInner = document.querySelector(".computer-pick-inner")
      winnerInner.style.backgroundColor = "rgba(255, 255, 255, 0.02)"
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
    console.log(decider)
  }

  function runUserPick(pick) {
    let gameContainer = document.querySelector(".display-container")
    let resultsContainer = document.querySelector(".results-container")
    gameContainer.style.display = "none"
    resultsContainer.style.display = "grid"
    setUserPick(pick)
    runComputerPick()
  }

  function resetPicks() {
    let gameContainer = document.querySelector(".display-container")
    let resultsContainer = document.querySelector(".results-container")
    gameContainer.style.display = "grid"
    resultsContainer.style.display = "none"
    setUserPick("")
    setComputerPick("")
    setResult("lets see who wins")
    let winnerOuter = document.querySelector(".user-pick-outer")
    winnerOuter.style.backgroundColor = "transparent"
    let winnerMiddle = document.querySelector(".user-pick-middle")
    winnerMiddle.style.backgroundColor = "transparent"
    let winnerInner = document.querySelector(".user-pick-inner")
    winnerInner.style.backgroundColor = "transparent"
    let winnerOuter2 = document.querySelector(".computer-pick-outer")
    winnerOuter2.style.backgroundColor = "transparent"
    let winnerMiddle2 = document.querySelector(".computer-pick-middle")
    winnerMiddle2.style.backgroundColor = "transparent"
    let winnerInner2 = document.querySelector(".computer-pick-inner")
    winnerInner2.style.backgroundColor = "transparent"
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
