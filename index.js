const express = require('express')
const app = express()
const port = 5000

app.get('/api/getList', (req, res) => {
    res.json(['a', 'b', 'c'])
})

app.get('/', (req, res) => res.send('Hello Web D002!'))

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`)
})