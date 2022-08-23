 const store = require("./store");

function addChat(pUsers) {
  if (!pUsers || !Array.isArray(pUsers)) {
    return Promise.reject("Invalid user List");
  }

  const chat = {
    users: pUsers,
  };

  return store.add(chat);
}

function listChats(pUserId) {
  return store.list(pUserId);
}

module.exports = {
  addChat,
  listChats,
};
