const express = require('express');
const app = express();
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Intently listenning on port ${port}`);
});

app.use(express.static(__dirname + "/public"));
