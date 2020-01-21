"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = __importDefault(require("ramda"));
const findAllCourses_1 = require("../queries/findAllCourses");
const onError_1 = require("./onError");
const onSuccess_1 = require("./onSuccess");
function getAllCourses(req, res) {
    findAllCourses_1.findAllCourses()
        .then(ramda_1.default.partial(onSuccess_1.onSuccess, [res]))
        .catch(ramda_1.default.partial(onError_1.onError, [res, 'Find all courses failed']));
}
function initCourses(app) {
    app.route('/api/courses').get(getAllCourses);
}
exports.initCourses = initCourses;
;
//# sourceMappingURL=courses.js.map