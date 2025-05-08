import express from "express";
import UsuarioController from "../Controller/UsuarioController.js";

const router = express.Router();

// router.get("/", CiudadesController.getAllCategorias);

// router.get("/:id", LenguajeController.getLenguajeByID);

router.post("/", /*validarCategoria,*/ UsuarioController.createUsuario);

// router.put("/:id", LenguajeController.updateLenguaje);

// router.patch("/:id", LenguajeController.patchLenguaje);

// router.delete("/:id", LenguajeController.deleteLenguaje);

export default router;
