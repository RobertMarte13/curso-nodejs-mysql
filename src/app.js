import express from "express";
import morgan from "morgan";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
 
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.set("nameApp", "Curso res API");

app.use("/api", indexRoutes);
app.use("/api", employeesRoutes);

// Este solo se ejecutara cuando no se encuentren las rutas de arriba
app.use((req, res, next) => {
  res.status(404).send({
    message: "Route not found",
  });
});

export default app