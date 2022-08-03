const net = require("net");
const setupInput = require('./input');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", 
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to the server");
    conn.write("Name: Bae")
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;