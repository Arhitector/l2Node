const unit = `
  lvl: Int
  HP: Int
  MP: Int
  XP: Int
  SP: Int
  agr: Boolean
  type: String
  race: String
  range: Int
  pAtk: Int
  mAtk: Int
  pDef: Int
  mDef: Int
  tAtk: Int
  media: String
  # skills: [Skills]
  # drop: [Drop]
  # spoil: [Drop]
`;
export default `
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

  type Skills {
    _id: ID
  }
  type Drop {
    _id: Int
    amount: String
    chance: Int
  }
  type Unit {
    ${unit}
  }
  input UnitInpt {
    ${unit}
  }
`;