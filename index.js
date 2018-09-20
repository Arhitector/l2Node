import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import mongoose from 'mongoose';
import Context from './context';
import Schema from './schemas';

require('dotenv').config();

mongoose.connect(process.env.DB_URL);

const PORT = 8000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: Schema, context: Context }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)