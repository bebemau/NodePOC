import { dbConfigs } from "../../db.config"
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfigs.DB, dbConfigs.USER, dbConfigs.PASSWORD, {
  host: dbConfigs.HOST,
  port: dbConfigs.PORT,
  dialect: dbConfigs.dialect,
  pool: {
    max: dbConfigs.pool.max,
    min: dbConfigs.pool.min,
    acquire: dbConfigs.pool.acquire,
    idle: dbConfigs.pool.idle,
  },
});

let db: any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.inboundCalls = require("./inboundCallModel.ts")(sequelize, Sequelize);
module.exports = db;