import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';

import typeDefs from './schema';
import resolvers from './resolvers';

import RaidBosses from './models/RaidBosses';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


mongoose.connect('mongodb://root:creator666@ds119060.mlab.com:19060/l2db');


const PORT = 8000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { RaidBosses } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)