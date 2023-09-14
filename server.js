const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
app.use(express.json());
app.use(bodyParser.json());
const port = process.env.PORT || 3000;


app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => { console.log(`Database is listening and node is running on port ${port}`) });
    }
});

