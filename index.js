const express = require('express')
const { getLogger, logHandler } = require('./utils/logger')
const { terminate } = require('./utils/terminate')

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

app.listen(port, () => {
  log.info(`Escuchando en el puerto ${port}`)
})

process.on('SIGINT', terminate(0, 'SIGINT'))
process.on('SIGTERM', terminate(0, 'SIGTERM'))
process.on('uncaughtException', terminate(1, 'uncaughtException'))
process.on('unhandledRejection', terminate(1, 'unhandledRejection'))

