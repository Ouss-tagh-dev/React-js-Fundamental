import { Component } from "react";
class App extends Component {
  state = {
    username: "",
    phonenumber: "",
    email: "",
    city: "",
  };

  changeData = (e) => {
    let val = e.target.name; // Username, phonenumber, email, city
    let myValue = e.target.value; //Getting value
    this.setState({ [val]: myValue }); // Value set on the state
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.username}</h1>
        <h1>{this.state.phonenumber}</h1>
        <h1>{this.state.email}</h1>
        <h1>{this.state.city}</h1>
        <div>
          <form>
            <div className="form-group" style={{ marginLeft: 200 }}>
              <label>Username</label>
              <br />
              <input type="text" name="username" onChange={this.changeData} />
              <br />
              <label>Phone number</label>
              <br />
              <input
                type="text"
                name="phonenumber"
                onChange={this.changeData}
              />
              <br />
              <label>Email</label>
              <br />
              <input type="text" name="email" onChange={this.changeData} />
              <br />
              <label>City</label>
              <br />
              <input type="text" name="city" onChange={this.changeData} />
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
