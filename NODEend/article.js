const { ObjectId } = require('mongodb');

const MongoClient = require('mongodb').MongoClient; 


const url = 'mongodb+srv://root:gOoQLTn43vC8EZgq@cluster0.xfxutas.mongodb.net/?retryWrites=true&w=majority'



const getArticle = async(req, res, next) => {

    const client = new MongoClient(url); 
    let article; 

    try{
        await client.connect(); 
        const db = client.db('SupplyChain'); 
        article = await db.collection('main').findOne({ _id: new ObjectId(req.params.id)}); 

    } catch (error){
        return res.json({message: 'Could not retrieve articles. '}); 
    };

    client.close(); 


    res.json(article); 



}; 


exports.getArticle = getArticle