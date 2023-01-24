import React, { Component } from "react";
// const axios = require("axios");
import axios from "axios";
import { BrowserRouter as Route, Link } from "react-router-dom";
class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  render() {
    const posts = this.state.posts;
    const allpost = posts.map((post, idx) => {
      return (
        <div>
          <a href="" key={idx}>
            {post.title}
          </a>
          <br />
          <br />
          <p>{post.body}</p>
        </div>
      );
    });

    return (
      <div>
        <Link to="/writepost">Add New</Link>

        <h1>This is Blog component</h1>
        <div className="media">
          <div className="media-body text-center">{allpost}</div>
        </div>
      </div>
    );
  }
}

export default Blog;
