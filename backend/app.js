const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Body Parser (package): Accessing the POST Method
const cors = require('cors');
const dotenv = require('dotenv')

const routes = require('./Routes/index.js');
const app = express();

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(bodyParser.json()); 

app.use('/', routes);

dotenv.config();

const user = process.env.MONGO_USER
const pass = process.env.MONGO_PASS 
const hostname = 'localhost';
const port = 5500;
const atlasUrl = `mongodb+srv://${user}:${pass}@cluster0.mkfhnjk.mongodb.net/videoStreaming?retryWrites=true&w=majority`;



mongoose.connect(atlasUrl,{useNewUrlParser: true, useUnifiedTopology: true})
.then(res => {
    app.listen(port, hostname, () => {
        console.log(`Server is running at ${hostname}: ${port}`);
    })
})
.catch(err => console.log(err));