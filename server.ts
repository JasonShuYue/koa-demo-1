import Koa from "koa";

const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  const time = ctx.response.get("X-Response-Time");
  console.log(`${ctx.url}: ${time}`);
});

app.use(async (ctx, next) => {
  const startTime = Date.now(); // 记录开始时间
  await next();
  const time = Date.now() - startTime;
  ctx.set("X-Response-Time", `${time}ms`);
});

app.use(async (ctx, next) => {
  await next();
  for (let i = 0; i < 1000; i++) {
    ctx.body += "Hello World!\n";
  }
});

app.listen(3000);
