import * as express from 'express';
import { parse } from 'url';
import nextApp from '../../next';

const router = express.Router();
const handler = nextApp.getRequestHandler();

router.get('/*', (req, res) => {
    const { pathname, query } = parse(req.url, true);
    handler(req, res, parse(req.url, true));
})

export default router;