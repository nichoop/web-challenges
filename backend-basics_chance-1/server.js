import { createServer } from "node:http";
import Chance from "chance";
// export const server = …
const chance = new Chance();

export const server = createServer((request, response) => {
  if (request.url === "/") {
    const name = chance.name();
    const age = chance.age();
    const profession = chance.profession();

    const responseBody = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end(responseBody);
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});

export default server;
