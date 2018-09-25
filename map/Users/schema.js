import UserTC from './typeComposer';
import { schemaComposer } from 'graphql-compose';

schemaComposer.Query.addFields({
  userById: UserTC.getResolver('findById'),
});

schemaComposer.Mutation.addFields({
  createUserOne: UserTC.getResolver('createOne'),
});

const UserGraphqlSchema = schemaComposer.buildSchema();
export default UserGraphqlSchema;