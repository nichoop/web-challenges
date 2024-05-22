import { server } from "./server.js";
// import server from "/server.js";
// server.listen(…

const port = 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
