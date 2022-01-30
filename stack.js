class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    return this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  getSize() {
    return this.items.length;
  }

  printAll() {
    let outputString = "";

    for (let i = 0; i < this.items.length; ++i) {
      outputString = `${outputString}${this.items[i]},`;
    }

    return outputString;
  }
}

const stack = new Stack();
