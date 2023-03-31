import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  college: String,
  phone_number: Number,
  transaction_id: String,
  individual_events: String,
  group_events: String,
  our_college: String,
  id: String,
});

export default mongoose.model("Students", userSchema, "students");
