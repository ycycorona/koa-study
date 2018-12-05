const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    console.log(1)
    ctx.body = 3
    await next()
    console.log(2)
})

app.use(async (ctx) => {
    ctx.body = 3
})
// 注意console的执行顺序
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')