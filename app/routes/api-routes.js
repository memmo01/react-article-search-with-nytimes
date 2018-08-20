let Sequelize = require("sequelize");
let db = require("../models");

module.exports = app => {
  app.get("/api/favoriteList", (req, res) => {
    db.articles.findAll({}).then(results => {
      res.json(results);
    });
  });
  app.post("/api/addNewData", (req, res) => {
    db.articles.create(req.body).then(results => {
      res.json(results);
    });
  });

  app.delete("/api/deleteFavorite/:id?", (req, res) => {
    db.articles.destroy({
      where: {
        id: req.params.id
      }
    });
  });
};
