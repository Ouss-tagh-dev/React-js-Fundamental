import { Component } from "react";
class App extends Component {
  render() {
    const names = [
      { name: "Oussama", age: 21, grad: 5 },
      { name: "Yassine", age: 20, grad: 3 },
      { name: "Med", age: 28, grad: 4 },
    ];

    const items = names.map((item, idx) => {
      return (
        <ul key={idx}>
          <li>
            {idx} {"Item"}
            <ul>
              <li> Name : {item.name}</li>
              <li> Name : {item.age}</li>
              <li> Name : {item.grad}</li>
            </ul>
            <button>Edit</button> | <button>Delete</button>
          </li>
        </ul>
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
