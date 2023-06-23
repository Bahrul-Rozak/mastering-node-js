import http, { request } from "http";

const server = http.createServer((request, Response) => {
  Response.write("Hello Node JS");
  Response.end();
});

server.listen(3000);
