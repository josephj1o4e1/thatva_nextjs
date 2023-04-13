export const config = {
    runtime: 'edge',
    regions: 'cle1', // only execute this function on sfo1
}

const {Pool} = require('pg') // or const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'applieddistsys-projectdb.cazkhelqqoe0.us-east-2.rds.amazonaws.com',
  database: 'postgres',
  password: 'nextjsvercelswany',
  port: 5433,
});

// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: process.env.PGSQL_USER,
//   host: process.env.PGSQL_HOST,
//   database: process.env.PGSQL_DATABASE,
//   password: process.env.PGSQL_PASSWORD,
//   port: process.env.PGSQL_PORT,
// });


export default async function handler(req, res) {
    const db = await pool.connect()
    try {        
        const result = await db.query('SELECT * FROM customer_small'); // result.rows: Array of JSON, each row is a JSON object
        
        const results = await JSON.stringify(result); // result: js object, results: string (json format)
        console.log("results: ");
        console.log(results);
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        // res.send(JSON.stringify(result)); // res.send(results); // res.send('pages/index', results); // res.render('pages/index', results );
        res.end(results);
        db.release();
    } catch (error) {
        console.log( error );
    }
};
