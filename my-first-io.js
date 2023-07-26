const fs = require('fs');
const contents = fs.readFileSync(process.argv[2]);
const line = contents.toString().split('\n').length-1;
console.log(line)