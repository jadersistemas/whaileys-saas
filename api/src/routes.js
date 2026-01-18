
import { Router } from "express";
const r = Router();
r.get("/health", (_,res)=>res.json({ok:true}));
export default r;
