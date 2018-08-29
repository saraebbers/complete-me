import { expect } from 'chai';
import { assert } from 'chai';
import Node from '../lib/Node';
import Trie from '../lib/Trie'

describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it.skip('should be a function', () => {
  assert.isFunction(Trie);
  

  });

  it.skip('should set its default rootNode to null', () => { 
    expect(trie.rootNode).to.eq(null);
  });

  describe.skip('insert', () => {
    it('should take in a word and increment the word count', () => {
      trie.insert('hello');
      trie.insert('hell');
      trie.insert('super');
      trie.insert('Awesome');
      trie.insert('AWE')
      console.log(JSON.stringify(trie, null, 2));
      expect(trie.count()).to.eq(5);
    });
    it.skip('have a root node of root, children node of d, children node of o', () => {
      trie.insert('do');
      console.log(JSON.stringify(trie, null, 2));
      console.log(trie.rootNode);
      let expected = {
        "wordCount": 1,
        "rootNode": {
          "letter": "Root",
          "children": [
            {
              "letter": "D",
              "children": [
                {
                  "letter": "O",
                  "children": [],
                  "end": true
                }
              ],
              "end": false
            }
          ],
          "end": false
        }
      };
      assert.deepEqual(trie, expected);

    });
    it.skip('should not increment the word count if the same word is inserted twice', () => {
      trie.insert('brother');
      trie.insert('sister');
      trie.insert('brother');
      trie.insert('bro');
      trie.insert('broth');
      expect(trie.count()).to.eq(4);
    });
   });
  describe('SUGGEST', () => {
    it('should offer words that include the prefix entered', () => {
      trie.insert('hello');
      trie.insert('hell');
      trie.insert('hellllllllllo')
      trie.insert('super');
      trie.insert('Awesome');
      trie.insert('AWE');
      trie.suggest('h');
      // console.log(JSON.stringify(trie, null, 2));
      // expect(trie.count()).to.eq(5);
    });
});
});
