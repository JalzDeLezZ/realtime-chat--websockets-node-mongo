const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");
const multer = require("multer");

const upload = multer({
  dest: "public/files/",
});

router.get("/", (req, res) => {
  const filterMessages = req.query.user || null;

  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((err) => {
      response.error(req, res, "Unexpected Error", 500, err);
    });
});

router.post("/", upload.single('file'), (req, res) => {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((err) => {
      response.error(req, res, "Error al crear el mensaje", 400, err);
    });
});

router.patch("/:idMessage", (req, res) => {
  controller
    .updateMessage(req.params.idMessage, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "Internal Error", 500, err);
    });
});

router.delete("/:identity", (req, res) => {
  controller
    .mDeleteMsg(req.params.identity)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.identity} eliminado`);
    })
    .catch((err) => {
      response.error(req, res, "Internal Error", 500, err);
    });
});

module.exports = router;
