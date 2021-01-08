const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  postTitle: {
    type: String,
    required: true,
  },
  postSubtitle: {
    type: String,
    required: true,
  },
  postBody: {
    type: String,
    required: true,
  },
  postedOn: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Post", postSchema);
