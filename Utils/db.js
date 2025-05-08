import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "johan_delgado_adso2894667",
  password: "wasm123456",
  database: "codeform_db",
});

export default connection;
