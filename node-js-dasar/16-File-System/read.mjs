import fileSystem from "fs";

const readFileAsString = function () {
  const read = fileSystem.readFileSync("read.mjs");
  console.log(read.toString());
};

readFileAsString();
