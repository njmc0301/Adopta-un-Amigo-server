module.exports = app => {
  const perros = require("../controllers/perro.controller.js");

  // Create a new Perro
  app.post("/perros", perros.create);

  // Retrieve all Perros
  app.get("/perros", perros.findAll);

  // Retrieve a single Perro with perroId
  app.get("/perros/:perroId", perros.findOne);

  // Update a Perro with perroId
  app.put("/perros/:perroId", perros.update);

  // Delete a Perro with perroId
  app.delete("/perros/:perroId", perros.delete);

  // Create a new Perro
  app.delete("/perros", perros.deleteAll);
};
