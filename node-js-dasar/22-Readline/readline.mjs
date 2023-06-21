import readline from "readline";
import process from "process";

function getInputFromUser() {
  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  input.question("Siapa Nama Anda? ", function (name) {
    console.info(`Hello ${name}`);
    input.close();
  });
}

getInputFromUser();
