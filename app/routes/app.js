var express = require("express"),
  path = require("path"),
  router = express.Router(),
  ctrlDir = "/app/app/controllers",
  carsCtrl = require(path.join(ctrlDir, "cars")),
  rentsCtrl = require(path.join(ctrlDir, "rents")),
  clientsCtrl = require(path.join(ctrlDir, "clients"));


//router.route("/chat/:id");
//router.route("/rent/new");
//router.route("/rent/list");


module.exports = router;
