const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
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
  conn.write('Say: HEY')

  return conn;

}

module.exports = { connect };