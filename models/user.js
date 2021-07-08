const bcrypt = require('bcryptjs')

const {db} = require("../core/db")
const {Sequelize, Model} = require("Sequelize")


class User extends Model {

}

User.init({
  // 主键  关系型数据库
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true, //作为主键
    autoIncrement: true,//自增长
  },
  nickname: Sequelize.STRING,
  email: Sequelize.STRING,
  phonenumber: Sequelize.STRING,
  password: {
    type: Sequelize.STRING(128),
    set(val) {
      const salt = bcrypt.genSaltSync(10)
      const psw = bcrypt.hashSync(val, salt)
      this.setDataValue('password',psw)
    }
  },
},{
  sequelize: db,
  tableName: 'user',
})

module.exports = {
  User
}