import { Express } from "express";
import helmetApp from "./helmet";
import { googleMiddleware } from "./googleMidleware";

const middleWares = (app: Express)=> {
    helmetApp(app);
    googleMiddleware(app)
}

export default middleWares