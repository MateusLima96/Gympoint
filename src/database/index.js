import Sequelize from 'sequelize'; // will do the connection to the database

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // will do the connection to the database and load the models
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection)); // passing the connection for each model
  }
}

export default new Database();
