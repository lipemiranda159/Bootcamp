var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.json());

app.get("/health",(req, res) => {
    res.send("Ok");
});

app.post("/account", (req,res) =>{
    
    fs.readFile("accounts.json","utf8",(err, data) => {
        let account = req.body;

        if (!err)
        { 
            let json = JSON.parse(data);
            accounts = { nextId: json.nextId+1, accounts: [...{id: json.nextId, ...account}]};
            fs.writeFile("accounts.json", JSON.stringify(account), err =>{
                console.log(err);
            });

        } else {
            console.log('Error to read file');
        }
    });
    res.sendStatus(200);

    

});


app.listen(3000, function(){
    try {
        fs.readFile("account.json","utf8",(err, data) => {
            if (err)
            {
                const iniAccaunt = {
                    nextId : 1,
                    accounts : []
                }

                fs.writeFile("accounts.json", JSON.stringify(iniAccaunt), err =>{
                    console.log(err);
                });
            }
        });
    }catch (err){
        console.log(err);
    }
    console.log("Started!");
});