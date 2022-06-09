const router = require("express").Router();

router.get("/", (req, res) => {
  console.log(req.session);
  try {
    res.render("login", {
      style: "index.css",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/dashboard/:username", (req, res) => {
  res.render("dashboard");
});

router.get("/tic-tac-toe", (req, res) => {
  res.render("games");
});

module.exports = router;
