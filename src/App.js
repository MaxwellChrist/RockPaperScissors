import './App.css';
import React, {useState} from 'react'
import Header from './Components/Header/Header';
import GameDisplay from './Components/GameDisplay/GameDisplay';
import Rules from './Components/Rules/Rules';

function App() {
  let [userPick, setUserPick] = useState("")
  // let [computerPick, setComputerPick] = useState("")
  // let [points, setPoints] = useState(0)
  // let [turnResult, setTurnResult] = useState(0)
  // let [result, setResult] = useState("lets see who wins")
  // let [gameOver, setGameOver] = useState(false)

  function runUserPick(pick) {
    setUserPick(pick)
  }
  console.log("the users pick is " + userPick)
  
  return (
    <div className="App">
      <Header />
      <GameDisplay runUserPick={runUserPick} />
      <Rules />
    </div>
  );
}

export default App;
