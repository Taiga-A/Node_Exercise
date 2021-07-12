const Router = require('koa-router')

const router = new Router({
  prefix: '/user'
})

const {User} = require('../../../models/user')
const {emailSend} = require('../../../core/email/email')

router.post('/signup', async (ctx, next) => {
  const user = {
    email: ctx.request.body.email,
    nickname: ctx.request.body.nickname,
    phonenumber: ctx.request.body.phonenumber,
    password: ctx.request.body.password,
  }

  if(false)emailSend(user.email, '[Taiga_A 的小屋]注册成功！', `<div>
  <div style="width: 1000px;">
    <div style="
      background-color: rgb(53, 123, 228);
      border-radius: 5px;
      color: #fff;
      padding:40px 0px 10px 30px;">
      <span>[Taiga_A 的小屋]</span>
      <h1>恭喜您，注册成功！</h1>
    </div>
    <div style="
      margin-top: 5px;
      background-color: rgb(121, 173, 252);
      border-radius: 5px;
      font-size: 20px;
      color: #fff;
      padding:30px 0px 20px 30px;">
      <span>快来参观我的博客 </span>
      <a href="https://taiga-a.github.io/"> <div style="z-index: 999;position: relative;"> My Blog </div> </a>
    </div>
  </div>
  <style>
    a {
      overflow: hidden;
      position: relative;
      display: block;
      background-color:tomato;
      width: 80px;
      margin: 10px 0 0 10px;
      padding:10px 20px;
      border-radius: 5px;
      color: #fff;
      text-decoration: none;
      transition: all 0.2s;
      z-index: 2;
    }
    a:hover {
      color: #000;
      box-shadow: 0px 0px 5px 2px rgb(97, 97, 97);
    }
    a::before {
      display: block;
      content: ' ';
      position: absolute;
      left: -250px;
      top: 0;
      width: 200px;
      height: 70px;
      background-color: rgb(250, 250, 120);
      transition: all 0.8s cubic-bezier(.13,1.57,.53,.53);
      z-index: 1;
    }
    a:hover::before {
      left: -80px;
    }
  </style>
</div>`)

  ctx.body = await User.create(user)

  await next()
})

module.exports = router