import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DatePickerCustom from "./components/DatePicker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DatePickerCustom />
      </div>
    );
  }
}

export default App;
