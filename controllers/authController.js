const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const secret = process.env.JWT_SECRET || 'doaidf234ojfas98';
// console.log("JWT_SECRET: ", process.env.JWT_SECRET);
// console.log("Environment Variables: ", process.env);



const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();

    const payload = { userId: user._id };
    const token = jwt.sign(payload, secret, { expiresIn: "1d" });

    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Login User
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = { userId: user._id };
    const token = jwt.sign(payload, secret, { expiresIn: "1h" });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = { register, login };
