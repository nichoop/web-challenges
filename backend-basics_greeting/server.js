import { createServer } from "node:http";

// export const server = …
export const server = createServer((request, response) => {
  request.url === "/";
  response.statusCode = 200;
  response.end("Hello Nicholas");
});

export default server;
