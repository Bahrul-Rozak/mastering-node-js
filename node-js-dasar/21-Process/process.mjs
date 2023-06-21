import process, { env, memoryUsage, report } from "process";

process.addListener("exit", function (exitCode) {
  console.log(`Node JS with exit code ${exitCode}`);
});

const allProcess = {
  reportProcess: report,
  reportMemoryUsage: memoryUsage(),
};

const { reportProcess, reportMemoryUsage } = allProcess;
console.log(reportProcess, reportMemoryUsage);

process.exit(1);
