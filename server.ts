import Koa from "koa";

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "hello world!";
  await next();
  ctx.body += " 最后执行的呀！";
});

app.use((ctx, next) => {
  ctx.body += " 中间执行de!";
});

app.listen(3000);
