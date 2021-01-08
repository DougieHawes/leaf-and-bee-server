const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.userRoot = (req, res) => {
  res.send({ msg: "user route" });
};

exports.userRegister = async (req, res) => {
  const { username, password } = req.body;

  let user = new User({
    username,
    password,
  });

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(password, salt);

  user.save((err, user) => {
    if (err) {
      console.log("error: " + err);
      return res.status(401).send("error saving user");
    }
    return res.send("signup success");
  });
};

exports.userLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send("user doesn't exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.send("something went wrong");
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    return res.send("something went wrong");
  }
};
