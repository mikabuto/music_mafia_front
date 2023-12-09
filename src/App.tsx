import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { sendMessage } from "./api/websocet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WebSocket Chat</h1>
        <h2>
          Your ID: <span id="ws-id"></span>
        </h2>
        <form action="" onSubmit={(e) => sendMessage(e)} className="form">
          <input type="text" id="messageText" autoComplete="off" />
          <button>Send</button>
        </form>
        <ul id="messages"></ul>
        {/* <button onClick={sendRequest}>Click me!</button> */}
      </header>
    </div>
  );
}

export default App;
