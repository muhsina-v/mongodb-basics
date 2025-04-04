// import mongoose from "mongoose";



// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   isAdmin: { type: Boolean, default: false },
// });

// const User = mongoose.model("User", userSchema);
// export default User;
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  name:String,
  age:Number,
})

const user=mongoose.model('user',userSchema)

export default user;