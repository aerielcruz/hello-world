var express = require('express');
var app = express();

app.use(async () => {
  const MONGODB_URI = await getParameterStore("mongodb-uri")
  console.log('Parameter store value:', MONGODB_URI)
})

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});