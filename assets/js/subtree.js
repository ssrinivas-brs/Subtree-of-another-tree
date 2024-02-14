function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function arrayToTree(arr) {
    if (arr.length === 0) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        if (arr[i] !== null && arr[i] !== undefined) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }

        i++;

        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }

        i++;
    }

    return root;
}

function isSubtree(root, subRoot) {
    if (!root) return false;

    return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;

    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function checkSubtree() {
    const rootInput = document.getElementById("rootInput").value.split(',').map(val => val === 'null' ? null : parseInt(val));
    const subRootInput = document.getElementById("subRootInput").value.split(',').map(val => val === 'null' ? null : parseInt(val));

    const root = arrayToTree(rootInput);
    const subRoot = arrayToTree(subRootInput);

    const result = isSubtree(root, subRoot);

    const outputElement = document.getElementById("output");
    outputElement.innerHTML = result ? "<p class='success'>Ture</p>" : "<p class='error'>Flase</p>";
}