import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  mergeSchemas,
} from 'graphql-tools';
import resolvers from './resolvers';

import RaidBossesSchema from './models/RaidBosses/schema';
import UsersSchema from './models/Users/schema';

const RaidBossesSchemaMock = makeExecutableSchema({
  typeDefs: RaidBossesSchema
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