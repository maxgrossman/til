var chai = require('chai');
var chaiJsonSchema = require('chai-json-schema');
var expect = chai.expect;
var parseInitPrompt = require('../utils').parseInitPrompt;

chai.use(chaiJsonSchema);

const tilrcSchema = {
  surfing: {},
  is: {},
  great: {},
  i: {},
  think: {}
};

describe('til.init()', () => {
  it('user response should be parsed to tilrc of correct screma', () => {
    const tilrc = parseInitPrompt('surfing,is, great,i,   think');
    expect(tilrc).to.be.jsonSchema(tilrcSchema);
  });
});
