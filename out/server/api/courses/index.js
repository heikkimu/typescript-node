"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const all_1 = require("./all");
const express_1 = __importDefault(require("express"));
const detail_1 = require("./detail");
var router = express_1.default.Router();
router.get('/', all_1.all);
router.get('/:id', detail_1.detail);
exports.default = router;
//# sourceMappingURL=index.js.map