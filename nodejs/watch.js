'use strict';
const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, process.argv[2])
fs.watch(filePath, (eventType, fileName) => console.log(eventType,fileName ));
console.log('Nowwatchingtarget.txtfor changes...');