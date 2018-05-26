export default `
  type User {
    _id: String!
    name: String!
    mail: String!
    status: String
    nick: String
    gameStatus: String
  }

  type Subscription {
    addUser: User!
    removeUser: User!
  }

  type Query {
    allUsers: [User]!
    getUserById(id: String!): User!
  }

  type Mutation {
    addUser(name: String!): User!
    removeUser(
      id: String!
      date: String!
    ): User!
    updateUser(
      name: String
      mail: String
      status: String
      nick: String
      gameStatus: String
    ): User!
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }

`;