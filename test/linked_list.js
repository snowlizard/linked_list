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

  describe('#length()', function() {
    it('should return the length of a list', () => {
      ll = new LinkedList();
      ll.insert(0, "a");
      ll.insert(0, "b");
      ll.insert(0, "c");
      assert.equal(ll.length(true), 3);
    });

    it('should return 0 on an empty list', () => {
      ll = new LinkedList();
      assert.equal(ll.length(), 0);
    });

  })

  describe('#getNode()', () => {
    it('should return null on an empty linked list.', () => {
      ll = new LinkedList();
      assert.equal(ll.getNode(0), null);
    });

    it('should return the item at the indicated index', () => {
      ll = new LinkedList();
      ll.insert(0, 'a');
      ll.insert(0, 'b');
      ll.insert(0, 'c');
      assert.equal(ll.getNode(1).value, 'b');
    });

    it('should give the index in reverse when given a negative number', () => {
      ll = new LinkedList();
      ll.insert(0, 'a');
      ll.insert(0, 'b');
      ll.insert(0, 'c');
      assert.equal(ll.getNode(-3).value, 'c');
    });
  });

});