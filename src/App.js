import { Component } from "react";
class App extends Component {
  state = {
    email: "",
    details: "",
  };
  formSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      alert("Form Submit Done");
    }
  };
  render() {
    return (
      <div className="App">
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

              <label>Details</label>
              <br />
              <textarea
                onChange={(event) => {
                  this.setState({ details: event.target.value });
                }}
              >
                write on here
              </textarea>
              <h6>{this.state.details}</h6>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
