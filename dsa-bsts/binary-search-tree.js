class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    let current = this.root;

    while(current) {
    
      if(current.val > val) {
        if(current.left) {
          current = current.left;
        }
        else{
          current.left = new Node(val);
          return this;
        }
      }
      else {
        if(current.right) {
          current = current.right;
        }
        else{
          current.right = new Node(val);
          return this;
        }
      }
      
    }
 
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {

    if(current === null){
      this.root = new Node(val);
      return this;
    }

    if(current.val > val) {
      if(current.left) {
        return this.insertRecursively(val, current.left);
      }
      else{
        current.left = new Node(val);
        return this;
      }
    }
    else {
      if(current.right) {
        return this.insertRecursively(val, current.right);
      }
      else{
        current.right = new Node(val);
        return this;
      }
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    let current = this.root;

    while(current) {
      if(current.val === val){
        return current;
      }
      current = current.left ? current.val > val : current.right;
    }

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(current === null) return undefined;

    if(current.val === val){
      return current;
    }
    return this.findRecursively(val, current.left) ? current.val > val : thisfindRecursively(val, current.right);

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

    let current = this.root;
    let data = [];

    function traverse(node) {
      data.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    traverse(current);

    return data;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

    let current = this.root;
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }

    traverse(current);

    return data;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

    let current = this.root;
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.val);
    }

    traverse(current);

    return data;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
