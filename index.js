const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('Home Page')
})

// GET /products/all HTTP/1.1
app.get('/products/all', (req,res)=>{
    const page = req.query.page || 2;
    const sort = req.query.sort || 'price';
    const order = req.query.order || 'desc';
    const responseString = `GET Products: page=${page}, sort=${sort}, order=${order}`;
    res.send(responseString);
})

// GET /products/8719-small-red HTTP/1.1
app.get('/products/:productId-:productName', (req,res)=>{
    res.send(
        'GET Product name: ' + req.params.productName+
        ' GET Product id: '+req.params.productId,
    )
})
// GET /products/8719 HTTP/1.1
app.get('/products/:productId',(req,res)=>{
    res.send('GET product  ID: '+req.params.productId)
})

app.listen(3000)