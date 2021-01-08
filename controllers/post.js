const Post = require("../models/post");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

exports.newPost = (req, res) => {
  const { postTitle, postSubtitle, postBody } = req.body;

  let post = new Post({
    postTitle,
    postSubtitle,
    postBody,
  });

  post.save((err, post) => {
    if (err) {
      console.log("error: " + err);
      return res.status(401).send("error saving post");
    }
    return res.send("post success");
  });
};
