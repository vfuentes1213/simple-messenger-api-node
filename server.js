const app = require("./app")

// TODO use env var
const port = 8000
const host = "localhost"

app.listen(port, () => {
    console.log(`app listening at http://${host}:${port}`)
})