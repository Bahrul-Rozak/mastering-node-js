import zlib from "zlib";
import fs from "fs";

const originialSourceFile = fs.readFileSync("zlib.mjs.txt");
const compressOriginalSourceFile = zlib.unzipSync(originialSourceFile);

console.log(compressOriginalSourceFile.toString());
