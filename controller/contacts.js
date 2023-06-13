const contacts = require("../data/contacts")

//getAll
const list = (req,res) => {
    res.json(contacts)
}

//getByID
const show = (req, res) =>{
    const {id} = req.params

    const foundComment = contacts.find((comment) => {
        return comment._id === Number(id)
    })
    res.json(foundComment)
}

const create = (req, res) => {
    const {body} = req
    // console.log(body.body)

    const comment = {
        _id: contacts.length + 1,
        ...body,
        postId: 1
    }
    contacts.push(comment)
    res.json(contacts)
}

module.exports = {
    list,
    show,
    create,
}