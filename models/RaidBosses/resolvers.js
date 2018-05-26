import merge from 'lodash/merge';
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

const ADD_BOSS = "ADD_BOSS";
const KILL_BOSS = "KILL_BOSS";

export default {
  Query: {
    allBosses: async (parent, args, { RaidBosses }) => {
      const bosses = await RaidBosses.find();
      const returnData = bosses.map(boss => {
        boss._id = boss._id.toString();
        return boss;
      })
      return returnData;
    },
    getBossById: async (parent, args, { RaidBosses }) => {
      const boss = await RaidBosses.findById(args.id); 
      return boss;
    }
  },
  Mutation: {
    addBoss: async (parent, args, { RaidBosses }) => {
      const newBoss = await new RaidBosses(args).save();
      newBoss._id = newBoss._id.toString();
      pubsub.publish(ADD_BOSS, { newBoss });
      return newBoss;
    },
    updateBoss: async (parent, args, { RaidBosses }) => {
      let boss = await RaidBosses.findById(args.id);
      boss = merge(boss, args);
      await boss.save();
      return boss;
    },
    killBoss: async (parent, { id, date }, { RaidBosses }) => {
      const boss = await RaidBosses.findById(id);
      boss.killed= date;
      await boss.save();
      pubsub.publish(KILL_BOSS, { boss });
      return boss;
    }
  },
  Subscription: {
    addBoss: async () => pubsub.asyncIterator(ADD_BOSS),
    killBoss: async () => pubsub.asyncIterator(KILL_BOSS),
  }
}