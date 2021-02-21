const sql = require("./db.js");

// constructor
const Perro = function(perro) {
  this.nombre = perro.nombre;
  this.edad = perro.edad;
  this.raza = perro.raza;
  this.genero = perro.genero;
  this.comportamiento = perro.comportamiento;
  this.imagen = perro.imagen;
};

Perro.create = (newPerro, result) => {
  sql.query("INSERT INTO perros SET ?", newPerro, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created perro: ", { id: res.insertId, ...newPerro });
    result(null, { id: res.insertId, ...newPerro });
  });
};

Perro.findById = (perroId, result) => {
  sql.query(`SELECT * FROM perros WHERE id = ${perroId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found perro: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Perro with the id
    result({ kind: "not_found" }, null);
  });
};

Perro.getAll = result => {
  sql.query("SELECT * FROM perros", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("perros: ", res);
    result(null, res);
  });
};

Perro.updateById = (id, perro, result) => {
  sql.query(
    "UPDATE perros SET email = ?, name = ?, active = ? WHERE id = ?",
    [perro.email, perro.name, perro.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Perro with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated perro: ", { id: id, ...perro });
      result(null, { id: id, ...perro });
    }
  );
};

Perro.remove = (id, result) => {
  sql.query("DELETE FROM perros WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Perro with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted perro with id: ", id);
    result(null, res);
  });
};

Perro.removeAll = result => {
  sql.query("DELETE FROM perros", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} perros`);
    result(null, res);
  });
};

module.exports = Perro;
