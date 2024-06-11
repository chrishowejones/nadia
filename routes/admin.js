const express = require("express");
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const _debug = require("debug")("nadia:route:admin");
const _ = require("lodash");
const reservations = require("../lib/reservations");

/* GET admin listing. */
router.get("/", function (req, res) {
  reservations.fetch().then((reservations) => {
    res.render("admin", {
      title: "Booking Requests - Nadia's Garden",
      reservations,
      header: _.keys(reservations[0]),
    });
  });
});

module.exports = router;
