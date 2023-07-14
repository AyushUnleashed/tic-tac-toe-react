import logo from './logo.svg';
import './App.css';
import Board from './Components/Board'
function App() {
  return (
    <div className="App">
      <Board/>
      <div style={{
        backgroundImage: "url(./images/download.png)",
        width: "300px",
        height: "200px",
        backgroundSize: "cover",
      }}>
        Robot
        {/* Content for the div goes here */}
      </div>
    </div>
  );
}

export default App;
