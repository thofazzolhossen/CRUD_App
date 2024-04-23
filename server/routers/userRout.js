import express from "express";
import { create, deleteUser, getAll, getOne, update } from "../controllers/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getOne/:id", getOne);
route.put("/update/:id" ,update);
route.delete("/delete/:id" ,deleteUser);


export default route;