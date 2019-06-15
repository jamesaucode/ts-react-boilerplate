import nextApp from './next';
import * as routes from './routes/routes';
import * as express from 'express';
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const app = express();

app.use('/api', routes.api);
app.use('/', routes.app);

(async () => {
    try {
        await nextApp.prepare();
        app.listen(port, (err: any) => {
            if (err) throw err;
            console.log('> Running on localhost:3000');
        })
    }
    catch (err) {
        console.error(err.message);
    }
})();