const store = require("./store");
const { socket } = require("../../socket");

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.log("[messageController] No hay usuario o mensaje");
      reject("Los datos no son correctos");
      return false;
    }

    let fileUrl = "";

    if (file) {
      fileUrl = "http://localhost:3000/app/files/" + file.filename;
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl,
    };

    store.add(fullMessage);

    socket.io.emit("key_message", fullMessage);

    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(pId, pMessage) {
  return new Promise(async (resolve, reject) => {
    if (!pId || !pMessage) {
      reject("Invalid Data");
      return false;
    }

    const result = await store.updateMessage(pId, pMessage);
    resolve(result);
  });
}

function mDeleteMsg(pId) {
  return new Promise((resolve, reject) => {
    if (!pId) {
      reject("Invalid Id");
      return false;
    }
    store
      .store_remove(pId)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  mDeleteMsg,
};
