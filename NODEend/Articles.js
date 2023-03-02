const MongoClient = require('mongodb').MongoClient; 


const url = 'mongodb+srv://root:gOoQLTn43vC8EZgq@cluster0.xfxutas.mongodb.net/?retryWrites=true&w=majority'



const getArticles = async(req, res, next) => {

    const client = new MongoClient(url); 
    let articles; 

    try{
        await client.connect(); 
        const db = client.db('SupplyChain'); 
        articles = await db.collection('main').find().toArray(); 

    } catch (error){
        return res.json({message: 'Could not retrieve articles. '}); 
    };

    client.close(); 


    res.json(articles); 



}; 


exports.getArticles = getArticles 