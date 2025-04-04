// import User from "../model/userModel.js";


// exports.createUser = async (req, res) => {
//   try {
//     const { name, email, username } = req.body;
//     const photo = req.file ? req.file.path : "";

//     const user = new User({ name, email, username, photo });
//     await user.save();

//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({ message: "User creation failed", error });
//   }
// };

// exports.getUsers = async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// };

// exports.getUserById = async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.json(user);
// };

// exports.updateUser = async (req, res) => {
//   const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updatedUser);
// };

// exports.deleteUser = async (req, res) => {
//   await User.findByIdAndDelete(req.params.id);
//   res.json({ message: "User deleted successfully" });
// };


