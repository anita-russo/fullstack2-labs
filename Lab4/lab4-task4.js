//const { spawn } = require('child_process');
//const child = spawn('compute.js');

const fork = require('child_process').fork;
var child = fork('compute.js');

child.send('message')

child.on('message', computation => {
  console.log(`Long computation result: ${computation}`);
  process.exit();
})
