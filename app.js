const app = require('express')()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
require('dotenv').config()
require('./config/db')
require('./routes/routes')(app)

const port = 4000
app.listen(port,() =>
{
    console.log(`the server is running on port : ${port}`);
});