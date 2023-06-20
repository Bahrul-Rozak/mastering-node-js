function samplePromise() {
  return Promise.resolve("Rozak");
}

const data = await samplePromise();
console.log(data);
