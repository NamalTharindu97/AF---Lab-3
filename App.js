console.log("hello world");

const fs = require("fs");
fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

fs.writeFile("file.txt", "hello world namal ", function (err) {
  if (err) throw err;
  console.log("file saved");
});
