require('ts-node/register');
const testing_values = require('../src/testing');
module.exports = async () => {
  global.testing = testing_values.default;
};
