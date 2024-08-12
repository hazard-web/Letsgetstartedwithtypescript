import express from 'express';
import bodyParser from 'body-parser';

import todoRoutes from './routes/todo';

const app = express();

app.use(bodyParser.json());
app.use(todoRoutes);

const Port = 8000;
app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});