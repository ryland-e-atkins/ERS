import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sequelize } from 'sequelize';

import { User } from '../_models/user';

@Injectable()
export class DbService {

  constructor(private http: HttpClient,
              private sqlz: Sequelize) {
    sqlz = new Sequelize({
      host: 'localhost',
      port: 3306,
      database: 'ERS_DB',
      username: 'ers_user',
      password: 'aGoodPassword',
      dialect: 'mysql' || 'sqlite' || 'postgres' || 'mssql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
        acquire: 10000
      }
    });
  }
  testConnection() {
    this.sqlz
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }
}
