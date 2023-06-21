import net from "net";

const server = net.createServer(function (client) {
  console.info("Client has been Connected");
  client.on("data", function (data) {
    console.info(`Receiver data from client : ${data.toString()}`);
    client.write(`Hello ${data.toString()}\r\n`);
  });
});

server.listen(3000, "localhost");
