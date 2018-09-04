const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
app.get('/api/bike-stations', (req, res) => {
  res.send({ express: 'Have a bike' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));