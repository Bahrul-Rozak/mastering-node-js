<p align="justify">
Seperti yang dijelaskan di awal, bahwa NodeJS itu secara default dia berjalan single thread, kecuali jika kita membuat thread manual menggunakan worker thread, tapi tetap dalam satu process. NodeJS memiliki standard library bernama Cluster, dimana kita bisa menjalankan beberapa process NodeJS secara sekaligus. Ini sangat cocok ketika kita menggunakan CPU yang multicore, sehingga semua core bisa kita utilisasi dengan baik, misal kita jalankan process NodeJS sejumlah CPU core. Di dalam Cluster, terdapat 2 jenis aplikasi, Primary dan Worker. Primary biasanya digunakan sebagai koordinator atau manajer untuk para Worker. Sedangkan Worker sendiri adalah aplikasi yang menjalankan tugasnya.
</p>

```js
import cluster from "cluster";
import http, { request } from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.addListener("exit", function (worker) {
    console.log(`Worker ${worker.id} is exited`);
  });
}

if (cluster.isWorker) {
  const server = http.createServer((request, Response) => {
    Response.write(`Response from process ${process.pid}`);
    Response.end();
    process.exit();
  });
  server.listen(3000);
  console.log(`Start cluster worker ${process.pid}`);
}
```

[<< HTTP Server]()
<br>
[Kembali ke Daftar Topik]()
