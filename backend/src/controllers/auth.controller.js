import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

export const signup = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.find({ name: "user" });
    newUser.roles = [role.id];
  }

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, // 24 hrs
  });

  res.status(200).json({ token, ok: true });
};
