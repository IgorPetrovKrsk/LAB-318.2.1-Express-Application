import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import responseTime from 'response-time';
import morgan from 'morgan';
import home from './routes/home.js';
import author from './routes/author.mjs';

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.use('/images', express.static(path.join(__dirname, '/images')));

//part 2 middleware
app.use(responseTime((req, res,time) => {
    console.log(`Respond time is ${time}`);
}));
app.use(morgan('tiny'));

app.use('/',home);
app.use('/author',author)


app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);    
});