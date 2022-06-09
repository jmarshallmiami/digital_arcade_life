const User = require("./User");
const GameId = require("./GameId");

User.hasMany(GameId, {
  foreignKey: "id",
});

GameId.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, GameId };
