module.exports = app => {
    const statusw = require("../controllers/statusw.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", statusw.create);
  
    // Retrieve all Users
    router.get("/", statusw.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", statusw.findOne);
  
    // Update a User with id
    router.put("/:id", statusw.update);
  
    // Delete a User with id
    router.delete("/:id", statusw.delete);
  
    app.use("/api/statusw", router);
  };
  