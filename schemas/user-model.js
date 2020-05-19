const db = require("../data/config-db");

function find() {
  return db("auth_user");
}

function add(user) {
  return db("auth_user").insert(user, "id");
}

function findBy(filter) {
  return db("auth_user").where(filter);
}
module.exports = {
  find,
  findBy,
  add,
};
