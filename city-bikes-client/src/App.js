import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Containers/Home";
import SearchForBikes from "./Containers/SearchForBikes";
import SearchForParking from "./Containers/SearchForParking";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container my-5">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search-for-bikes">
                Search For Bikes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search-for-parking">
                Search For Parking
              </Link>
            </li>
          </ul>

          <hr className="mb-5"/>

          <div className="row justify-content-md-center align-items-center">
            <div className="card col-md-11">
              <div className="card-body my-3">
                <Route exact path="/" component={Home} />
                <Route path="/search-for-bikes" component={SearchForBikes} />
                <Route
                  path="/search-for-parking"
                  component={SearchForParking}
                />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
