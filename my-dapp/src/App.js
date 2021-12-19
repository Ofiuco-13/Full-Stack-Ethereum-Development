import { useState } from "react";
import { ethers } from "ethers";
import './App.css';
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json"

const greeterAddress  = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
