import { Buffer } from "node:buffer";

const buffer = Buffer.from("Rozak");
console.info(buffer.toString("base64"));
