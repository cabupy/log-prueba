const db = require('./db')

async function main() {
  try {
    const resultado = await db.query(`SELECT * FROM public.cliente ORDER BY id`)
    console.log(resultado)
    // const insert = await db.query(`INSERT INTO public.cliente (id, nombre, apellido) VALUES (DEFAULT, 'Juan', 'Perez') RETURNING *`)
    // console.log(insert)
    // const update = await db.query(`UPDATE public.cliente SET nombre='Carlos Manuel' WHERE id = 1 RETURNING *`)
    // console.log(update)
    // const deletes = await db.query(`DELETE FROM public.cliente WHERE id = 8 RETURNING *`)
    // console.log(deletes)
  } catch (error) {
    //console.log(error.stack)
    console.log({name: error.name, code: error.code, detail: error.detail, message: error.message})
  }
}

main()

