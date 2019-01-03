const net = require('net')

function writeToRemote() {
  const client = new net.Socket();
  client.connect(60300, '127.0.0.1', function () {
    client.write('hello server')
  })
  client.on('data', (data) => {
    console.log(JSON.parse(data))
    client.end('will close')
  })
}

writeToRemote()