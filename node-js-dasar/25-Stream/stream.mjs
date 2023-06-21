import fs from "fs";

function createWriterStream() {
  const writer = fs.createWriteStream("target.log");
  writer.write("Bahrul");
  writer.write("Rozak");
  writer.close();
}

function createReaderStream() {
  const reader = fs.createReadStream("target.log");
  reader.on("data", function (data) {
    console.info(data.toString());
    reader.close();
  });
}

createWriterStream();
createReaderStream();
