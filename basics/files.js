const fs = require("fs");

// Reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data.toString());
});

console.log("last line");

// Writing files
fs.writeFile("./docs/blog1.txt", "Hello, Andrei!", () => {
  console.log("file was writen");
})

// If the file does not exist, it will create it
fs.writeFile("./docs/blog2.txt", "Hello, again!", () => {
  console.log("file was writen");
})

// Directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// Deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  })
}
