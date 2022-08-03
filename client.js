const net = require("net");
const setupInput = require('./input');

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


// console.log("Connecting ...");
// connect();

module.exports = connect;