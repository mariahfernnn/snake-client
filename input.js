let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  const handleUserInput = function () {
    stdin.on('data', (key) => {
      if (key === `\u0003`) {
        process.exit();
      } else if (key === 'w') {
        conn.write('Move: up');
      } else if (key === 'a') {
       conn.write('Move: left');
      } else if (key === 's') {
        conn.write('Move: down');
      } else if (key === 'd') {
        conn.write('Move: right');
      } else if (key === 'q') {
        conn.write('Say: YAY');
      } else if (key === 'e') {
        conn.write('Say: BYE');
      }
    })
  }
  handleUserInput();
  stdin.resume();
  return stdin;
}

module.exports = { setupInput };