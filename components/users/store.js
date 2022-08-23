const Model = require("./model");

function store_addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

async function store_getUsers(pFilter) {
  let filter = {};
  if (pFilter != null) {
    filter = { _id: pFilter };
  }
  const users = await Model.find(filter);

  return users;
}

async function updateMessage(pId, pMessage) {}

async function store_remove_user(pId) {}

module.exports = {
  add: store_addUser,
  list: store_getUsers,
};
