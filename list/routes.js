const router = require("express").Router();
const ListController = require("./controller");
router.get("/list", ListController.register);
module.exports = router;
