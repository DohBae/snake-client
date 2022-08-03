const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost", 
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to the server");
    conn.write("Name: BD")
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    console.log("Thanks for playing :)")
    process.exit();
  }
}


console.log("Connecting ...");
connect();

module.exports = connect;