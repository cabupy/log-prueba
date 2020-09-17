const express = require('express')
const { getLogger, logHandler } = require('./utils/logger')
const { terminate } = require('./utils/terminate')
const db = require('./db')

const app = express()

const log = getLogger(__dirname, __filename)
const port = +process.env.PORT || 3000

app.use(logHandler)

//log.warn('Hola Warn')
//log.info(`Hola Info`)
//log.error(`Hola Error`)
//log.debug(`Hola Debug`)

app.get('/', (req, res, next) => {
  res.send(`Hola que tal`)
})

app.get('/json', (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Hola como estas`
  })
})

app.get('/db', async (req, res, next ) => {
  try {
    const resultado = await db.query(`SELECT current_timestamp AS hoy;`)
    return res.status(200).json({
      success: true,
      message: `Resultado: ${resultado[0].hoy}`
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal Server Error. Mensaje: ${error.message}`
    })
  }
  
})

app.listen(port, () => {
  log.info(`Escuchando en el puerto ${port}`)
})

process.on('SIGINT', terminate(0, 'SIGINT'))
process.on('SIGTERM', terminate(0, 'SIGTERM'))
process.on('uncaughtException', terminate(1, 'uncaughtException'))
process.on('unhandledRejection', terminate(1, 'unhandledRejection'))

