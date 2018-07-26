

module.exports=(sequelize,DataTypes)=>{


        let articles = sequelize.define("articles",{
            web_url:DataTypes.STRING,
            pub_date:DataTypes.STRING,
            headline:DataTypes.STRING,
            snippet:DataTypes.STRING,
            byline:DataTypes.STRING
        },{
            timestamps:false
        });

        return articles
}