import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    count: 0,
  };

  increase = (e) => {
    this.setState({count: this.state.count + 2})
  };
  render() {
    return (
      <div className="App">
        <h1>Click Time {this.state.count}</h1>
        <button className="btn btn-success" onClick={this.increase}>
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
