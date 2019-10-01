var express = require('express');

var app = express();

app.get('/api/city-time-zone', (req, res) => {
  const city = [
    {
      id: 1,
      city: 'Stockholm',
      utc: 2,
    },
    {
      id: 2,
      city: 'New York',
      utc: -4,
    },
    {
      id: 3,
      city: 'Riga',
      utc: 1,
    },
  ];
  res.json(city);
});
var port = 5000;

app.listen(port, () => console.log(`server running at port ${port}`));
