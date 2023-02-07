const express = require("express");
const dbConfig = require("./config/db-config");
const routesConfig = require("./config/routes-config");

//const cors = require("cors");

const app = express();

//var corsOptions = {
//  origin: "http://localhost:8081"
//};

//app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConfig();
app.use(routesConfig());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
