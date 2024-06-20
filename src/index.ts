// -----------------------------------
// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return await res.json();
// }
// getData().then((data) => console.log(data));

// -----------------------------------
import fs from "fs";

const dir = fs.readdirSync(__dirname);
console.log(dir);
