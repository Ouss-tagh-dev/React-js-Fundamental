import { Component } from "react";
class App extends Component {
  render() {
    const names = ["AA", "BB", "CC", "DD", "EE"];
    const items = names.map((item, idx) => {
      return (
        <li key={idx}>
          {idx} - {item}
        </li>
      );
    });
    return (
      <div className="App">
        <h1>{"Student List"}</h1>
        <div>{items}</div>
      </div>
    );
  }
}

export default App;
