const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const API_KEY = '6b0b2b1fdeaac76e4a7282c66648c288';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

app.use(cors());

app.get('/weather', async (req, res) => {
  const { q } = req.query;

  //check for location in serach box
  if (!q) {
    return res.status(400).json({ error: 'Location parameter is missing' });
  }

  try {
    const response = await axios.get(API_URL, {
      params: {
        q: q,
        appid: API_KEY,
        units: 'metric',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

