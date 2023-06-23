<p align="justify">
Kita juga dapat melakukan kompresi file dengan bantuan dari salah satu standard library bernama zlib
</p>

```js
import zlib from "zlib";
import fs from "fs";

const originialSourceFile = fs.readFileSync("zlib.mjs");
const compressOriginalSourceFile = zlib.gzipSync(originialSourceFile);

fs.writeFileSync("zlib.mjs.txt", compressOriginalSourceFile);
```

<p align="justify">
Maka kita akan mendapati hasil kompresi original file dalam bentuk format txt, nah sekarang bagaimana caranya agar file tersebut, kembali ke format semula? Kita bisa lakukan decompress file
</p>

```js
import zlib from "zlib";
import fs from "fs";

const originialSourceFile = fs.readFileSync("zlib.mjs.txt");
const decompressOriginalSourceFile = zlib.unzipSync(originialSourceFile);

console.log(decompressOriginalSourceFile.toString());
```

[<< Util]()
<br>
[Console >>]()
