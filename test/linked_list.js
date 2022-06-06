LinkedList = require('../src/linked_list');

var assert = require('assert');
describe('Linked List', function () {
  describe('#insert()', function () {
    it('should return the inserted value after successfully inserting at index 0', function () {
      ll = new LinkedList();
      assert.equal(ll.insert(0, "a"), "a");
    });

    it ('should return false if index is out of bounds', () => {
      ll = new LinkedList();
      assert.equal(ll.insert(1, "a"), false);
    });
  });
});