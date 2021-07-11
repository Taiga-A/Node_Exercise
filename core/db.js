const Sequelize = require('sequelize')

const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/config').database


const sequelize = new Sequelize(dbName,user,password,{
  dialect: 'mysql',
  host,
  port,
  timezone: '+08:00',//时区
  define: {

  }
})

sequelize.sync({
  force: true
})

module.exports = {
  db: sequelize,
}