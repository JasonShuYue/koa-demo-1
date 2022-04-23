const express = require("express");
const app = express();

app.use((request, response, next) => {
  const start = new Date().getTime();
  response.locals.start = start;
  next();
});

app.use((request, response, next) => {
  for (let i = 0; i < 10000; i++) {
    response.write("hello!");
  }
  response.end();
  next();
});

app.use((request, response, next) => {
  console.log("response.locals.start:", response.locals.start);
  console.log("type:", typeof response.locals.start);
  const time = new Date().getTime() - response.locals.start;
  console.log("time:", time);
  next();
});

app.listen(3000, () => {
  console.log("监听3000端口");
});
