//read command line arguments:
//var givenArgs = process.argv.slice(2);
//console.log('myArgs: ', myArgs);

/*
process.argv.forEach(function(val, index, array) {
  if (index >= 2) {
    console.log(val.toUpperCase())
  }
})
*/

process.stdin.setEncoding('utf8');
process.stdout.write("Input: ")
process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`output: ${chunk.toUpperCase()}`);
  }
  process.stdout.write("Input: ");
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
