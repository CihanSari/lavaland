import { Router } from 'express';
import { getApi } from './api';

export function getRouter() {
    const router = Router();
    router.use('/api', getApi());
    return router;
  }