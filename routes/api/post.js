const router = require("express").Router();

const { getPosts, newPost } = require("../../controllers/post");

router.get("/", getPosts);
router.post("/", newPost);

module.exports = router;
