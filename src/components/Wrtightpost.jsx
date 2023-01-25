import React, { Component } from "react";

class Writepost extends Component {
  render() {
    return (
      <center>
        <div>
          <div className="jumbotron col-lg-4">
            <form>
              <div class="form-group ">
                <label for="title">Title</label>
                <input
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
