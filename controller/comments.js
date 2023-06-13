const comments = require("../data/comments")

//getAll
const list = (req,res) => {
    res.json(comments)
}

//getByID
const show = (req, res) =>{
    const {id} = req.params

    const foundComment = comments.find((comment) => {
        return comment._id === Number(id)
    })
    res.json(foundComment)
}

const create = (req, res) => {
    const {body} = req
    // console.log(body.body)

    const comment = {
        _id: comments.length + 1,
        ...body,
        postId: 1
    }
    comments.push(comment)
    res.json(comments)
}

module.exports = {
    list,
    show,
    create,
}