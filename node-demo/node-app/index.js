const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = require('./config/keys').mogoUrl
mongoose.connect(db, { useUnifiedTopology: true }).then(() => {
    console.log('mongo promise is rejected')
}).catch(() => {
    console.log('error!')
})

app.get("/", (req, res) => {
    res.send('Hello World!')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Serve listening on port ${port}`)
})