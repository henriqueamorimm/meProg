import express, { Request, Response } from "express";

type Route = {
  method: string;
  route: string;
  response: (req: Request, res: Response) => void;
};

export default class WebServer {
  private routes: Route[] = [];

  constructor(private port: number) {}

  public addRoute(route: Route) {
    this.routes.push(route);
  }

  public build() {
    const app = express();

    this.routes.forEach((e: Route) => {
      if (e.method == "POST") {
        app.post(e.route, (req: Request, res: Response) => {
          e.response(req, res);
        });
      } else {
        app.get(e.route, (req: Request, res: Response) => {
          e.response(req, res);
        });
      }
    });

    app.listen(this.port, () => {
      console.log("Servidor rodando em http://localhost:" + this.port);
    });
  }
}
