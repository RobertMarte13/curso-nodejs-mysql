import express from 'express'
import morgan from 'morgan'
import { pool } from './db.js'

const app = express()

app.use(morgan('dev'))
app.set('port', 3000)
app.set('nameApp', 'Curso res API')

app.get('/ping', async (req, res) => {
  // Siempre que hacemos una peticion y esperamos, debemos guardar lo que nos retorna la consulta en una variable.
  // * Tambien puedo cambiar el valor de 1 + 1 y poner un string.
  const [result] = await pool.query('SELECT "Pong" AS result') // Los corchetes son para que nos de el result ya que si no lo que nos dara sera un objeto muy grande.
  res.json(result[0]) // Este otro corchete es porque el objeto que nos interesa tambien esta contenido en otro corchete.
})

app.get('/employees', (req, res) => {
  res.send('Obteniendo empleados')
})

app.post('/employees', (req, res) => {
  res.send('Creando un empleado')
})

app.put('/employees', (req, res) => {
  res.send('Actualizando un empleado')
})

app.delete('/employees', (req, res) => {
  res.send('Eliminando un empleado')
})

app.listen(app.get('port'), () => {
  console.log(
    `Example ${app.get('nameApp')} listening on port ${app.get('port')}!`
  )
})
