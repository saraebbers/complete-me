import Node from './Node';

export default class Trie {
  constructor () {
    this.wordCount = 0;
    this.rootNode = null;
  }

  insert(word) {
    let currentNode;
    let wordEntered = word;
    let wordArr = word.toUpperCase().split('');
    let newLetter;

    if (!this.rootNode) {
      this.rootNode = new Node(); 
      this.rootNode.letter = 'Root';
    }

    currentNode = this.rootNode;

    while (wordArr.length > 0) {
      newLetter = wordArr.shift();
      let checkChildNode;

      checkChildNode = currentNode.children.find( node => {
        return node.letter === newLetter;
      });

      if (checkChildNode) {
        currentNode = checkChildNode;
      } else {
        currentNode.children.unshift(new Node(newLetter));
        currentNode = currentNode.children[0];
      }
    }
    if (!currentNode.end) {
      currentNode.end = true;
      currentNode.word = wordEntered;
      this.wordCount++;
    }
  }

  count() {
    return this.wordCount;
  }
  
  suggest(prefix) {
    let suggestions = [];
    let currentNode;
    let prefixArr = prefix.toUpperCase().split('');
    let newLetter;

    currentNode = this.rootNode;

    while (prefix.length > 0) {
      newLetter = prefixArr.shift();
      let checkChildNode;

      checkChildNode = currentNode.children.find( node => {
        return node.letter === newLetter;
      });
      if (checkChildNode) {
        currentNode = checkChildNode;
      } else {
        break;
      }

    }
    this.fnSug(currentNode, suggestions);
    return suggestions;
  }

  fndSug(paNode, suggestions) {
    if (paNode.children.length > -1) {
      paNode.children.forEach( child => { 
        this.fndSug(child, suggestions);
      });
      if (paNode.end === true) {
        suggestions.push(paNode.word);
      }
    }
  }

  populate(array) {
    array.forEach( word => {
      this.insert(word);
    });
  }
}