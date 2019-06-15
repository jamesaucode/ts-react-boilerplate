"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = require("./next");
const routes = require("./routes/routes");
const express = require("express");
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const app = express();
app.use('/api', routes.api);
app.use('/', routes.app);
(async () => {
    try {
        await next_1.default.prepare();
        app.listen(port, (err) => {
            if (err)
                throw err;
            console.log('> Running on localhost:3000');
        });
    }
    catch (err) {
        console.error(err.message);
    }
})();
//# sourceMappingURL=server.js.map