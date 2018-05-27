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

  input RaidBossInput {
    _id: String!
    gameId: Int
    name: String!
    description: String
    guards: String
    drop: String
    spoil: String
    respawnTime: String
    race: String
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

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }

`;