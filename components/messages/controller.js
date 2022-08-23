const store = require("./store");

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.log("[messageController] No hay usuario o mensaje");
      reject("Los datos no son correctos");
      return false;
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    store.add(fullMessage);
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

function mDeleteMsg (pId){
  return new Promise((resolve, reject) => {
    if(!pId){
      reject("Invalid Id");
      return false;
    }
    store.store_remove(pId)
    .then(() => {
      resolve()
    })
    .catch((err) => {
      reject(err)
    })
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  mDeleteMsg,
};
