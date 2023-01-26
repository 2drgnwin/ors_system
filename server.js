const express = require('express');
const app = express();
const port = 5000;

const csvFilePath = 'database/test_data.csv';
const csv = require('csvtojson');
const { result } = require('lodash');

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // console.log(jsonObj);
  });

// Async / await usage
const jsonArray = csv().fromFile(csvFilePath);

app.get('/', (req, res) => {
  csv()
    .fromFile(csvFilePath)
    .then((result) => {
      res.send(result);
    })
    .catch((reason) => res.send(reason));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
