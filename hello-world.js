const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    await next()
    console.log(2)
})

app.use(async (ctx) => {
    const header = ctx.request.headers
    ctx.body = 3
})
// 注意console的执行顺序
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')