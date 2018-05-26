import { makeExecutableSchema } from 'graphql-tools';

import RaidBossesResolvers from './models/RaidBosses/resolvers';
import UsersResolvers from './models/Users/resolvers';

import { merge } from 'lodash';

const resolvers = merge(RaidBossesResolvers, UsersResolvers);

export default resolvers;