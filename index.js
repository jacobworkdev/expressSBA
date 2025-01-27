const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        user: 'jacob',
        comment: 'Hello i just got a swe job'
    },
    {
        user: 'jordan',
        comment: 'NY is the best city'
    },
    {
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
    console.log(req.body)
    res.send('post sent comment')
    comments.push({user:req.body.user,comment:req.body.comment})
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})