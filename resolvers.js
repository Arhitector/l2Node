import merge from 'lodash/merge';
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
      console.log(boss, date);
      await boss.save();
      return boss;
    }
  },
}