import * as me from "./src/functions";
const server = new me.server(2308);
import { Request, Response } from "express";
me.compararNumber(90, 999);
server.addRoute({
  method: "GET",
  route: "/",
  response: (req: Request, res: Response) => {
    res.send("Olá mundo!");
  },
});
server.build();
