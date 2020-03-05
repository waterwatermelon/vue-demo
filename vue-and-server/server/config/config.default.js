/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1562034239149_5109';
  config.security = {
    csrf:{
      enable:false,
    }
  }
  // add your middleware config here
  config.middleware = [];
 // orm config
 config.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: '3307',
  username: 'root',
  password: '123456',
  database: 'iot',
  define: {
    freezeTableName: true
  },
  timezone: '+08:00',
  dialectOptions: {
    dateStrings: true,
    typeCast(field, next) {
      // for reading from database
      if (field.type === "DATETIME" || field.type === 'DATE') {
        return field.string();
      }
      return next();
    }
  }
  };
  config.cors = {
    origin: '*',
    allowMethods: 'POST,PUT,GET,DELETE',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
