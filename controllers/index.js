const router = require("express").Router();
const apiRoutes = require("./apiRoute");

router.use("/api", apiRoutes);

module.exports = router; 