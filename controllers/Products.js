const Products = require('../models/Products')

// curl --location -X GET 'localhost:3000/products' 
const index = (req,res)=>{
    const products = Products.all()
    res.render('products/index', { products })
    // res.json(products)
}

const form = (req,res) => {
    res.send('Product.form')
}

// curl --location -X GET 'localhost:3000/products/1'
const show = (req,res) => {
    const product = Products.find(req.params.id)
    res.json(product)
}

// curl -X POST --data "id=2&slug=nike-test&name=Nike Shoe test create" localhost:3000/products
const create = (req,res) => {
    const product = Products.create(req.body)
    res.json(product)
}

// curl -X POST --data "id=1&slug=nike-shoe&name=Nike Shoe updated" localhost:3000/products/1 
const update = (req,res) => {
    const product = Products.update(req.params.id, req.body)
    res.json(product)
}

// curl -X DELETE localhost:3000/products/1  
const remove = (req,res) => {
    const product = Products.remove(req.params.id)
    res.json(product)
}

module.exports = { index, form, show, create, update, remove }