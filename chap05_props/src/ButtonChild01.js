import React, { Component } from "react";

class ButtonChild01 extends Component {
  state = {
    title: this.props.title,
    color: this.props.color,
  };

  handleClick = () => {
    const check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (check.test(this.state.title)) {
      this.setState({
        title: "Purple Button",
      });
    } else {
      this.setState({
        title: "보라색 버튼",
      });
    }
  };

  render() {
    const { title, color } = this.state;

    const ButtonStyle = {
      border: "none",
      width: 100,
      height: 30,
      background: color,
    };

    return (
      <button style={ButtonStyle} onClick={this.handleClick}>
        {title}
      </button>
    );
  }
}

ButtonChild01.defaultProps = {
  title: "no name",
};

export default ButtonChild01;
