
const Model = require("./model");


function addMessage(message) {
  const myMessage = new Model(message);
  return myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
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
  store_remove
};
