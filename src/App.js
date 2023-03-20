import logo from "./logo.svg";
import "./App.css";

console.log(process.env.REACT_APP_MY_VAR);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{process.env.REACT_APP_MY_VAR}</h2>
      </header>
    </div>
  );
}

export default App;
