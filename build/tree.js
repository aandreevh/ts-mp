"use strict";
exports.__esModule = true;
var Node = (function () {
    function Node(value, children) {
        if (children === void 0) { children = []; }
        this.value = value;
        this.children = children;
    }
    Node.prototype.add = function () {
        var _this = this;
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        n.forEach(function (a) { return _this.children.push(a); });
    };
    Node.prototype.remove = function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        this.children = this.children.filter(function (v) { return n.indexOf(v) !== -1; });
    };
    Node.prototype.map = function (f) {
        return this.children.map(f);
    };
    Node.prototype.reduce = function (r) {
        return r(this, this.children.map(function (n) { return n.reduce(r); }));
    };
    Node.prototype.toString = function () {
        return this.reduce(function (a, b) { return "(" + a.value + (a.children.length > 0 ? ' ' : '') + b.join(' ') + ")"; });
    };
    Node.fromArray = function (arr, op, nv) {
        var _this = this;
        if (nv === void 0) { nv = null; }
        return arr.reduce(function (node, elm, index) {
            if (Array.isArray(elm))
                node.add(_this.fromArray(elm, op, nv));
            else
                op(node, elm, index);
            return node;
        }, new Node(nv));
    };
    Node.fromBasicArray = function (arr) {
        return this.fromArray(arr, function (node, elm, i) {
            if (i == 0)
                node.value = elm;
            else
                node.add(new Node(elm));
        });
    };
    return Node;
}());
exports.Node = Node;
//# sourceMappingURL=tree.js.map