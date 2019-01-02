'use strict';

const child_process = require('child_process');
const spawn = require('cross-spawn');
const iconv = require('iconv-lite');
console.log('当前工作目录: ', process.cwd())
console.log('当前模块文件目录: ', __dirname)
for(let i = 0; i < 3; i++) {
  let cp = spawn('dir', [__dirname], {
    //shell: true, 使用了cross-spawn，就不需要shell: true了
    //cwd: process.cwd()
  });
  //cp.stdout.pipe(process.stdout)
  cp.stdout.on('data', function(chunk) {
    console.log('stdout: ' + iconv.decode(chunk, 'gbk'));
  });
  cp.on('close', function(code) {
    console.log('子进程已退出，退出码 ' + code);
  });
}

console.log("进程 " + process.argv[2] + "执行" );

