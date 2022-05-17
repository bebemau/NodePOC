var express = require("express");
var cors = require("cors");
var app = express();
var PORT = process.env.PORT || 8080;
var dbModels = require('./src/models');
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.json({ message: "Welcome to sequelizeAPI application." });
});
require("./src/routes/inboundCallRoutes")(app);
//dbModels.sequelize.sync();
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT, "."));
});
//# sourceMappingURL=server.js.map