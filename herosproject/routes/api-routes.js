let Sequelize = require('sequelize');
let db = require('../models')

module.exports=(app)=>{

    app.get('/api/try',(req,res)=>{
        db.heros.findAll({}).then((results)=>{
            res.json(results)
        })
})
}