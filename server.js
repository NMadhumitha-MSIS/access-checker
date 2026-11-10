const express = require('express');
const scanWebsite = require('./scanner');

const app = express();
app.use(express.static('public'));

app.get('/scan', async (req, res) => {
  const url = req.query.url;
  if (!url || !/^https?:\/\//i.test(url)) {
    return res.status(400).json({ error: 'Please enter a full website address starting with http:// or https://' });
  }
  try {
    const report = await scanWebsite(url);
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: 'Could not reach that website. Check the address and try again.' });
  }
});

app.listen(3000, () => console.log('Server running. Open http://localhost:3000 in your browser'));