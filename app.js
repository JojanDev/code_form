import express from "express";
import bodyParser from "body-parser";
import routeCiudad from "./Routes/routeCiudad.js";
const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use("/ciudad", routeCiudad);
// app.use("/productos", routeProductos);

app.listen(3000, () => {
  console.log("SERVER is running");
});
