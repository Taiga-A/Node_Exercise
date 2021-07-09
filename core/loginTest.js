const bcrypt = require('bcryptjs')

const {User} = require('../models/user')

module.exports = async function loginTest(user) {
  let ctx = new Object
  let code = false
  switch (user.type) {
    case 'email':
      code = true
      break;
    case 'phonenumber':
      code = true
      break;
    case 'nickname':
      code = true
      break;
    default:
      ctx.body = {
        ok: false,
        mes: '错误的类型，您只可选用邮箱，电话号码或昵称：email 、phonenumber 、nickname 作为 type !!'
      }
      break;
  }

  if(code) {
    let where = new Object
    where[user.type] = user.key
    let res = await User.findOne({
      where
    })

    if(!res) {
      ctx.body = {
        ok: false,
        mes: '未查找到账户'
      }
    } else {
      const passwordOk = await bcrypt.compareSync(user.password, res.password)

      if(passwordOk) {
        ctx.body = {
          ok: true,
          mes: '登陆成功'
        }
      } else {
        ctx.body = {
          ok: false,
          mes: '密码错误'
        }
      }

    }
  }

  return ctx.body
}