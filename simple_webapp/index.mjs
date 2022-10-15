import express from "express"
import os from "os"

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    const helloMessage = 'Hello, if you are seeing this, your app is running!'
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(PORT, () => {
    console.log("Web server is listening at port 3000")
})

