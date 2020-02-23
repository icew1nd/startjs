import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You built the{" "}
          <span style={{ color: "#61dafb" }}>
            {process.env.REACT_APP_TARGET}
          </span>{" "}
          version!
        </p>
      </header>
    </div>
  );
}

export default App;
