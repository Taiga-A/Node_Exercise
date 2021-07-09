const Router = require('koa-router')

const router = new Router({
  prefix: '/user'
})

const {User} = require('../../models/user')

router.post('/login', async (ctx, next) => {
  const user = {
    type: ctx.request.body.type,
    key: ctx.request.body.key,
    password: ctx.request.body.password,
  }

  switch (user.type) {
    case 'email':
      ctx.body = sqlPassworld('email', user.key, user.password)
      break;
    case 'phonenumber':
      ctx.body = sqlPassworld('phonenumber', user.key, user.password)
      break;
    case 'nickname':
      ctx.body = sqlPassworld('nickname', user.key, user.password)
      break;
    default:
      ctx.body = {
        ok: false,
        mes: '错误的类型，您只可选用邮箱，电话号码或昵称：email 、phonenumber 、nickname 作为 type !!'
      }
      break;
  }

  function sqlPassworld(type , value, psw) {
    let where = new Object
    where[type] = value

    //查找用户
    const user = await User.findOne({
      where
    })
    if(!user) return {
      ok: false,
      mes: '暂无账户'
    }

    //校验密码
    bcrypt.compare(psw, user.password, function(err, res) {
      if(res) return {
        ok: true,
        mes: '登陆成功！',
        nickname: user.nickname
      }
      return {
        ok: false,
        mes: '密码错误',
        err,
      }
    });
  }

  await next()
})

module.exports = router