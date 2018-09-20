import RaidBossesGraphqlSchema from './map/RaidBosses/schema';
import UsersGraphqlSchema from './map/Users/schema';
import { mergeSchemas } from 'graphql-tools';

export default mergeSchemas({
  schemas: [
    RaidBossesGraphqlSchema,
    UsersGraphqlSchema,
  ],
});