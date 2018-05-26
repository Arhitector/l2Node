import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import mongoose from 'mongoose';

import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import RaidBossesSchema from './models/RaidBosses/schema';
import RaidBossesResolvers from './models/RaidBosses/resolvers';
import RaidBosses from './models/RaidBosses/model';


import schema from './schema';
import resolvers from './resolvers';
import models from './models';


mongoose.connect('mongodb://root:creator666@ds119060.mlab.com:19060/l2db');


const PORT = 8000;

const app = express();

app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema, context: { ...models } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

const server = createServer(app);

server.listen(PORT, () => {
  new SubscriptionServer({
    execute,
    subscribe,
    schema: schema,
  }, {
    server: server,
    path: '/subscriptions',
  });
});

// app.listen(PORT)