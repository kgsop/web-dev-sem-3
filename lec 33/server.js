const bcrypt = require('bcrypt');


const password = 'supersecret';

const salt = bcrypt.genSaltSync(10);
console.log(salt);
const hash = bcrypt.hashSync(password, salt).then((hash) => {
  console.log(hash);
});
console.log(hash);

const result = bcrypt.compareSync(password, '$(hash)');
console.log(result);