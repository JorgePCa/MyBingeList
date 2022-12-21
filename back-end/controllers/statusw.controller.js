const db = require("../db/models");
const StatusW = db.StatusW;
const Op = db.Sequelize.Op;



// Need admin rights to access this controller

// Create and Save a new StatusW
exports.create = (req, res) => {
  // Validate request
  if (!req.body.definition) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // pour faire passer la date de naissance dans l'objet,
  // il faudra que ce soit dans le format: 'YYYY-MM-DD'

  // Create StatusW
  const StatusW = {
    definition: req.body.definition,
    description: req.body.description,
  };

  // Save StatusW in the database
  StatusW.create(StatusW)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the StatusW."
      });
    });
};

// Retrieve all StatusWs from the database.
exports.findAll = (req, res) => {
  const definition = req.query.definition;
  var condition = definition ? { definition: { [Op.iLike]: `%${definition}%` } } : null;

  StatusW.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving statusW."
      });
    });
};

// Find a single StatusW with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  StatusW.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find StatusW with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving StatusW with id=" + id
      });
    });
};

// Update StatusW by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  StatusW.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "StatusW was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update StatusW with id=${id}. Maybe the StatusW was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating StatusW with id=" + id
      });
    });
};

// Delete StatusW with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  StatusW.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "StatusW was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete StatusW with id=${id}. Maybe StatusW was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete StatusW with id=" + id
      });
    });
};


