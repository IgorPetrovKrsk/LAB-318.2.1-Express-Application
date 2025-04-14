import express from 'express';

import responseTime from 'response-time';
import morgan from 'morgan';
import home from './routes/home.js';
import author from './routes/author.mjs';

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

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