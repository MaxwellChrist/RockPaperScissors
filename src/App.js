import './App.css';
import Header from './Components/Header/Header';
import GameDisplay from './Components/GameDisplay/GameDisplay';
import Rules from './Components/Rules/Rules';

function App() {
  return (
    <div className="App">
      <Header />
      <GameDisplay />
      <Rules />
    </div>
  );
}

export default App;
