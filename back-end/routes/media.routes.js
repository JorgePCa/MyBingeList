module.exports = app => {
    const medias = require("../controllers/media.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Media
    router.post("/", medias.create);
  
    // // Retrieve all Users
    // router.get("/", users.findAll);
  
    // // Retrieve a single User with id
    // router.get("/:id", users.findOne);
  
    // // Update a User with id
    // router.put("/:id", users.update);
  
    // // Delete a User with id
    // router.delete("/:id", users.delete);
  
    app.use("/api/media", router);
  };
  