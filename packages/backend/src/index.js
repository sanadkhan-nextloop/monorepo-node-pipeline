const express = require('express')
const routes = require('./api/routes/index')

const app = express()

const port = 3000

app.use(express.json())
app.use(routes)


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
