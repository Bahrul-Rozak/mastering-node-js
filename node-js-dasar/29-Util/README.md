<p align="justify">
Util adalah standard library yang berisikan utility-utility yang bisa kita gunakan untuk mempermudah pembuatan kode program di teknologi NodeJS. Misalkan disini kita ingin key firstName dan lastName memiliki value yang berisi single quotes.
</p>

```js
import util from "util";

const person = {
  firstName: "Bahrul",
  lastName: "Rozak",
  age: 21,
};

console.log(util.format("Person : %s", person));

// Person : { firstName: 'Bahrul', lastName: 'Rozak', age: 21 }
```

[<< URL]()
<br>
[Zlib >>]()
