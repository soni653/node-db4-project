const app = require("./server");

const PORT = 6050;

app.listen(PORT, () => {
  console.log(`Server Is Listening on port:${PORT}`);
});
