module.exports = app => {
    const medias = require("../controllers/media.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Media
    router.post("/", medias.create);
  
    // Retrieve all Media
    router.get("/", medias.findAll);
  
    // Retrieve a single Media with id
    router.get("/:id", medias.findOne);

    // Retrieve a single Media with key word
    // this will search the tmdb for movies 
    // and add the top results to our database
    router.get("/:search", medias.findTMBD);
  
    // // Update a User with id
    // router.put("/:id", users.update);
  
    // // Delete a User with id
    // router.delete("/:id", users.delete);
  
    app.use("/api/media", router);
  };
  