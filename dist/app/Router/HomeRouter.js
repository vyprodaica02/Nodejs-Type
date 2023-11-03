"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (router) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const homeControlller = require('../../../dist/app/Controller/HomeController');
    router.get('/', homeControlller.home);
};
