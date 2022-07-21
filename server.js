const express = require("express");
const http = require("http");
const axios = require("axios");

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.use("/api/test", function (req, res) {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((result) => {
      res.status(200).json({
        message: "you reached it :)",
        result: result.data
      });
    })
    .catch((error) => {
      res.status(401).json({
        message: "error",
        error,
      });
    });
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});
