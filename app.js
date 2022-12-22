const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({ name: "cors", subscribe: true });
});

app.listen(5000, () => console.log());
