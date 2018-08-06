var db = require("../models");

module.exports = function(app) {
  // Get all meal pairs
  app.get("/api/mealpairs", function(req, res) {
    db.MealPair.findAll({}).then(function(dbMealPair) {
      res.json(dbMealPair);
    });
  });
  
  // Get most recent history
  app.get("/api/history", function(req, res) {
    db.History.findAll({}).then(function(dbHistory) {
      res.json(dbHistory);
    });
  });

  // Create a new history entry
  app.post("/api/history", function(req, res) {
    console.log("!!!!!!!!!! " + req);
    // helper function to extract letters only ??
    db.History.create({
      meal: req.body.meal,
      winePairings: req.body.winePairings
    }).then(function(dbHistory) {
      res.json(dbHistory);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
