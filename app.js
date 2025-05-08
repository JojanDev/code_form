import express from "express";
import bodyParser from "body-parser";
import routeCiudad from "./Routes/routeCiudad.js";
import routeGenero from "./Routes/routeGenero.js";
import routeLenguaje from "./Routes/routeLenguaje.js";
import routeUsuario from "./Routes/routeUsuario.js";

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use("/ciudad", routeCiudad);
app.use("/genero", routeGenero);
app.use("/lenguaje", routeLenguaje);
app.use("/usuario", routeUsuario);
// app.use("/productos", routeProductos);

app.listen(3000, () => {
  console.log("SERVER is running");
});
