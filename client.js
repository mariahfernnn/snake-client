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

  // setInterval(() => {conn.write("Move: up")}, 500)
  // setTimeout(() => {conn.write("Move: right")}, 3000)
  // setTimeout(() => {conn.write("Move: down")}, 1000)
  // setTimeout(() => {conn.write("Move: right")}, 1000)
  // setTimeout(() => {conn.write("Move: left")}, 1000)
 
  

  //let delay = key * 1000;

  // conn.on('Move: up', (key) => {
  //   conn.write('Move: down');
    // setTimeout(() => {
    // }, delay);
  // });
  
  // conn.on('Move: down', (key) => {
  //   conn.write('Move down one square');
  //   setTimeout(() => {
  //   }, delay);
  // });

  // conn.on('Move: left', (key) => {
  //   conn.write('Move left one square');
  //   setTimeout(() => {
  //   }, delay);
  // });

  // conn.on('Move: right', (key) => {
  //   conn.write('Move right one square');
  //   setTimeout(() => {
  //   }, delay);
  // });

  conn.write('Name: MHF')

  return conn;

}

module.exports = { connect };