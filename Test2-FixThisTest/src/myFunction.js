// src/MyFunction.js
// Simple Binary Search Tree (BST) implementation + in-order traversal.
//
// NOTE for candidates:
// One of the tests for this module is intentionally failing.
// Your exercise is to make all tests pass in a clean, sensible way.

'use strict';

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * Insert a value into the BST.
 *
 * For values:
 * - smaller than the current node -> go to the left subtree
 * - greater than the current node -> go to the right subtree
 * - equal to the current node     -> (current implementation ignores them)
 *
 * @param {TreeNode|null} root - Root of the tree (or subtree).
 * @param {number} value - Value to insert.
 * @returns {TreeNode} - The (possibly new) root of the tree.
 */
function insert(root, value) {
    if (!root) {
        return new TreeNode(value);
    }

    if (value < root.value) {
        root.left = insert(root.left, value);
    } else if (value > root.value) {
        root.right = insert(root.right, value);
    } 

    return root;
}

/**
 * In-order traversal of a BST.
 * Visits nodes in ascending order: left -> node -> right
 *
 * @param {TreeNode|null} root
 * @param {Array<number>} [result]
 * @returns {Array<number>} - Values visited in in-order sequence.
 */
function inOrderTraversal(root, result = []) {
    if (!root) {
        return result;
    }

    inOrderTraversal(root.left, result);
    result.push(root.value);
    inOrderTraversal(root.right, result);

    return result;
}

module.exports = {
    TreeNode,
    insert,
    inOrderTraversal,
};
