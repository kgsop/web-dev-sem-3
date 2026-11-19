const jwt = require('jsonwebtoken');
const data ={
    _id:"123abc"
}

const token = jwt.sign(data, '123abc', {expiresIn: '1h'});
console.log(token);
