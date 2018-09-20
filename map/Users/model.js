import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  gameId: Number,
  
});
const User = mongoose.model('Users', UserSchema);

export default User;