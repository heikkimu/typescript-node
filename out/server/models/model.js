"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbUrl = 'postgres://postgres:postgres@localhost:54320/typescript';
exports.sequelize = new sequelize_1.Sequelize(dbUrl);
//# sourceMappingURL=model.js.map