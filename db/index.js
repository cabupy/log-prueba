const { Client } = require('pg')

const postgres = require('../config').postgres

module.exports = {
  // actualizamos la funcion query con async/await
  query: async (sqlStr) => {
    const client = new Client(postgres)
    let resultado = []
    try {
      await client.connect()
      const result = await client.query(sqlStr)
      switch (result.command) {
        case 'SELECT':
          console.log('SELECT:', result.rowCount)
          resultado = result.rows
          break;
        case 'CREATE':
          console.log('CREATE')
          resultado = result.command
          break;
        case 'INSERT':
        case 'UPDATE':
        case 'DELETE':
          console.log(`${result.command}:`, result.rowCount)
          if (result.rowCount > 0) {
            resultado = result.rows
          } 
          break;
        default:
          resultado = result
      }
      await client.end()
      return resultado
    } catch (error) {
      await Promise.reject(error)
    }  
  }
}