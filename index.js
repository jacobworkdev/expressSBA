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
    res.render('comments/index')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})