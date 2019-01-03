/***
 * Excerpted from "Node.js 8 the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode2 for more book information.
 ***/
//'use strict';
const path = require('path')
const fs = require('fs');
const promisify = require('util').promisify
const readFilePro = promisify(fs.readFile)
const writeFilePro = promisify(fs.writeFile)
const sourcePath = path.join(__dirname, './source.txt');
const targetPath = path.join(__dirname, './target.txt');
let errList = []

const catchHandler = (name) => (e) => {
  e.throwName = name || ''
  errList.push(e)
}
async function simpleCopy() {

  const sourceFileData = await readFilePro(sourcePath).catch(catchHandler('readFilePro')) || ''

  const writeRes = await writeFilePro(targetPath, sourceFileData).catch(catchHandler('writeFilePro'))

  //console.log(sourceFileData, writeRes)
  if (errList.length > 0) {
    console.log(errList)
  } else {
    console.log('文件内容复制成功')
  }
}

async function steamCopy() {
  const sourceSteam = fs.createReadStream(sourcePath, {
    encoding: 'utf-8', // 不指定读取到的是buffer
    highWaterMark: 2
  })
  const targetSteam = fs.createWriteStream(targetPath, {
    encoding: 'utf-8', //
    highWaterMark: 3
  })
  sourceSteam.pipe(targetSteam, {
    end: false
  })
/*  sourceSteam.on('data', (data) => {
    const writeStatus = targetSteam.write(data)
    console.log(writeStatus)
    console.log(process.memoryUsage())
    console.log(`${data}<over one>`)
  })*/

  sourceSteam.on('end', () => {
    console.log('读取结束')
    targetSteam.end('写入完成',() => {
      console.log('结束')
    })
  })
  targetSteam.on('end', () => {
    console.log('写入结束')
  })

}

async function main() {
  //simpleCopy()
  steamCopy()
}

main()

