

module.exports=(sequelize,DataTypes)=>{


        let Hero = sequelize.define("heros",{
            name:DataTypes.STRING,
            ability:DataTypes.STRING
        },{
            timestamps:false
        });

        return Hero
}