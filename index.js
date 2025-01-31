const express = require('express')
const app = express()
const path = require('path')
const { v4: uuid } = require('uuid')
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuid(),
        user: 'jacob',
        comment: 'Hello i just got a swe job'
    },
    {
        id: uuid(),
        user: 'jordan',
        comment: 'NY is the best city'
    },
    {
        id: uuid(),
        user: 'bryan',
        comment: 'talk to me man'
    }

]

app.delete('/comments/:id',(req,res)=>{
    console.log('deleting')
    comments=comments.filter(c=>c.id!==req.params.id)
    res.redirect('/comments')
})

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})



//get based on comment id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })


})

app.post('/comments', (req, res) => {
    comments.push({ id: uuid(), user: req.body.user, comment: req.body.comment })
    res.redirect('/comments')
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newCommentText = req.body.comment
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText
    console.log('redirecting')
    res.redirect('/comments')
})

app.get('/comments/:id/edit',(req,res)=>{
    const comment = comments.find(c=>c.id===req.params.id)
    res.render('comments/edit',{comment})


})

app.listen(3000, () => {
    console.log('listening on port 3000')
})