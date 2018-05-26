import mongoose from 'mongoose';
export default mongoose.model('Users', {
  name: String,
  mail: String,
  status: String,
  nick: String,
  gameStatus: String,
});
