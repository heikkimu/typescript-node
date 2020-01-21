"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = __importDefault(require("./courses/"));
function initApi(app) {
    app.use('/api/courses', courses_1.default);
}
exports.initApi = initApi;
//# sourceMappingURL=index.js.map