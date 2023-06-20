import os from "os";

const getOsInformation = {
  version: os.version(),
  platform: os.platform(),
};

let { version, platform } = getOsInformation;

console.log(version, platform);
