const vehicles = require("../data/vehicles")

const list = (req,res) => {
    res.json(vehicles)
}

const show = (req, res) =>{
    const {id} = req.params

    const foundvehicles = vehicles.find((vehicle) => {
        return vehicles._id === Number(id)
    })
    res.json(foundvehicles)
}

const create = (req, res) => {
    const {body} = req
    // console.log(body.body)

    const vehicle = {
        "_id": vehiclesLength + 1,
        ...body,
        postId: 1
    }
    vehicles.push(vehicle)
    res.json(vehicles)
}

module.exports = {
    list,
    show,
    create,
}