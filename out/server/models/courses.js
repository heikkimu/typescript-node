"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const model_1 = require("./model");
class Courses extends sequelize_1.Model {
}
Courses.init({
    description: sequelize_1.DataTypes.STRING,
    url: sequelize_1.DataTypes.STRING,
    longDescription: sequelize_1.DataTypes.TEXT,
    iconUrl: sequelize_1.DataTypes.STRING,
    courseListIcon: sequelize_1.DataTypes.STRING,
    seqNo: sequelize_1.DataTypes.INTEGER,
    comingSoon: sequelize_1.DataTypes.BOOLEAN,
    isNew: sequelize_1.DataTypes.BOOLEAN,
    isOngoing: sequelize_1.DataTypes.BOOLEAN,
}, { sequelize: model_1.sequelize, modelName: 'Courses' });
exports.default = Courses;
//# sourceMappingURL=courses.js.map