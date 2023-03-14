const express = require('express'); 
const bodyParser = require('body-parser'); 

//uses mongoDb NOT mongoose 
const database = require('./Articles'); 

const cors = require('cors'); 

//Categories 
const micro = require('./micro')

//update url 
const updateURL = require('./update_url')

const findUser = require('./user')

const app = express(); 

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.json()); 


app.get('/articles/', database.getArticles); 

app.get('/micro_articles/', micro.Category); 

app.get('/user/', findUser.getUser); 

app.put('/update_url/', updateURL.updateURL);

 
// start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

