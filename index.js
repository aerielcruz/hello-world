const express = require('express');
const app = express();
const { getAppConfig } = require('./util/get-app-config')

app.get('/', async function (req, res) {
  const MONGODB_URI = await getAppConfig("mongodb-uri")
  res.send(`App config value: ${MONGODB_URI}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});