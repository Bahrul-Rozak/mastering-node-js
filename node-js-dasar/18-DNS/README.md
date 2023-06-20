<p align="justify">
DNS merupakan standard library teknologi Node JS untuk bekerja dengan Domain Name System (DNS)
</p>

```js
import dns from "dns/promises";

const lookup = await dns.lookup("bahrulrozak.vercel.app");
console.log(lookup.family);
console.log(lookup.address);
```

[<< Debugger](https://github.com/Bahrul-Rozak/mastering-node-js/tree/main/node-js-dasar/17-Debugger)
<br>
[Events >>]()
