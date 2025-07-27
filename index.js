const express = require('express');
const app = express();
const { getParameterStore } = require('./util/get-parameter-store')
const { getAppConfig } = require('./util/get-app-config')

app.get('/', async function (req, res) {
  // AWS
  // const MONGODB_URI = await getParameterStore("mongodb-uri")

  // Azure
  const MONGODB_URI = await getAppConfig("mongodb-uri")

  res.send(`Parameter store value: ${MONGODB_URI}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});