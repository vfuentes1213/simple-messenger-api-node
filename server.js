const express = require('express')
const app = express()
// TODO use env var
const port = 8000

app.get('/v1/message', (req, res) => {
    res.send({data: [{payload: "msg content"}]})
})

app.post("/v1/message", (req, res) => {
    res.send({ message: "ok", "id": ""});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})