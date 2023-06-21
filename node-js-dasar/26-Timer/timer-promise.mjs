import timers from "timers/promises";

for await (const startTime of timers.setInterval(1000, new Date())) {
  console.log(`Starter time at ${startTime}`);
}
