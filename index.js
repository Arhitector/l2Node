import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { ApolloServer, gql } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import RaidBossesGraphqlSchema from './map/RaidBosses/resolvers';
import RaidBosses from './map/RaidBosses/model';

mongoose.connect('mongodb://root:creator666@ds119060.mlab.com:19060/l2db');

const PORT = 8000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: RaidBossesGraphqlSchema, context: { RaidBosses } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)