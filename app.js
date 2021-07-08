const Koa = require('Koa');
const Router = require('koa-router')
const requireDirectory = require('require-directory')
const parser = require('koa-bodyparser')
/*
常见的导入导出包
comomonJS  ->  require
ES6  ->  import from
AMD
*/

const app = new Koa()
app.use(parser())

requireDirectory(module, './api', {
  visit: (obj) => {
    if(obj instanceof Router)
      app.use(obj.routes())
  }
})

app.listen(8600)