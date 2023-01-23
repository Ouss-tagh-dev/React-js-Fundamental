import React, { Component } from "react";

class Check extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     men: [{ name: "Oussama Taghlaoui" }],
  //   };
  // }

  state = {
    name: "Taghlaoui Oussama new",
  };
  changeName = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <input type="text" name="" onChange={this.changeName} />
        <h1>Hello {this.state.name}</h1>
      </div>
    );
  }
}

export default Check;
