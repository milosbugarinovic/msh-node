"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
var base64 = require("base-64");
var secrets_1 = require("./secrets");
var Environment = /** @class */ (function () {
    function Environment(projectName) {
        var _this = this;
        this.getEnv = function (envName, defaultValue) {
            var pEnvName = _this.pName + "_" + envName;
            return (secrets_1.secrets.get(pEnvName) ||
                secrets_1.secrets.get(envName) ||
                process.env[pEnvName] ||
                process.env[envName] ||
                defaultValue ||
                '');
        };
        this.getEnvJSON = function (envName, defaultValue) {
            var env = _this.getEnv(envName);
            try {
                if (env === '')
                    return defaultValue || {};
                return JSON.parse(env);
            }
            catch (ex) {
                console.error(ex.message || ex); // tslint:disable-line
                return defaultValue || {};
            }
        };
        this.getEnvBase64 = function (envName, defaultValue) {
            var env = _this.getEnv(envName);
            try {
                return base64.decode(env);
            }
            catch (ex) {
                console.error(ex.message || ex); // tslint:disable-line
                return defaultValue || '';
            }
        };
        this.pName = projectName;
    }
    return Environment;
}());
exports.Environment = Environment;
//# sourceMappingURL=environment.js.map