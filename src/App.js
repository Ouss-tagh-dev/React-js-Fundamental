import { Component } from "react";
class App extends Component {
  state = {
    name: "",
  };
  changeData = (e) => {
    let val = e.target.value;
    this.setState({ name: val });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <div>
          <form>
            <div className="form-group" style={{ marginLeft: 200 }}>
              <label>Username</label>
              <br />
              <input type="text" name="username" onChange={this.changeData} />
              <br />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
