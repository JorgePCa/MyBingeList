module.exports = app => {
    const admin = require("../controllers/admin.controller.js");
  
    var router = require("express").Router();

    // Update categories
    router.get("/categories", admin.updateCategories);
  
    // // Create a new Tutorial
    // router.post("/", users.create);
  
    // // Retrieve all Users
    // router.get("/", users.findAll);
  
    // // Retrieve a single User with id
    // router.get("/:id", users.findOne);
  
    // // Update a User with id
    // router.put("/:id", users.update);
  
    // // Delete a User with id
    // router.delete("/:id", users.delete);
  
    app.use("/api/admin", router);
  };
  