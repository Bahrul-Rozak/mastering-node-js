import cluster from "cluster";
import http, { request } from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.addListener("exit", function (worker) {
    console.log(`Worker ${worker.id} is exited`);
  });
}

if (cluster.isWorker) {
  const server = http.createServer((request, Response) => {
    Response.write(`Response from process ${process.pid}`);
    Response.end();
    process.exit();
  });
  server.listen(3000);
  console.log(`Start cluster worker ${process.pid}`);
}
