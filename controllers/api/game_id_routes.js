const router = require("express").Router();
const { User, GameId } = require("../../models");

//create gameroomName
router.post("/", ({ body, session }, res) => {
  GameId.create(body).then((dbGameData) => {
    session.save(() => {
      session.gameroomName = dbGameData.gameroomName;
      // session.player1_turn = dbGameData.player1_turn;
      res.json(dbGameData);
    });
    // GameId.id = User.id;
    GameId.gameroomName = dbGameData.gameroomName;
    if (Math.round(Math.random()) === 0) {
      GameId.player1_turn = false;
    }
  });
  GameId.id = User.id;
});

module.exports = router;
