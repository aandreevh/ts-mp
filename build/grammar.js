"use strict";
exports.__esModule = true;
var nearley_1 = require("nearley");
var CFG = (function () {
    function CFG(file) {
        this.file = file;
        this.parser = new nearley_1.Parser(nearley_1.Grammar.fromCompiled(require(file)));
    }
    CFG.prototype.parse = function (data) {
        this.parser.feed(data);
        return this.parser.results;
    };
    return CFG;
}());
exports.CFG = CFG;
//# sourceMappingURL=grammar.js.map