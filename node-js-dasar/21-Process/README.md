<p align="justify">
Process merupakan standard library yang digunakan untuk mendapatkan informasi proses NodeJS
yang sedang berjalan. Process juga merupakan instance dari EventEmitter, sehingga kita bisa menambahkan listener kedalam standar library Process.
</p>

```js
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
```

[<< Globals](https://github.com/Bahrul-Rozak/mastering-node-js/tree/main/node-js-dasar/20-Globals)
<br>
[Readline >>]()
