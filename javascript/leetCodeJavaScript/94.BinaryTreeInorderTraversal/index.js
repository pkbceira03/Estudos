var inorderTraversal = function (root) {
    let res = [];
    function rec(root) {
        if (!root) return;
        if (root.left) rec(root.left);
        res.push(root.val);
        if (root.right) rec(root.right);
    }
    rec(root);
    return res;
};