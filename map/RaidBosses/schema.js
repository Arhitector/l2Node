import RaidBossesTC from './typeComposer';
import { schemaComposer } from 'graphql-compose';

schemaComposer.Query.addFields({
  bossById: RaidBossesTC.getResolver('findById'),
  bossesByIds: RaidBossesTC.getResolver('findByIds'),
  bossOne: RaidBossesTC.getResolver('findOne'),
  bossesMany: RaidBossesTC.getResolver('findMany'),
  bossesCount: RaidBossesTC.getResolver('count'),
  bossConnection: RaidBossesTC.getResolver('connection'),
  bossPagination: RaidBossesTC.getResolver('pagination'),
});

schemaComposer.Mutation.addFields({
  createOne: RaidBossesTC.getResolver('createOne'),
});

const RaidBossesGraphqlSchema = schemaComposer.buildSchema();
export default RaidBossesGraphqlSchema;