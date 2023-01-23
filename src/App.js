import { Component } from "react";
class App extends Component {
  state = {
    email: "",
    password: "",
  };

  formSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.email}</h1>
        <h1>{this.state.password}</h1>
        <div>
          <form onSubmit={this.formSubmit}>
            <div className="form-group" style={{ marginLeft: 200 }}>
              <label>Email</label>
              <br />
              <input
                type="email"
                name="email"
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
              <br />
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />
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
