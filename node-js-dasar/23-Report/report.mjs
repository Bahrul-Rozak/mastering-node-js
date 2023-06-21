import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json";

function sampleError() {
  throw new Error("Ups Terjadi Eror");
}

sampleError();
