const express = require('express');
const app = express();
const { getParameterStore } = require('./util/get-parameter-store')

app.use(async (req, res, next) => {
  // const MONGODB_URI = await getParameterStore("mongodb-uri")
  // console.log('Parameter store value:', MONGODB_URI)
  console.log('TEST')
  next()
})

app.get('/', async function (req, res) {
  const MONGODB_URI = await getParameterStore("mongodb-uri")
  console.log('Parameter store value:', MONGODB_URI)
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});