module.exports = app => {
    const categories = require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", categories.create);
  
    // // Retrieve all Users
    // router.get("/", users.findAll);
  
    // // Retrieve a single User with id
    // router.get("/:id", users.findOne);
  
    // // Update a User with id
    // router.put("/:id", users.update);
  
    // // Delete a User with id
    // router.delete("/:id", users.delete);
  
    app.use("/api/category", router);
  };
  