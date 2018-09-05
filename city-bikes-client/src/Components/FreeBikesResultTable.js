import React from "react";

const FreeBikesResultTable = props => {
  return (
    <table className="table table-striped table-bordered m-5 p-5 col-md-10">
      <thead>
        <tr>
          <th scope="col">Station</th>
          <th scope="col">Free Bikes</th>
        </tr>
      </thead>
      <tbody>
        {props.BikeStations.map(station => (
          <tr key={station.id}>
            <td>{station.name}</td>
            <td>{station.free_bikes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default FreeBikesResultTable;
