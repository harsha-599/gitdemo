const mongoose = require('mongoose')
const dbURL = process.env.dbURL
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,                             //////should install npm install mongoose in terminal
    //useCreateIndex: true                                  //////     ''         npm install dotenv     ''
});
mongoose.connection.on('connected',() => {
console.log('mongoose connected');
});

mongoose.connection.on('disconnected',() => {
console.log('mongoose Disconnected');
});

mongoose.connection.on('error',(err) => {
console.log(`Error while connecting ${err}`);
});