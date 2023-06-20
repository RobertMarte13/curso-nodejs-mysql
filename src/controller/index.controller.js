import { pool } from '../db.js'

export const ping = async (req, res) => {
  // Siempre que hacemos una peticion y esperamos, debemos guardar lo que nos retorna la consulta en una variable.
  // * Tambien puedo cambiar el valor de 1 + 1 y poner un string.
  const [result] = await pool.query('SELECT "Pong" AS result') // Los corchetes son para que nos de el result ya que si no lo que nos dara sera un objeto muy grande.
  res.json(result[0]) // Este otro corchete es porque el objeto que nos interesa tambien esta contenido en otro corchete.
}
