const express = require("express");
const app = express();
const port = 3000;

// Importing the data from our fake database files.
const users = require("./data/users");
const posts = require("./data/posts");

app.get("/", (req, res) => {
    res.send("Work in progress!");
});

app.get('/api/users', (req, res) => {
    res.json(users)
})
app.get('/api/users/:id', (req, res, next) => {
    const user = users.find((u) => u.id == req.params.id);
    if (user) res.json(user);
    else next()
})




app.get('/api/posts', (req, res) => {
    res.json(posts)
})
app.get('/api/posts/:id', (req, res) => {
    const post = posts.find((p) => p.id == req.params.id);
    if (post) res.json(post);
})


app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found" });
});



app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});
