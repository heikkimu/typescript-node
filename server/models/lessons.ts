import { Model, DataTypes } from 'sequelize';
import { sequelize } from './model';

class Lessons extends Model { }

Lessons.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.STRING,
    seqNo: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    pro: DataTypes.BOOLEAN,
    gitHubUrl: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    createdAt: DataTypes.TIME,
    updatedAt: DataTypes.TIME,
}, { sequelize, modelName: 'Lessons' });

export default Lessons;