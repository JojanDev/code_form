import express from "express";
import CiudadController from "../Controller/CiudadController.js";

const router = express.Router();

// router.get("/", CiudadesController.getAllCategorias);

router.get("/:id", CiudadController.getCiudadByID);

router.post("/", /*validarCategoria,*/ CiudadController.createCiudad);

router.put("/:id", CiudadController.updateCiudad);

router.patch("/:id", CiudadController.patchCiudad);

router.delete("/:id", CiudadController.deleteCiudad);

export default router;
