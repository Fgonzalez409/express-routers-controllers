const contacts = require("../data/contacts")

const list = (req,res) => {
    res.json(contacts)
}

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
        "_id": contactsLength + 1,
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