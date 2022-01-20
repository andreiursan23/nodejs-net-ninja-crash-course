const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("--------- New CHUNK --------");
//   console.log(chunk);

//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// PIPING
readStream.pipe(writeStream); // linia aste e echivalentul a ce am scris la liniile 8 si 12
