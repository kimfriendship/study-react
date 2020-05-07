import React, { Component } from 'react';

class App extends Component {
  check_length = (receive_title) => {
    let title = receive_title;
    if (title.length > 0) {
      title += ' > 0';
    } else if (title.length === 0) {
      title += ' === 0';
    } else {
      title += ' < 0';
    }
    return title;
  };

  render() {
    let title = 'Hello World';
    return (
      <div>
        <h1>{this.check_length('Hello World')}</h1>
      </div>
    );
  }
}

export default App;
