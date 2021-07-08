
const Router = require('koa-router')

const router = new Router()

router.get('/ILoveU', async (ctx,next) => {
  ctx.body = 'I Love You Too !!'
  await next()
})

module.exports = router
