const express = require('express'); 
const bodyParser = require('body-parser'); 
const database = require('./Articles'); 
const data = require('./article');
const cors = require('cors'); 

const placesRoutes = require('./routes/places');

const app = express(); 

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.json()); 




app.get('/articles/', database.getArticles); 

app.get('/articles/:id', data.getArticle); 



app.listen(5001); 