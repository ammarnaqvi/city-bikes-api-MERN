import React from "react";

const SearchBar = props => {
  return (
    <div className="input-group col-md-8 input-group-lg">
      <div className="input-group-prepend">
        <button
          type="button"
          onClick={props.Search}
          className="btn btn-secondary"
        >
          Search
        </button>
      </div>
      <input type="text" className="form-control" placeholder="City" />
    </div>
  );
};

export default SearchBar;
