import { createPool } from "mysql2/promise";
import {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_DATABASE,
} from "./config.js";

// createConnectiones para crear una sola conexion
// createPool Esta es para varias conexiones

// Para crear una conexion a mi base de datos uso createPool y este resive un objeto
// Este dentro del objeto espera datos como, el host que si es en la nube tendremos que indicar algun numero, tambien esta elo user que en mi caso es root, luego la password y por ultimo el puerto que en este caso es la de por defecto que es 3306.
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});
