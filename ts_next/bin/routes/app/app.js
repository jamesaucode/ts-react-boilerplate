"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const url_1 = require("url");
const next_1 = require("../../next");
const router = express.Router();
const handler = next_1.default.getRequestHandler();
router.get('/*', (req, res) => {
    const { pathname, query } = url_1.parse(req.url, true);
    handler(req, res, url_1.parse(req.url, true));
});
exports.default = router;
//# sourceMappingURL=app.js.map