const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
const dbModels = require('./src/models');
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* app.get("/", (req, res) => {
  res.json({ message: "Welcome to sequelizeAPI application." });
});
app.get("/:id", (req, res) => {
  console.log(req.query)
  console.log(req.query.id)
  res.json({ message: "Welcome to my application." });
}); */

require("./src/routes/inboundCallRoutes")(app);
//dbModels.sequelize.sync();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});