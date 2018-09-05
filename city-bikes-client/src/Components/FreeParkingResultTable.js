import React from "react";

const FreeParkingResultTable = props => {
  return (
    <table className="table table-striped table-bordered m-5 p-5 col-md-10">
      <thead>
        <tr>
          <th scope="col">Station</th>
          <th scope="col">Parking Slot</th>
        </tr>
      </thead>
      <tbody>
        {props.BikeStations.map(station => (
          <tr key={station.id}>
            <td>{station.name}</td>
            {station.empty_slots > 0 && <td>&#10004;</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default FreeParkingResultTable;
