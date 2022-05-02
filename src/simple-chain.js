const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: "",
  length: 0,
  chainArr: [],

  getLength() {
    return this.length;
  },
  addLink(value) {
    this.chainArr.push(value);
    this.length++;
    return this;
  },
  removeLink(position) {
    if (position <= this.length && position > 0) {
     while(this.chainArr[position - 1] == undefined) {
       position++;
     }
     this.chainArr[position - 1] = undefined;
    } else {
      throw new Error ("You can't remove incorrect link!")
    }
    this.chainArr.splice(position - 1, 0)
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    for (let i of this.chainArr) {
      if (i === undefined) continue;
      if (this.chain !== "") this.chain += "~~";
      this.chain += "( " + i + " )";
    }
    let chain = this.chain;
    this.chain = "";
    this.length = 0;
    this.chainArr = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());