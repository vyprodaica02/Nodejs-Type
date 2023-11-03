import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Floorkiller2000",
  database: "demo_node_api",
});

connection.connect(function (err) {});

export default connection;
