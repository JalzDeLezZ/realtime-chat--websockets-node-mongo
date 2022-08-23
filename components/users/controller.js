const store = require("./store");

function mAddUser(name) {
  if (!name) {
    return Promise.reject("Invalid Name");
  }

  const user = {
    name,
  };
  return store.add(user);
}

function mGetUsers(pFilter) {
  return new Promise((resolve, reject) => {
    resolve(store.list(pFilter));
  })
}

function updateMessage(pId, pMessage) {}

function mDeleteMsg(pId) {}

module.exports = {
  mAddUser,
  mGetUsers 
};
