import mongoose from 'mongoose';
export default mongoose.model('RaidBosses', {
  name: String,
  gameId: Number,
  name: String,
  description: String,
  guards: String,
  drop: String,
  spoil: String,
  respawnTime: String,
  killed: String,
  race: String,
});
