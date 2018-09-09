import { Router } from 'express';
import {requestLeaderBoardsRoute } from './requestLeaderBoards';
import { requestGameSession } from './requestGameSession';
import { informMapFinishedRoute } from './informMapFinished';

export function getApi() {
  const router = Router();
  router.use(requestGameSession());
  router.use(informMapFinishedRoute());
  router.use(requestLeaderBoardsRoute());
  return router;
}
