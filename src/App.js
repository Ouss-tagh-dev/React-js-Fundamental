import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <div>
          <form>
            <div className="form-group">
              <label>Username</label>
              <br />
              <input type="text" name="username" />
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
