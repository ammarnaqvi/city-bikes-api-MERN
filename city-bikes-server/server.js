const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/cities", async (req, res) => {
  let response = await fetch(
    "https://api.citybik.es/v2/networks?fields=location,id"
  );
  let json = await response.json();
  let networks = json.networks;

  let cities = networks.map(network => {
    return {'id': network.id, 'name': network.location.city};
  });

  res.send(cities);
});

app.get("/api/free-bikes", async (req, res) => {
  const cityId = req.query.cityId;
  let response = await fetch(
    `http://api.citybik.es/v2/networks/${cityId}?fields=stations`
  );
  let json = await response.json();
  let stations = json.network.stations.filter(station => {
      return station.free_bikes > 0;
  });
      
  res.send(stations);
});

app.get("/api/free-parking", async (req, res) => {
    const cityId = req.query.cityId;
    let response = await fetch(
      `http://api.citybik.es/v2/networks/${cityId}?fields=stations`
    );
    let json = await response.json();
    let stations = json.network.stations.filter(station => {
        return station.empty_slots != null && station.empty_slots > 0;
    });
        
    res.send(stations);
  });
  
app.listen(port, () => console.log(`Listening on port ${port}`));
