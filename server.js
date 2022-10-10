const router = require("./network/routes");
const socket = require("./socket");
const database = require("./db");
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);

const port = 3000;
const { DB_PASS, DB_USER, DB_URL } = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}/?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
socket.connect(server);
database(uri);
router(app);

app.use("/", express.static("public"));
server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

// -----------------------------------------------------
// app.use(express.static('public'))
// app.use('/app', express.static(__dirname+'/public'));