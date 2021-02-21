const Perro = require("../models/perro.model.js");

// Create and Save a new Perro
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Perro
  const perro = new Perro({
    nombre: req.body.nombre,
    edad: req.body.edad,
    raza: req.body.raza,
    genero: req.body.genero,
    comportamiento: req.body.comportamiento,
    imagen: req.body.imagen
  });

  // Save Perro in the database
  Perro.create(perro, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Perro."
      });
    else res.send(data);
  });
};

// Retrieve all Perros from the database.
exports.findAll = (req, res) => {
  Perro.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving perros."
      });
    else res.send(data);
  });
};

// Find a single Perro with a perroId
exports.findOne = (req, res) => {
  Perro.findById(req.params.perroId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Perro with id ${req.params.perroId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Perro with id " + req.params.perroId
        });
      }
    } else res.send(data);
  });
};

// Update a Perro identified by the perroId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Perro.updateById(
    req.params.perroId,
    new Perro(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Perro with id ${req.params.perroId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Perro with id " + req.params.perroId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Perro with the specified perroId in the request
exports.delete = (req, res) => {
  Perro.remove(req.params.perroId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Perro with id ${req.params.perroId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Perro with id " + req.params.perroId
        });
      }
    } else res.send({ message: `Perro was deleted successfully!` });
  });
};

// Delete all Perros from the database.
exports.deleteAll = (req, res) => {
  Perro.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all perros."
      });
    else res.send({ message: `All Perros were deleted successfully!` });
  });
};
