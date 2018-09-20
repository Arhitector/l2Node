import UserTC from './grpah';
import { schemaComposer } from 'graphql-compose';

schemaComposer.Query.addFields({
  findUserById: UserTC.getResolver('findById'),
});

schemaComposer.Mutation.addFields({
  createUserOne: UserTC.getResolver('createOne'),
});

const UserGraphqlSchema = schemaComposer.buildSchema();
export default UserGraphqlSchema;