const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

app.post('/', async (req, res, next) => {
  try {
    const results = await Promise.all(
      req.body.developers.map(async d => {
        const response = await axios.get(`https://api.github.com/users/${d}`);
        return response.data;
      })
    );

    const out = results.map(r => ({ name: r.name, bio: r.bio }));

    res.json(out);
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
