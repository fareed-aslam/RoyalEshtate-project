import { prisma } from "../utils/prisma.js";

export const registerHandler = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const loginHandler = async (req, res) => {
  try {
  } catch (error) {}
};

export const logoutHandler = async (req, res) => {
  try {
  } catch (error) {}
};
