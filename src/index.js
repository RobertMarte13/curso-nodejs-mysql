import { PORT } from './config.js'
import app from './app.js'

app.listen(PORT)
console.log(`Example ${app.get("nameApp")} listening on port ${PORT}!`)