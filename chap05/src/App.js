import React, { Component } from "react";
import ButtonChild01 from "./ButtonChild01";
import ButtonChild02 from "./ButtonChild02";

const AppStyle = {
  padding: 100,
  margin: 100,
  border: "1px solid #333",
};

class App extends Component {
  render() {
    return (
      <div className="App" style={AppStyle}>
        <h2>{"부모 컴포넌트"}</h2>
        <ButtonChild01 title={"orange button"} />
        <ButtonChild02 title={"yellow button"} />
      </div>
    );
  }
}

export default App;
