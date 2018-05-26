import merge from 'lodash/merge';
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

export default {
  Query: {
    allUsers: async (parent, args, { Users }) => {
      const users = await Users.find();
      const returnData = users.map(user => {
        user._id = user._id.toString();
        return user;
      })
      return returnData;
    },
    getUserById: async (parent, args, { Users }) => {
      const user = await Users.findById(args.id); 
      return user;
    }
  },
  Mutation: {
    addUser: async (parent, args, { Users }) => {
      const newUser = await new Users(args).save();
      newUser._id = newUser._id.toString();
      pubsub.publish(ADD_USER, { newUser });
      return newUser;
    },
    updateUser: async (parent, args, { Users }) => {
      let user = await Users.findById(args.id);
      user = merge(user, args);
      await user.save();
      return user;
    },
    removeUser: async (parent, { id, date }, { Users }) => {
      const user = await Users.findById(id);
      user.killed= date;
      await user.save();
      pubsub.publish(REMOVE_USER, { user });
      return user;
    }
  },
  Subscription: {
    addUser: async () => pubsub.asyncIterator(ADD_USER),
    removeUser: async () => pubsub.asyncIterator(REMOVE_USER),
  }
}