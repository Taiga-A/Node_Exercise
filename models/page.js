const {db} = require("../core/db")
const {Sequelize, Model} = require("Sequelize")

class Page extends Model {

}

Page.init({
  // 主键  关系型数据库
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true, //作为主键
    autoIncrement: true,//自增长
  },
  title: Sequelize.STRING(512),
  date: Sequelize.DATE,
  author: Sequelize.STRING(128),
  path: Sequelize.STRING
},{
  sequelize: db,
  tableName: 'page',
})

module.exports = {
  User
}