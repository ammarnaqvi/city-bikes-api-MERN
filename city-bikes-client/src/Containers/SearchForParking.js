import React, { Component } from "react";
import SearchBar from "./../Components/SearchBar";
import FreeParkingResultTable from "./../Components/FreeParkingResultTable";

class SearchForParking extends Component {
  constructor(props) {
    super(props);
    this.state = { cities: [], selectedCity: "", bikeStations: [] };
  }

  cities = async () => {
    const response = await fetch("/api/cities");
    const cities = await response.json();

    if (response.status !== 200) throw Error(cities.message);
    console.log(cities);
    this.setState({ cities: cities });
  };

  select = event => {
    let selectedCity = event.target.value;
    console.log(selectedCity);
    this.setState({ selectedCity: selectedCity });
  };

  search = async () => {
    console.log(`/api/free-parking?cityId=${this.state.selectedCity}`);
    const response = await fetch(
      `/api/free-parking?cityId=${this.state.selectedCity}`
    );
    const bikeStations = await response.json();

    if (response.status !== 200) throw Error(bikeStations.message);
    console.log(bikeStations);
    this.setState({ bikeStations: bikeStations });
  };

  componentDidMount() {
    this.cities();
  }

  render() {
    return (
      <div className="px-5 py-5">
        <SearchBar
          Cities={this.state.cities}
          Select={this.select}
          Search={this.search}
        />
        <FreeParkingResultTable BikeStations={this.state.bikeStations} />
      </div>
    );
  }
}

export default SearchForParking;
