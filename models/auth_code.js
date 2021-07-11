const {db} = require("../core/db")
const {Sequelize, Model} = require("Sequelize")


class AuthCode extends Model {

}

AuthCode.init({
  // 主键  关系型数据库
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true, //作为主键
    autoIncrement: true,//自增长
  },
  code: {
    unique: true,
    type: Sequelize.STRING
  },
},{
  sequelize: db,
  tableName: 'auth_code',
})

module.exports = {
  AuthCode
}