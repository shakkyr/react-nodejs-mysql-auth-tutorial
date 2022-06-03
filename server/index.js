const express = require('express');
const app = express();


app.use(express.json())

const db = require('./models')


const postRouter = require('./routes/Posts.Routes')

app.use('/posts', postRouter)

db.sequelize.sync().then(()=> {
    app.listen(3001, () => {
        console.log('server runing on port 3001')
    })

})