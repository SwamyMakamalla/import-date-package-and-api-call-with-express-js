const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const today = new Date();
  const resultDate = addDays(
    new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    100
  );

  response.send(
    `${resultDate.getDate()}/${
      resultDate.getMonth() + 1
    }/${resultDate.getFullYear()}`
  );
});

module.exports = app;
