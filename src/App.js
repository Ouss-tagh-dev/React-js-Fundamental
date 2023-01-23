import { Component } from "react";
class App extends Component {
  state = {
    username: "",
  };
  changeData = (e) => {
    let val = e.target.name; //Username
    let myValue = e.target.value; //Getting value
    this.setState({ [val]: myValue }); //value set on the state
  };

  formSubmit = (e) => {
    e.preventDefault();
    console.log("Hi Oussama");
  };
  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.username}</h1>
        <div>
          <form onSubmit={this.formSubmit}>
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
