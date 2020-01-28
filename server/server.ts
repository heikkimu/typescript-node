
import express from 'express';
import { Application } from 'express';

import { initApi } from './api/index';
import { ApiErrorHandler } from './api/errorHandler';

const app: Application = express()
// parse application/json
app.use(express.json())

initApi(app);
app.use(ApiErrorHandler);

app.listen(8090, () => {
    console.log('Server is running');
})




