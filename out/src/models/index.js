"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_config_1 = require("../../db.config");
var Sequelize = require("sequelize");
var sequelize = new Sequelize(db_config_1.dbConfigs.DB, db_config_1.dbConfigs.USER, db_config_1.dbConfigs.PASSWORD, {
    host: db_config_1.dbConfigs.HOST,
    port: db_config_1.dbConfigs.PORT,
    dialect: db_config_1.dbConfigs.dialect,
    pool: {
        max: db_config_1.dbConfigs.pool.max,
        min: db_config_1.dbConfigs.pool.min,
        acquire: db_config_1.dbConfigs.pool.acquire,
        idle: db_config_1.dbConfigs.pool.idle,
    },
});
var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.inboundCalls = require("./inboundCallModel.ts")(sequelize, Sequelize);
module.exports = db;
//# sourceMappingURL=index.js.map