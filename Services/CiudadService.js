import Ciudad from "../Models/Ciudad.js";
import CRUD from "../Models/CRUD.js";

class CiudadService {

  static async getCiudades(table) {
    try {
      const objCRUD = new CRUD();
      const ciudades = await objCRUD.getAll(table, "las ciudades");

      if (ciudades.length === 0)
        return {
          error: true,
          code: 404,
          message: "No hay ciudades registradas."
        }
      return {
        error: false,
        code: 200,
        message: "Ciudades obtenidas correctamente.",
        data: ciudades
      }
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener las ciudades."
      }
    }
  }

  static async getCiudadByID(id) {
    try {
      const objCRUD = new CRUD();
      // Llamamos el método consultar por ID
      const ciudad = await objCRUD.getByID("ciudades", id, "la ciudad");
      // Validamos si no hay producto
      if (ciudad.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Ciudad no encontrada",
        };
      }
      // Retornamos el producto obtenido
      return {
        error: false,
        code: 200,
        message: "Ciudad obtenida correctamente",
        data: ciudad,
      };
    } catch (error) {
      // Retornamos un error en caso de excepción
      return {
        error: true,
        code: 500,
        message: "Error al obtener la ciudad",
      };
    }
  }

  static async createCiudad(campos) {
    try {
      // Validamos que el id de la categoría este registrado
      const objCRUD = new CRUD();
      // Consultamos la categoría por ID
      const ciudadCreada = await objCRUD.create("ciudades", campos, "la ciudad");
      // Validamos si no hay categoría
      
      return {
        error: false,
        code: 201,
        message: "Ciudad creada correctamente",
        data: ciudadCreada,
      };
    } catch (error) {
      // Retornamos un error en caso de excepción
      return {
        error: true,
        code: 500,
        message: "Error al crear la ciudad",
      };
    }
  }

  static async updateCiudad(id, campos) {
    try {
      // Creamos la instancia del modelo producto
      const objCRUD = new CRUD();
      // Llamamos el método actualizar
      const ciudadActualizada = await objCRUD.update(id, campos);
      // Validamos si no se pudo actualizar el producto
      if (productoActualizado === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar el producto",
        };
      }
      // Retornamos el producto actualizado
      return {
        error: false,
        code: 200,
        message: "Producto actualizado correctamente",
        data: productoActualizado,
      };
    } catch (error) {
      // Retornamos un error en caso de excepción
      return {
        error: true,
        code: 500,
        message: "Error al actualizar el producto",
      };
    }
  } 

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

export default CiudadService;
