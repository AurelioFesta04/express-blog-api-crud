const express = require('express');
const postsRouter = require('./routers/posts');
const post = require("./data");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
    res.json("hello")
})

app.get(`/bacheca`, (req, res) => {
    res.json ({
        posts: post,
        length: post.length
    })
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});