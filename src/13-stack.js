/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    this.push(element);
  }

  pop() {
    const a = this[this.length - 1];
    this.splice(this.length - 1, 1);
    return a;
  }

  peek() {
    return this[0];
  }
}

module.exports = Stack;
