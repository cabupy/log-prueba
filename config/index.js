// Si no estamos en un ambiente de produccion no leemos el archivo .env
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Si no recibe las variables de entorno, las completa con los datos por defecto
module.exports = {
  postgres: {
    database: process.env.PG_DB || "test",
    host: process.env.PG_HOST || "localhost",
    port: process.env.PG_PORT || "5432",
    user: process.env.PG_USER || "postgres",
    password: process.env.PG_PASS || "postgres",
  },
};
