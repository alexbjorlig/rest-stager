import * as express from 'express';
import * as cors from 'cors';
import { RestStagerRouter } from './routes/routes';

class RestStagerAPI {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.express.use(cors());
    }

    private routes(): void {
        const restStagerRouter = new RestStagerRouter();
        const routes = restStagerRouter.router;
        this.express.use(routes);
    }
}

const port = process.env.PORT || 1337;
const restStagerAPI = new RestStagerAPI().express;


restStagerAPI.listen(port, () => {
    console.log(`Rest-Stager test API is ready! Serving on port ${port}`);
});

export { restStagerAPI, port };
