<p align="justify">
URL merupakan standar library yang tersedia pada teknologi Node JS untuk bekerja dengan URL.
</p>

```js
import { URL } from "url";

const getUrlInformation = () => {
  const originalUrl = new URL("https://bahrulrozak.vercel.app");
  const urlProperties = {
    protocol: originalUrl.protocol,
    host: originalUrl.host,
    pathname: originalUrl.pathname,
  };
  console.log(urlProperties);
};

getUrlInformation();
```

[<< Net]()
<br>
[Util >>]()
