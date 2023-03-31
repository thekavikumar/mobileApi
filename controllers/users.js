import User from "../models/Students.js";

export const getUser = async (req, res) => {
  const { user_id } = req.body;
  try {
    const user = await User.findOne({
      id: user_id,
    });
    console.log(user);
    if (user) {
      res.status(200).json({
        message: "User found",
        status: true,
        user,
      });
    } else {
      res.status(404).json({
        message: "User not found",
        status: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      status: false,
      error: error,
    });
  }
};

export const getUserByMail = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({
      email: email,
    });
    if (user) {
      res.status(200).json({
        message: "User found",
        status: true,
        user,
      });
    } else {
      res.status(404).json({
        message: "User not found",
        status: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      status: false,
      error: error,
    });
  }
};
