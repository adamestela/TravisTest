var assert = require("assert")
describe('Array', function(){
  describe('Test reverse', function(){
    it('should return the reversed string', function(){
      var phrase = "Hello";
      var newPhrase = "Adam";
      assert.equal("olleH", phrase.split('').reverse().join(''));
      assert.equal("madA", newPhrase.split('').reverse().join(''));
    })
  })
})