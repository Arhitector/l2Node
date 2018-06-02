import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  mergeSchemas,
} from 'graphql-tools';
const { transpileSchema } = require('graphql-s2s').graphqls2s
import resolvers from './resolvers';

import RaidBossesSchema from './models/RaidBosses/schema';
import UsersSchema from './models/Users/schema';

const RaidBossesSchemaMock = makeExecutableSchema({
  typeDefs: [transpileSchema(RaidBossesSchema)]
});

const UsersSchemaMock = makeExecutableSchema({
  typeDefs: UsersSchema
});

addMockFunctionsToSchema({ schema: RaidBossesSchemaMock });
addMockFunctionsToSchema({ schema: UsersSchemaMock });

export default mergeSchemas({
  schemas: [
    RaidBossesSchemaMock,
    UsersSchemaMock,
  ],
  resolvers: { ...resolvers }
});