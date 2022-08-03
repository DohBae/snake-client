let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    console.log("Thanks for playing")
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "h") {
    connection.write("Say: Hello there!");  
  } else if (key === "t") {
    connection.write("Say: Try spinning, that's a good trick!");
  } else if (key === "y") {
    connection.write("Say: oH hAi MaRk!");
  }
}

module.exports = setupInput;