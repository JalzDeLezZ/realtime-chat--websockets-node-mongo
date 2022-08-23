require("dotenv").config();
const express = require("express");

const { DB_PASS, DB_USER, DB_URL } = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}/?retryWrites=true&w=majority`;
const database = require("./db");

database(uri);

const router = require("./network/routes");

const app = express();
const port = 3000;

app.use(express.json());

router(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// -----------------------------------------------------
// app.use(express.urlencoded());
// app.use("/app", express.static("public"));
