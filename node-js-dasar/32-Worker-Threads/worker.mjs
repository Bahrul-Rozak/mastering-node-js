import { parentPort, threadId } from "worker_threads";

parentPort.addListener("message", function (message) {
  for (let i = 0; i < message; i++) {
    console.log(`Therad- ${threadId} send message ${i}`);
    parentPort.postMessage(i);
  }
  parentPort.close();
});
