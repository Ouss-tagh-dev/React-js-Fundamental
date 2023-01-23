import { Component } from "react";
class App extends Component {
  state = {
    age: "",
  };

  render() {
    return (
      <div className="App">
        <h1>{"Select Option"}</h1>
        <div>
          <form onSubmit={this.formSubmit}>
            <div className="form-group" style={{ marginLeft: 200 }}>
              <label>Your Age: </label>
              <br />
              <select onChange={(e) => this.setState({ age: e.target.value })}>
                <option value="" disabled selected>
                  {" "}
                  Select Your Age{" "}
                </option>
                <option value="15 - 20"> 15 - 20 </option>
                <option value="21 - 30"> 21 - 30 </option>
                <option value="31 - 40"> 31 - 40 </option>
              </select>
              <h6>My Age : {this.state.age}</h6>

              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
