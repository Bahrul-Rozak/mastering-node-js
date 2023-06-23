import zlib from "zlib";
import fs from "fs";

const originialSourceFile = fs.readFileSync("zlib.mjs");
const compressOriginalSourceFile = zlib.gzipSync(originialSourceFile);

fs.writeFileSync("zlib.mjs.txt", compressOriginalSourceFile);
