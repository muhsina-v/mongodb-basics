// import User from "../model/userModel.js";

// import bcrypt from "bcryptjs";
// import jwb from "jsonwebtoken";
// exports.register = async (req, res) => {
//   try {
//     const { name, email, username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({
//       name,
//       email,
//       username,
//       password: hashedPassword,
//       isAdmin: true, // Only admin can manage users
//     });

//     await user.save();
//     res.status(201).json({ message: "Admin registered successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Registration failed", error });
//   }
// };

// exports.login = async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const user = await User.findOne({ email });
  
//       if (!user) return res.status(400).json({ message: "User not found" });
  
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
//       const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
//       res.json({ token });
//     } catch (error) {
//       res.status(500).json({ message: "Login failed", error });
//     }
//   };
  
