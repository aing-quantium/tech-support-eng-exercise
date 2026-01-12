// test/MyFunction.test.js
// Mocha tests for the BST in-order traversal utilities.

'use strict';

const assert = require('assert');
const { TreeNode, insert, inOrderTraversal } = require('../src/myFunction');

describe('Binary Search Tree - inOrderTraversal', function () {
    it('returns an empty array for an empty tree', function () {
        const root = null;
        const result = inOrderTraversal(root);
        assert.deepStrictEqual(result, []);
    });

    it('returns the single value for a one-node tree', function () {
        const root = new TreeNode(42);
        const result = inOrderTraversal(root);
        assert.deepStrictEqual(result, [42]);
    });

    it('returns sorted values for a tree with unique values', function () {
        // Build tree: insert values [7, 3, 9, 1, 5]
        let root = null;
        [7, 3, 9, 1, 5].forEach((v) => {
            root = insert(root, v);
        });

        const result = inOrderTraversal(root);
        // For a BST, in-order traversal should be sorted ascending.
        assert.deepStrictEqual(result, [1, 3, 5, 7, 9]);
    });

    it('handles duplicate values by including them in the in-order traversal', function () {
        // This test describes the expected behavior for duplicates.
        //
        // We expect duplicates to appear in the resulting sorted sequence.
        // One simple convention is to insert duplicates into the "right" subtree.
        //
        // Current implementation in myFunction.js ignores duplicates,
        // so this test will FAIL initially. The exercise is to make it pass
        // without breaking the previous tests.

        let root = null;
        [3, 1, 4, 2, 3, 2].forEach((v) => {
            root = insert(root, v);
        });

        const result = inOrderTraversal(root);

        // If duplicates are allowed and always inserted to the right,
        // a valid sorted result would be:
        // 1, 2, 2, 3, 3, 4
        assert.deepStrictEqual(result, [1, 2, 2, 3, 3, 4]);
    });
});
