import os from "os";

function getOsInformation() {
  const version = os.version();
  console.log(version);
}
getOsInformation();
