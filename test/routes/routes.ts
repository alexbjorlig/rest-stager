import { Router } from 'express';

import { singleResponse } from '../endpoints/';

export class RestStagerRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public init() {
        // no pagination
        this.router.get('/singleResponse', singleResponse);
    }
}
