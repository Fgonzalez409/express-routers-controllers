const products = require("../data/products")

//getAll
const list = (req,res) => {
    res.json(products)
}

//getByID
const show = (req, res) =>{
    const {id} = req.params

    const foundproduct = products.find((product) => {
        return product._id === Number(id)
    })
    res.json(foundproduct)
}

const create = (req, res) => {
    const {body} = req
    // console.log(body.body)

    const product = {
        _id: products.length + 1,
        ...body,
        postId: 1
    }
    products.push(product)
    res.json(products)
}

module.exports = {
    list,
    show,
    create,
}