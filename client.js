const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.149',
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: You ded cuz you idled');
  });
  conn.on('connect', (connect) => {
    console.log('Successfully connected to game server');
  });

  conn.write('Name: MHF')

  return conn;
}

module.exports = connect