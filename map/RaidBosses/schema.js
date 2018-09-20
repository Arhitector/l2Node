import RaidBossesTC from './grpah';
import { schemaComposer } from 'graphql-compose';

schemaComposer.Query.addFields({
  findById: RaidBossesTC.getResolver('findById'),
});

schemaComposer.Mutation.addFields({
  createOne: RaidBossesTC.getResolver('createOne'),
});

const RaidBossesGraphqlSchema = schemaComposer.buildSchema();
export default RaidBossesGraphqlSchema;