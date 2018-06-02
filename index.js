import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import mongoose from 'mongoose';

import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import config from './config';
import schema from './schema';
import models from './models';

mongoose.connect(config.db);

const app = express();
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema, context: { ...models } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

const server = createServer(app);

server.listen(config.port, () => {
  new SubscriptionServer({
    execute,
    subscribe,
    schema: schema,
  }, {
    server: server,
    path: '/',
  });
});
