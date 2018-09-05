const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/bike-stations", async (req, res) => {
  const city = req.query.city;
  let networksResponse = await fetch(
    "https://api.citybik.es/v2/networks?fields=location,id"
  );
  let json = await networksResponse.json();
  let networks = json.networks;

  let cityNetworks = networks.filter((network) => {
    return network.location.city == city;
  });

  res.send(cityNetworks);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
