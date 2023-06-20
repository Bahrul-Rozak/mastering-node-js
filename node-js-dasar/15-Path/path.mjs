import path from "path";

const locationFile = "/Desktop/mastering-node-js/15-Path/path.mjs";

console.log(path.dirname(locationFile));
console.log(path.basename(locationFile));
console.log(path.extname(locationFile));
console.log(path.parse(locationFile));
