import mongoose from 'mongoose';

const RaidBossesSchema = new mongoose.Schema({
  name: String,
  gameId: Number,
  description: String,
  guards: String,
  drop: String,
  spoil: String,
  respawnTime: String,
  killed: String,
  race: String,
});
const RaidBosses = mongoose.model('RaidBoss', RaidBossesSchema);

export default RaidBosses;