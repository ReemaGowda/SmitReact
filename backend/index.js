const express = require("express");

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

  app.get("/hello", (req,res) => {
       res.send("Hello world")
  });