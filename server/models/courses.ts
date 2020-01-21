import { Model, DataTypes } from 'sequelize';
import { sequelize } from './model';
import Lessons from './lessons';

class Courses extends Model { }

Courses.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    longDescription: DataTypes.TEXT,
    iconUrl: DataTypes.STRING,
    courseListIcon: DataTypes.STRING,
    seqNo: DataTypes.INTEGER,
    comingSoon: DataTypes.BOOLEAN,
    isNew: DataTypes.BOOLEAN,
    isOngoing: DataTypes.BOOLEAN,
}, { sequelize, modelName: 'Courses' });

Courses.hasMany(Lessons, { foreignKey: 'courseId' });
Lessons.belongsTo(Courses, { foreignKey: 'courseId' });

export default Courses;