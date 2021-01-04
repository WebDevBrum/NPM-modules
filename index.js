import wait from "waait";
import faker from "faker";
// import {name} from 'faker';
import { formatDistance, format } from "date-fns";

console.log(`Hello ${faker.name.firstName()}`);

const fakeNames = Array.from(
  { length: 10 },
  () => `${faker.name.firstName()} ${faker.name.lastName()}`
);

console.log(fakeNames);

async function go() {
  console.log("Going!");
  await wait(200);
  console.log("ending!");
}

go();

const diff = formatDistance(
  new Date(1986, 3, 4, 11, 32, 0),
  new Date(1986, 3, 4, 10, 32, 0),
  { addSuffix: true }
); //= > 'in about 1 hour'

console.log(diff);

const date = new Date();

// January the 12th 2020
const formatted = format(date, "LLLL 'the' do y");

console.log(formatted);
