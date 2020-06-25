const express = require("express");

const server = express();
//const port = process.env.PORT || 6050

server.use(express.json());

server.listen(port, () => {
  console.log(`Server Is Running at http://localhost:${port}`);
});
