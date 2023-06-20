import dns from "dns/promises";

const lookup = await dns.lookup("bahrulrozak.vercel.app");
console.log(lookup.family);
console.log(lookup.address);
