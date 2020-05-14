import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    title: "김우정 욜로",
  };
  changeTitle = (e) => {
    console.log(e.target.value);
    this.setState({
      title: e.target.value,
    });
  };
  render() {
    const { title } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{title}</p>
          <input type="text" value={title} onChange={this.changeTitle} />
        </header>
      </div>
    );
  }
}

export default App;
