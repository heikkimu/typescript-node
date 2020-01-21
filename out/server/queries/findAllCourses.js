"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = __importDefault(require("../models/courses"));
function findAllCourses() {
    return courses_1.default.findAll({
        order: ['seqNo']
    });
}
exports.findAllCourses = findAllCourses;
//# sourceMappingURL=findAllCourses.js.map