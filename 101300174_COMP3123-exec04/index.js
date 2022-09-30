const express = require('express');

const server_port = 8088
const app = express();

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS")
})
app.get("/user", (req, res) => {
    let firstname=req.query.first_name;
    let lastname=req.query.last_name;
    var user = {
        firstname:firstname,
        lastname:lastname 
    }
    res.send(JSON.stringify(user))

})

app.get("/user/:fnm/:lnm", (req, res) => {
    const s = req.params
    var first_name = s.fnm
    var last_name = s.lnm
    const newS={
        first_name,
        last_name,
    }
    res.json(newS)
})
app.listen(server_port,()=> {
    console.log(`Server started at http://localhost:${server_port}`)
})
