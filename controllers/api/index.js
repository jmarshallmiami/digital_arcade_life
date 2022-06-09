const router = require("express").Router();

const userRoutes = require("./user_routes.js");
const gameIdRoutes = require("./game_id_routes.js");

router.use("/users", userRoutes);
router.use("/gameroom", gameIdRoutes);

module.exports = router;
