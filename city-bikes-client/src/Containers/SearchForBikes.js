import React, { Component } from "react";
import SearchBar from "./../Components/SearchBar";

class SearchForBikes extends Component {
  state = {
    response: ""
  };

  search = async () => {
    const response = await fetch("/api/bike-stations");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log(body);
  };

  render() {
    return (
      <div className="SearchForBikes">
        <SearchBar Search={this.search} />
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default SearchForBikes;
