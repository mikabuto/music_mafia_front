import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { sendRequest } from "./api/sendRequest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sendRequest}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
