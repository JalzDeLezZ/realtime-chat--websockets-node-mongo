const express = require("express");

const router = require("./network/routes");

const app = express();
const port = 3000;

app.use(express.json());

router(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// -----------------------------------------------------
// app.use(express.urlencoded());
// app.use("/app", express.static("public"));
