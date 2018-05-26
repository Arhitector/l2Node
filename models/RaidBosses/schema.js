const commonTypes = `
type Stats {
  str: Int
  dex: Int
  con: Int
  int: Int
  wit: Int
  men: Int

  cp: Int
  hp: Int
  mp: Int
  
  accuracy: Int
  attackSpeed: Int
  critical: Int
  evasion: Int
  speed: Int
  load: Int
  castingSpeed: Int
  physicalAttack: Int
  magicalAttack: Int
}
`;
export default `
  type RaidBosses {
    _id: String!
    gameId: Int
    name: String!
    description: String!
    guards: String
    drop: String
    spoil: String

    respawnTime: String
    killed: String
    race: String
  }

  type Subscription {
    addBoss: RaidBosses!
    killBoss: RaidBosses!
  }

  type Query {
    allBosses: [RaidBosses]!
    getBossById(id: String!): RaidBosses!
  }

  type Mutation {
    addBoss(name: String!): RaidBosses!
    killBoss(
      id: String!
      date: String!
    ): RaidBosses!
    updateBoss(
      id: String
      gameId: Int
      name: String
      description: String
      guards: String
      drop: String
      spoil: String

      respawnTime: String
      killed: String
      race: String
    ): RaidBosses!
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }

`;