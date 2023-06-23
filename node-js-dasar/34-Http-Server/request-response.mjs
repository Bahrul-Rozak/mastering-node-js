import http, { request } from "http";

const server = http.createServer((request, Response) => {
  if (request.method === "POST") {
    request.addListener("data", function (data) {
      Response.setHeader("Content-Type", "application/json");
      Response.write(data);
      Response.end();
    });
  } else {
    Response.write("Hello Node JS");
    Response.end();
  }
});

server.listen(3000);
