const sendAllGames = async (req, res) => {
  res.send(req.games);
};

const sendUpdateGame = async (req, res) => {
    res.send({
    games: req.games,
    updated: req.game,
  });
};

module.exports = {
  sendAllGames,
  sendUpdateGame,
};
