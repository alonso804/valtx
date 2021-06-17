import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import config from "../config";

export const signup = async (req, res) => {
  //console.log(req.body);
  const { name, lastName, username, email, password, roles } = req.body;

  const newUser = new User({
    name,
    lastName,
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    //console.log(role);
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();
  //console.log(savedUser);

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, // 24 hrs
  });

  return res
    .status(200)
    .json({ token, ok: true, message: "Cliente creado correctamente" });
};

export const signin = async (req, res) => {
  const { username, password } = req.body;

  const userFound = await User.findOne({ username }).populate("roles");

  if (!userFound) {
    return res
      .status(400)
      .json({ ok: false, message: "Usuario no encontrado" });
  }

  const matchPassword = await User.comparePassword(
    password,
    userFound.password
  );

  if (!matchPassword) {
    return res
      .status(401)
      .json({ ok: false, message: "Contraseña incorrecta" });
  }

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });

  console.log(userFound);

  return res
    .status(200)
    .json({ token, ok: true, message: "Usuario encontrado" });
};
