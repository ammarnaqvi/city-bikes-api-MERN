import React, { Component } from "react";
import "./App.css";
import SearchForBikes from "./Containers/SearchForBikes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center align-items-center">
          <div className="card">
		  <div className="card-header">City Bikes API</div>
            <div className="card-body">
              <SearchForBikes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
