const router = require("express").Router();
const CreateController = require("./createController");
const RemoveController = require("./removeController");
router.post("/create", CreateController.register);
router.post("/remove", RemoveController.register);
module.exports = router;
