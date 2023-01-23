import { Component } from "react";
class App extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  };

  validate() {
    if (!this.state.email > 0 && !this.state.password > 0) {
      this.setState({ emailError: "Email and Password Required" });
    } else if (!this.state.email > 0) {
      this.setState({ emailError: "Email Required" });
    } else if (!this.state.password > 0) {
      this.setState({ passwordError: "Password Required" });
    } else {
      return true;
    }
  }

  formSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      alert("Form Submit Done");
    }
  };
  render() {
    return (
      <div className="App">
        <h1>{"Login Panel"}</h1>

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
              <strong style={{ color: "red" }}>{this.state.emailError}</strong>
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
              <strong style={{ color: "red" }}>
                {this.state.passwordError}
              </strong>
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
