require('dotenv').config()
const { Pool} =require('pg')

const pool=new Pool({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:process.env.DB_PASSWORD,
    database:'postgres'
})

async function main() {
    const show= await pool.query('select * from players order by id')
    console.log(show.rows);
    // const update=await pool.query('update players set score=$1 where id=$2 returning*',[888,1])
    // console.log(update.rows)
    // console.log(update.rowCount)
    // console.log(show.rows);
    // const gone=await pool.query('delete from players where id=$1 returning*',[5])
    // console.log(gone.rows[0]);
    
    pool.end()
}
main()