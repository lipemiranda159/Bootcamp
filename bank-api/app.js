var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.json());

app.get("/health",(req, res) => {
    res.send("Ok");
});

app.post("/account", (req,res) =>{

    fs.readFile("account.json","utf8",(err, data) => {
        console.log(err);
        if (!err)
        {
            data = JSON.parse(data);
            data.accounts.push(req.body);
        }
    });

    res.sendStatus(200);

    

});


app.listen(3000, function(){
    console.log("Started!");
});