const express = require("express");
const app = express();

app.use(express.static("public"))
app.use(express.json())

const commentsRouter = require("./routes/comments")
const contactsRouter = require("./routes/contacts")
const vehiclesRouter = require("./routes/vehicles")
const productsRouter = require("./routes/products")


const port = process.env.PORT || 4001;


app.use("/", commentsRouter)
app.use("/", contactsRouter)
app.use("/", vehiclesRouter)
app.use("/", productsRouter)

//update comment

//delete Comment

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
