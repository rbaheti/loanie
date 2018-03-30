const fs = require('fs');

let savedUsers = null;

const User = require('./userModels.js');

const readUsers = () => {
  // cache users after reading them once
  if (!savedUsers) {
    const contents = fs.readFileSync('user-seed-data.json', 'utf8');
    savedUsers = JSON.parse(contents);
  }
  return savedUsers;
};

const populateUsers = () => {
  // TODO: implement this
  const users = readUsers();
  const promises = users.map(p => new User(p).save());
  return Promise.all(promises);
};

populateUsers().then(() => {
  console.log("finished adding rows.");
});

module.exports = { readUsers, populateUsers };
