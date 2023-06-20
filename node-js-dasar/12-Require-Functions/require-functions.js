const os = require("os");

function getOsInformation() {
  const version = os.version();
  console.log(version);
}
getOsInformation();
