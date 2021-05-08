import { Router } from "express";
import {
    HostMessageReasons,
    LeaderboardResponse,
    LeaderboardRequest
} from "../../../lavalandcommon";
import { getLavalandDatabase } from "../../db";

export function requestLeaderBoardsRoute() {
    const route = Router();

    route.get("/leaderboard", async (req, res) => {
        const message: LeaderboardRequest = req.body;
        const leaderboard = await getLavalandDatabase().getGames(message.finishMethod);
        const messageResponse: LeaderboardResponse = {
            messageType: HostMessageReasons.LeaderboardResponse,
            finishMethod: message.finishMethod,
            leaderboard,
            duration: 0 //remove later
        };
        res.status(200).send(messageResponse);
    });
    return route;
}