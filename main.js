// File Organizer
const fs = require("fs");
const path = require("path");
let filesMoved = false;
let dir = fs.readdirSync(__dirname);

dir.forEach((e) => {
  if (e == "main.js" || e == "package.json") {
    return;
  }
  let ext = path.extname(e);
  ext = ext.replace(".", "");
  if (!fs.existsSync(ext) && ext) {
    fs.mkdirSync(ext);
    const sourceFile = path.dirname(e) + "\\" + `${e}`;
    const destinationFile = path.join(ext, e);

    fs.rename(sourceFile, destinationFile, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("File moved successfully!");
      }
    });
  } else {
    const sourceFile = path.dirname(e) + "\\" + `${e}`;
    const destinationFile = path.join(ext, e);

    fs.rename(sourceFile, destinationFile, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("File moved successfully!");
        filesMoved = true;
      }
    });
  }
});
if (!filesMoved) {
  console.log("Everything is arranged!!");
}
