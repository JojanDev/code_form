import Ciudad from "../Models/Ciudad.js";

class CiudadController {
  static getCiudadByID = async (req, res) => {
    try {
      const { id } = req.params;
      const objCiudad = new Ciudad();
      const ciudad = await objCiudad.getByID(id);
      res.status(200).json(ciudad);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static createCiudad = async (req, res) => {
    try {
      const { nombre } = req.body;
      const objCiudad = new Ciudad();
      const ciudad = await objCiudad.create(nombre);
      res.status(201).json(ciudad);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static updateCiudad = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const objCiudad = new Ciudad();
      const ciudad = await objCiudad.update(id, nombre);
      res.status(201).json(ciudad);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static patchCiudad = async (req, res) => {
    try {
      const { id } = req.params;
      const object = req.body;
      const objCiudad = new Ciudad();

      const ciudad = await objCiudad.patch(id, object);
      res.status(201).json(ciudad);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static deleteCiudad = async (req, res) => {
    try {
      const { id } = req.params;
      const objCiudad = new Ciudad();

      const ciudad = await objCiudad.delete(id);
      res.status(201).json(ciudad);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default CiudadController;
