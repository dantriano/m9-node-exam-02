var express = require("express"),
  path = require("path"),
  router = express.Router(),
  ctrlDir = "/app/app/controllers",
  carsCtrl = require(path.join(ctrlDir, "cars")),
  rentsCtrl = require(path.join(ctrlDir, "rents")),
  clientsCtrl = require(path.join(ctrlDir, "clients"));

router.get("/chat/:id", async (req, res, next) => {
  res.render("chat.pug");
});

router.route("/rent/new").get([
  (req, res, next) => {
    res.render("form", {
      cars: req.cars ? req.cars : [],
      clients: req.clients ? req.clients : [],
    });
  },
]);
module.exports = router;
