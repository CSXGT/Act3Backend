const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "campeonato_robotica",
});

db.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err);
    throw err;
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

module.exports = db;