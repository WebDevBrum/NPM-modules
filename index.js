import wait from "waait";
import faker from "faker";

console.log(faker);

async function go() {
  console.log("Going!");
  await wait(200);
  console.log("ending!");
}

go();
