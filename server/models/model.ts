import { Sequelize } from 'sequelize';

const dbUrl = 'postgres://postgres:postgres@localhost:54320/typescript';
export const sequelize = new Sequelize(dbUrl);