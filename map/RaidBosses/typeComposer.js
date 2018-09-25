import RaidBosses from './model';
import { composeWithMongoose } from 'graphql-compose-mongoose';

const customizationOptions = {};
const RaidBossesTC = composeWithMongoose(RaidBosses, customizationOptions);
export default RaidBossesTC;