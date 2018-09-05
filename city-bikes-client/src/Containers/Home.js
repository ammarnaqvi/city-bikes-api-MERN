import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Hi there!</h1>
          <hr className="my-4" />
          <p className="lead">
            Here's some fun usage of City Bikes API using Node & React.
          </p>
          <p>Click the links in the navigation bar.</p>
        </div>
      </div>
    );
  }
}

export default Home;
