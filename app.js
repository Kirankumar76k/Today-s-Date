const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let today = new Date();
  let date_in_format = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;
  response.send(date_in_format);
});
app.listen(3000);
module.exports = app;
