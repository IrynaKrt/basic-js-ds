const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.init = null
  }

  root() {
    return this.init;
  }

  add(data) {
    this.init = addItem(this.init, data);

    function addItem(node, data) {
      if(!node) {
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }

      if(data < node.data) {
        node.left = addItem(node.left, data);
      } else {
        node.right = addItem(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasItem(this.init, data);

    function hasItem(node, data) {
      if(!node) {
        return false;
      }
      if (node.data === data){
        return true;
      }

      if(data < node.data) {
        return hasItem(node.left, data);
      } else {
        return hasItem(node.right, data);
      }
    }
  }

  find(data) {
    return findItem(this.init, data);

    function findItem(node, data) {
      if(!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findItem(node.left, data);
      } else {
        return findItem(node.right, data);
      }
    }
  }

  remove(data) {
    this.init = removeItem(this.init, data);

    function removeItem(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeItem(node.left, data);
      } else if (data > node.data) {
        node.right = removeItem(node.right, data);
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while(minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeItem(node.right, minRight.data);

        return node;
      }
      return node;
    }
  }

  min() {
    if (!this.init) {
      return;
    }

    let minNode = this.init;

    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    if (!this.init){
      return;
    }

    let maxNode = this.init

    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};