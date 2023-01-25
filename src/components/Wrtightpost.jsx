import React, { Component } from "react";
import axios from "axios";
class Writepost extends Component {
  state = {
    title: "",
    body: "",
  };
  formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/posts", {
        //Where this url will redirect
        title: this.state.title, //All value which its will tack
        body: this.state.body,
      })
      .then(function (response) { //use for success
        console.log(response);
      })
      .catch(function (error) { //use for error
        console.log(error);
      });
  };
  render() {
    return (
      <center>
        <div>
          <div className="jumbotron col-lg-4">
            <form onSubmit={this.formSubmit}>
              <div class="form-group ">
                <label for="title">Title</label>
                <input
                  onChange={(event) => {
                    this.setState({ title: event.target.value });
                  }}
                  id="title"
                  type="text"
                  class="form-control"
                  name="title"
                  required
                />
              </div>
              <div class="form-group">
                <label for="body">Details</label>
                <textarea
                  onChange={(event) => {
                    this.setState({ body: event.target.value });
                  }}
                  id="body"
                  type="text"
                  class="form-control"
                  name="body"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </center>
    );
  }
}

export default Writepost;
