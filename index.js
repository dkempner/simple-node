const express = require("express");

const app = express();

const middleware1 = (req, res, next) => {
  return res.send("middleware1");
};

const middleware2 = (req, res, next) => {
  return res.send("middleware2");
};

app.use((req, res, next) => {
  middleware1(req, res, next);
  middleware2(req, res, next);
});

app.get("/", (req, res, next) => {
  res.send("hello world");
});

app.listen(8080, () => {
  console.log("Listening on 8080");
});
