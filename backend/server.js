require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const logoRoutes = require("./routes/logoRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Додано morgan

const port = process.env.PORT || 5000;

app.use("/api", logoRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
