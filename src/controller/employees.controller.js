import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    // throw new Error('Este es un error') // Esto es para generar un error y ver que sucede al hacer una consulta GET
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json([rows]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal con tu consulta!",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      req.params.id,
    ]); // ? Si quiero ver con mas detalle que hace esta linea ir al documento help.txt.

    if (rows[0] === undefined) {
      res.status(404).json({
        message: "No se encontró el empleado",
      });
    } // ? Este es un error generado para indicarle al usuario que no existe en la base de datos este usuario.

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal con tu consulta!",
    });
  }
};

export const createEmploree = async (req, res) => {
  const { name, salary } = req.body; // De aqui estoy sacando la respuesta que el usuario me esta mandando.

  try {
    const [rows] = await pool.query(
      "INSERT INTO employee(name, salary) VALUES (?, ?)",
      [name, salary]
    ); // ? Aqui lo que estoy haciendo es una insercion en la base de datos para guardar un dato. Si quiero saber que hace la liea que entera ir al documento llamado help.txt y leerlo.

    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal con tu consulta!",
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [
      req.params.id,
    ]); // ? Aqui lo que estoy haciendo es eliminar en la base de datos un empleado. Si quiero saber que hace la liea que entera ir al documento llamado help.txt y leerlo.

    if (rows.affectedRows <= 0) {
      res.status(404).json({
        message: "No se encontró el empleado",
      });
    }

    res.status(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal con tu consulta!",
    });
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    ); // ? Aqui lo que estoy haciendo es eliminar en la base de datos un empleado. Si quiero saber que hace la liea que entera ir al documento llamado help.txt y leerlo.
  
    if (result.affectedRows === 0) {
      res.status(404).json({
        message: "No se encontró el empleado",
      });
    }
  
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);
  
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: 'Algo salio mal con tu consulta!'
    })
  }
};
