import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;

// Instantiate new Sequelize instance!
//export const sequelize = new Sequelize({
//  "username": c.username,
//  "password": c.password,
//  "database": c.database,
//  "host":     c.host,

//  dialect: 'postgres',
//  storage: ':memory:',
//});

//const sequelize = new Sequelize('database', 'username', 'password', {
//	  host: your_database_host,
//	    dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//})

//DATABASE_URI=postgresql://udagramagoswami1:udagramagoswami1@udagramagoswami1.cvqgygxhhehg.us-east-1.rds.amazonaws.com/udagramagoswami1

//	export const sequelize = new Sequelize(DATABASE_URI);
//export const sequelize = new Sequelize("postgres://postgres:postgres@udagramagoswami1.cvqgygxhhehg.us-east-1.rds.amazonaws.com/udagramagoswami1", {
//	  dialect: 'postgres'
//});

 export const sequelize = new Sequelize("postgresql://udagramgoswami2:udagramgoswami2@udagramgoswami2.cvqgygxhhehg.us-east-1.rds.amazonaws.com/udagramgoswami2", {
         dialect: 'postgres'
 });


