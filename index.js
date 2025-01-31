const express = require('express')
const app = express()
const path = require('path')
const {v4:uuid}=require('uuid')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {   id:uuid(),
        user: 'jacob',
        comment: 'Hello i just got a swe job'
    },
    {   
        id:uuid(),
        user: 'jordan',
        comment: 'NY is the best city'
    },
    {
        id:uuid(),
        user: 'bryan',
        comment: 'talk to me man'
    }

]
app.get('/comments', (req, res) => {
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

app.post('/comments',(req,res)=>{
    comments.push({id:uuid(),user:req.body.user,comment:req.body.comment})
    res.redirect('/comments')
})

//get based on comment id
app.get('/comments/:id',(req,res)=>{
    const id = req.params.id
    const comment = comments.find(c=>c.id===id)
    res.render('comments/show',{comment})


})
app.listen(3000, () => {
    console.log('listening on port 3000')
})