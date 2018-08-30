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
      })

      if (checkChildNode) {
        currentNode = checkChildNode;
      } else {
      currentNode.children.unshift(new Node(newLetter));
      currentNode = currentNode.children[0];
      }
    }
    if(!currentNode.end) {
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
      })
      if (checkChildNode) {
        currentNode = checkChildNode;
      } else {
      break
      };

    }
      this.findPossibleSuggestions(currentNode, suggestions);
      // console.log('suggestions', suggestions);
      return suggestions;
  }

  findPossibleSuggestions(passedNode, suggestions) {
    if(passedNode.children.length > -1) {
      passedNode.children.forEach( child => {this.findPossibleSuggestions(child, suggestions)
    });
    if(passedNode.end == true) {
      suggestions.push(passedNode.word)};
    }
  }
}