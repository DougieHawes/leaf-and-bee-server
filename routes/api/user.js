const router = require("express").Router();

const { userRoot, userRegister, userLogin } = require("../../controllers/user");

router.get("/", userRoot);
router.post("/", userRegister);
router.post("/login", userLogin);

module.exports = router;
