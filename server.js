const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "eyJhbGci",
  });
});

app.listen(8080, () => console.log("Server is running on "));
