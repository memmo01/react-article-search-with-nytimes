const express= require("express");
const bodyParser=require("body-parser")
const db = require("./app/models")
const app= express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

require("./app/routes/api-routes")(app)


const Port=5000;


db.sequelize.sync().then(()=>{
    app.listen(Port,()=>console.log(`server is running on ${Port}`))
})

