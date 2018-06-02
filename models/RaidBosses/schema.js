import commonSchema from '../common/schema';

export default `
  ${commonSchema}
  type RaidBosses inherits Unit {
    _id: String!
    gameId: Int
    name: String!
    description: String
    guards: String

    respawnTime: String
    killed: String
  }

  input RaidBossInput inherits UnitInpt {
    _id: String!
    gameId: Int
    name: String!
    description: String
    guards: String
    respawnTime: String
  }

  type Query {
    allBosses: [RaidBosses]!
    getBossById(id: String!): RaidBosses!
  }

  type Mutation {
    addBoss(raidBoss: RaidBossInput): RaidBosses!
    killBoss(
      id: String!
      date: String!
    ): RaidBosses!
    updateBoss(raidBoss: RaidBossInput): RaidBosses!
  }

  type Subscription {
    addBoss: RaidBosses
    updatedBoss: RaidBosses
    killBoss: RaidBosses
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }

`;