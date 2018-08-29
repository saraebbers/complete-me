export default class Node {
  constructor (letter = null) {
    this.letter = letter;
    this.children = [];
    this.end = false;
    this.word = '';
  }
}