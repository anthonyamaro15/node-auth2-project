exports.seed = function (knex) {
  // Inserts seed entries
  return knex("auth_user").insert([
    { username: "user1", password: "pass1", department: "user" },
    { username: "user2", password: "pass2", department: "admin" },
    { username: "user3", password: "pass3", department: "admin" },
    { username: "user4", password: "pass4", department: "user" },
  ]);
};
