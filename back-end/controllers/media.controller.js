const db = require("../db/models");
const Media = db.Media;
const Op = db.Sequelize.Op;

const axios = require("axios");

// Create and Save a new Media
exports.create = (req, res) => {
  
  // Create Media object
  const Media = {
    fk_type: 1,
    title: req.body.original_title,
    season_volume: 0,
    // rajouter le reste de la table media avec le lien :
    // https://api.themoviedb.org/3/movie/2?api_key=ab7fa3f792c17d4471d45e57473b8d62&language=fr-FR
    // penser a changer la langue vers fr-FR et le title
    year: req.body.release_date,
    score: parseFloat(req.body.vote_average),

  };

  // Save Media in the database
  Media.create(Media)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Media."
      });
    });
};

// Retrieve all Medias from the database.
exports.findAll = (req, res) => {
  const search = req.query.search;
  var condition = search ? { search: { [Op.iLike]: `%${search}%` } } : null;

  Media.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving media."
      });
    });
};

// Find a single Media with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Media.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Media with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Media with id=" + id
      });
    });
};

exports.findTMDB = (req, res) => {
  const search = req.params.search;

  try{
    const response = await axios.get('',{
      params: {
        api_key: 'ab7fa3f792c17d4471d45e57473b8d62',
        language: 'fr-FR',
        
      }
    }
   )
  }

}



// Delete Media with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Media.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Media was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Media with id=${id}. Maybe Media was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Media with id=" + id
      });
    });
};