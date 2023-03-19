"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (list, callback) => {
    const LIST_LENGTH_MINUS_ONE = list.length - 1;
    for (let index = LIST_LENGTH_MINUS_ONE; index >= 0; index--) {
        callback(list[index], () => {
            var _a, _b, _c;
            if ((_c = (_b = (_a = list[index]) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.startsWith('HTML'))
                list[index].remove();
            list.splice(index, 1);
        });
    }
};
