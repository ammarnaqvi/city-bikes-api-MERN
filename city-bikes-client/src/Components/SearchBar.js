import React from "react";

const SearchBar = props => {
  return (
    <div className="input-group col-md-10 input-group-lg mx-5">
      <div className="input-group-prepend">
        <button
          type="button"
          onClick={props.Search}
          className="btn btn-secondary"
        >
          Search
        </button>
      </div>
      <select
        onChange={e => props.Select(e)}
        className="form-control"
        placeholder="City"
      >
        {props.Cities.map(city => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
