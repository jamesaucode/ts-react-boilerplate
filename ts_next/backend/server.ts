const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('*', (req : any, res : any) => {
        return handle(req, res);
    })

    server.listen(3000, (err : any)=> {
        if (err) throw err;
        console.log('> Running on localhost:3000');
    })
})
.catch((ex : any) => {
    console.error(ex.stack);
    process.exit(1);
})