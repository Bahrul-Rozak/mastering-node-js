import net from "net";

const connection = net.createConnection({
  port: 3000,
  host: "localhost",
});

setInterval(function () {
  connection.write("Rozak\r\n");
}, 2000);

connection.addListener("data", function (data) {
  console.info(`Receiver data from server : ${data.toString()}`);
});
