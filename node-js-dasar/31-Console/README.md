<p align="justify">
Tahukah kamu? ternyata console yang selama ini sering kita gunakan merupakan salah satu dari sekian banyak standard library pada teknologi Node JS. Console ini juga masuk ke dalam globals object, jadi seperti biasa kita tidak harus lakukan import-import module. Dan kita juga bisa membuat object dari console tersebut, sangat menarik sekali bukan?
</p>

```js
import { Console } from "console";
import fs from "fs";

const logFile = fs.createWriteStream("application.log");

const log = new Console({
  stdout: logFile,
  stderr: logFile,
});

log.info("Hello Node JS");
log.error("Ups terjadi error");
```

[<< Zlib]()
<br>
[Worker Threads >>]()
