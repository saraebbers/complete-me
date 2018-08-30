import { expect } from 'chai';
import { assert } from 'chai';
import Node from '../lib/Node';
import Trie from '../lib/Trie.js';
import fs from 'fs';

const text = '/usr/share/dict/words';
const dictionary = fs.readFile.Sync(text).toStringify();

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
      let expected1 = {
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
      assert.deepEqual(trie, expected1);

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
  describe.skip('suggest', () => {
    it.skip('should offer words that include the prefix entered', () => {
      trie.insert('brother');
      trie.insert('broth');
      trie.insert('brighton')
      trie.insert('bright');
      trie.insert('braggart');
      trie.insert('brash');
      // trie.suggest('br');
      // console.log(JSON.stringify(trie, null, 2));
      let expected2 = [ 'brash', 'braggart', 'brighton', 'bright', 'brother', 'broth' ];
      assert.deepEqual(trie.suggest('br'), expected2);
    });

    describe.skip('populate', () => {
      it.skip('should be able to accept  a dictionary', () => {
        prefixTrie.populate(dictionary);
        prefixTrie.count();
        assert.equal(prefixTrie.count(), 235886)
      })
    })
});
});
