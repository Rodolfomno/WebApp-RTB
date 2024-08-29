import express from 'express';
import errorHandler from './middlewares/errorHandler';

export class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }
  
  private routes(): void {

  }

  private errorHandler(): void {
    this.app.use(errorHandler);

  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`ouvindo a porta ${PORT || 3001}`));
  }
  
}
