// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер
const { sendAllGames, sendUpdateGame } = require("../controllers/game");
const {
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  findGameById,
  deleteGame
} = require("../middlewares/games");

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete(
  "/games/:id",
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile,
  sendUpdateGame
);
gamesRouter.post(
  "/games",
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  sendUpdateGame
);

module.exports = gamesRouter;
