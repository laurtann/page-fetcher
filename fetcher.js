const args = process.argv.slice(2);
const fs = require('fs');

const request = require('request');
request(args[0], (error, response, body) => {
  // found at https://attacomsian.com/blog/reading-writing-files-nodejs
  fs.writeFile(args[1], body, (err) => {
    if (err) {
      throw err;
    }
    let bytes = fileSize(args[1]);
    console.log(`Downloaded and saved ${bytes} bytes to ${args[1]}`);
  });
});

// got from https://stackoverflow.com/questions/42363140/how-to-find-the-size-of-the-file-in-node-js
const fileSize = function(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats["size"];
  return fileSizeInBytes;
};