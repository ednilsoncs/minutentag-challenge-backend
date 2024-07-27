import 'express-async-errors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes'
import AppError from '../src/shared/errors/AppError';
const path = require('path')

const app = express();
app.use('/file', express.static(path.join(__dirname, 'assets')))
app.use('/api', routes)
app.use(express.json());
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});
app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});
