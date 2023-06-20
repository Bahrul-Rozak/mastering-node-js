import fileSystem from "fs";

const writeFileTxt = function () {
  const write = fileSystem.writeFileSync("info.txt", "Nama : Bahrul Rozak");
  console.log(write);
};

writeFileTxt();
