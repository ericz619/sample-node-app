const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "Hit!",
  });
});

app.listen(8080, () => console.log("Server running port 8080"));
