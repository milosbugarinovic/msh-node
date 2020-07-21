"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secrets = void 0;
var fs_1 = require("fs");
var util_1 = require("util");
var secrets = {
    get: function (secret) {
        try {
            return fs_1.default.readFileSync(util_1.default.format('/run/secrets/%s', secret), 'utf8').trim();
        }
        catch (e) {
            return '';
        }
    },
};
exports.secrets = secrets;
//# sourceMappingURL=secrets.js.map