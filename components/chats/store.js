const Model = require("./model");

function addChat(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

function listChats(pUserId) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (pUserId) {
      filter = {
        users: pUserId,
      };
    }

    Model.find(filter)
      .populate("users")
      .exec((err, populated) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(populated);
      });
  });
}

module.exports = {
    add: addChat,
    list: listChats
}