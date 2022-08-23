const Model = require("./model");

function addMessage(message) {
  const myMessage = new Model(message);
  return myMessage.save();
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    Model.find(filter)
      .populate("user")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

async function updateMessage(pId, pMessage) {
  const foundMessage = await Model.findOne({ _id: pId });
  foundMessage.message = pMessage;

  const newMessage = await foundMessage.save();
  return newMessage;
}

async function store_remove(pId) {
  return Model.deleteOne({ _id: pId });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateMessage,
  store_remove,
};
