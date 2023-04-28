import prisma from "../../lib/prisma";

export const config = {
    runtime: 'experimental-edge',
    // regions: 'cle1',
};

// export default async function handler(req, res) {
//     const { name, email } = req.query;
    
//     try {
//         const newUer = await prisma.User.create({
//             data: {
//                 name,
//                 email,
//             },
//         });
        
//         res.json({ user: newUer, error: null });
//     } catch (error) {
//         res.json({ error: error.message, user: null });
//     }
// }

export default async function handler(req, res) {
    try {        
        const result = await prisma.$queryRaw`SELECT * FROM customer_small`;
        const results = await JSON.stringify(result); // result: js object, results: string (json format)
        console.log("results: ");
        console.log(results);
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        // res.send(JSON.stringify(result)); // res.send(results); // res.send('pages/index', results); // res.render('pages/index', results );
        res.end(results);
    } catch (error) {
        console.log( error );
    }
};





