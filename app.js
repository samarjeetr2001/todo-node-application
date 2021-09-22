const express = require('express');
const path = require('path');

const taskRouter = require('./routes/task');
const errorRouter = require('./routes/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(taskRouter);
app.use(errorRouter);

app.listen(3000);