import User from './model';
import { composeWithMongoose } from 'graphql-compose-mongoose';

const customizationOptions = {};
const UserTC = composeWithMongoose(User, customizationOptions);
export default UserTC;