const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app
    .use(express.static(path.join(__dirname, "public")))
    .get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "public/index.html"));
    })
    .get("/radio", (req, res) => {
        res.sendFile(path.join(__dirname, "public/radio/index.html"));
    })
    .get("/golf", (req, res) => {
      res.sendFile(path.join(__dirname, "public/golf/index.html"));
  })
  .get("/hallo", (req, res) => {
    res.sendFile(path.join(__dirname, "public/radio/index.html"));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})