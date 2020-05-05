const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 7000;

server.use(middlewares);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept,Origin,Content-Type,X-LS-CORS-Template,X-LS-Auth-Token,X-LS-Auth-User-Token,Content-Type,X-LS-Sync-Result,X-LS-Sequence,token"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST");
  if (req.method === "POST") {
    var clientIp = requestIp.getClientIp(req);
    console.log(clientIp);
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.use(router);

server.listen(port);
