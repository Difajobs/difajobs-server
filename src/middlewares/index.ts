import { Express } from "express";
import helmetApp from "./helmet";
// import { googleMiddleware } from "./googleMidleware";
import { xRequestId } from "./xRequestId";

const middleWares = (app: Express)=> {
    helmetApp(app);
    // googleMiddleware(app)
    app.use(xRequestId)
}

export default middleWares