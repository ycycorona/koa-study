const http = require('http');
const net = require('net');
const url = require('url');
const  fs = require('fs');

//2. 创建http服务器
// 参数: 请求的回调, 当有人访问服务器的时候,就会自动调用回调函数
var server = http.createServer()

//3. 绑定端口
/*server.on('connect',(cReq, cSock) => {
  console.log(cReq, cSock)
  var u = url.parse('https://' + cReq.url);

  var pSock = net.connect(u.port, u.hostname, function() {
    cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
    pSock.pipe(cSock);
  }).on('error', function(e) {
    cSock.end();
  });

  cSock.pipe(pSock);
})*/
server.on('request',(req, res) => {
  const readerStream = fs.createReadStream('test.txt');

  res.writeHead(200, {
    //'Content-Type': 'application/octet-stream',

  })
  //res.write('456')
  readerStream.pipe(res)
  res.on('end', (err, r) => {

  })

/*  res.write('123')
  res.write('456')
  res.write('456')
  res.write('456')
  res.write('456')
  res.write('456')
  res.write('456')
  res.write('456')
  res.write('110')*/
  //res.end()

})
server.listen(3030)

