const express = require('express')

const port = 3000
const app = express()
//just serve the public folder.
app.use(express.static("public"))

app.listen(port, () => {
    console.log("starting application at port "+port)
})
