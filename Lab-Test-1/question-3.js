var fs = require('fs');

var filePath = process.cwd() + "/Logs";

//does not exist, create & add files:
if (!fs.existsSync(filePath)) {
  fs.mkdirSync("Logs");
  process.chdir("Logs");
  for (var i = 0; i < 10; i++) {
    var filename = "log" + i + ".txt";
    fs.writeFileSync(filename, "adding text");
    console.log(filename);
  }
}
//it exists, delete the files:
else {
  console.log(process.cwd());
  process.chdir('Logs');
  console.log(process.cwd());
  for (var i = 0; i < 10; i++){
    try {
      filename = "log" + i + ".txt";
      fs.unlinkSync(filename);
      console.log(`${filename} deleted`);
    }
    catch (e) {
      console.log('Could not be deleted');
    }
  }
  process.chdir('../');
  fs.rmdirSync('Logs');
}
