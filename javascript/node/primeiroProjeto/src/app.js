import express from 'express';
import 'dotenv/config';
import selecaoRouter from './selecoes/routes.js';

const app = express();
app.use(express.json());

app.use('/', selecaoRouter)


export default app;
