const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.get("/", (req, res) => {
  const filterUser = req.query.filt1 || null;

  controller
    .mGetUsers(filterUser)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "Unexpected Error", 500, err);
    });
});

router.post("/", (req, res) => {
  controller
    .mAddUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "Internal Error", 500, err);
    });
});

router.patch("/:idMessage", (req, res) => {});

router.delete("/:identity", (req, res) => {});

module.exports = router;
