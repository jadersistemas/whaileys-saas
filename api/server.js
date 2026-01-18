
import express from "express";
import routes from "./src/routes.js";
const app = express();
const port = process.env.PORT||3000;
app.use(express.json());
app.get("/", (_,res)=>res.json({ok:true}));
app.use("/api", routes);
app.listen(port, ()=>console.log("API online"));
