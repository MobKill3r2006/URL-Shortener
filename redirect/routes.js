const router = require("express").Router({ mergeParams: true });
const RedirectController = require("./controller");
router.get("/", RedirectController.register);
module.exports = router;
