const EventTypes = {};

/**TYPES**/
EventTypes.BIG_THREATS = {
  color : "#ba272b"
};

EventTypes.SMALL_THREATS = {
  color : "#ba7827"
};

EventTypes.GENERALLY_BAD = {
  color : "#ba4393"
};

EventTypes.GENERALLY_GOOD = {
  color : "#57ba55"
};

EventTypes.NEUTRAL = {
  color : "#3ab5ba"
};

EventTypes.GAME_ENDINGS = {
  color : "#5056ba"
};

/**EVENTS**/
EventTypes.Disease = {
  value : "Disease",
  text : "Disease",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.Divider = {
  value : "Divider",
  text : "Divider",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.RaidEnemy = {
  value : "RaidEnemy",
  text : "Raid",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.ShipPartCrash = {
  value : "ShipPartCrash",
  text : "Ship part",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.ManhunterPack = {
  value : "ManhunterPack",
  text : "Manhunter pack",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.Flashstorm = {
  value : "Flashstorm",
  text : "Flashstorm",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.MeteoriteImpact = {
  value : "MeteoriteImpact",
  text : "Meteorite",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.HerdMigration = {
  value : "HerdMigration",
  text : "Herd migration",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Infestation = {
  value : "Infestation",
  text : "Infestation",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.AnimalInsanitySingle = {
  value : "AnimalInsanitySingle",
  text : "Animal insanity",
  type : EventTypes.SMALL_THREATS,
  conditions : []
};

EventTypes.AnimalInsanityMass = {
  value : "AnimalInsanityMass",
  text : "Animal insanity all",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.FarmAnimalsWanderIn = {
  value : "FarmAnimalsWanderIn",
  text : "Animals join",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.SelfTame = {
  value : "SelfTame",
  text : "Self tame",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.ColdSnap = {
  value : "ColdSnap",
  text : "Cold snap",
  type : EventTypes.SMALL_THREATS,
  conditions : []
};

EventTypes.Aurora = {
  value : "Aurora",
  text : "Aurora",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Eclipse = {
  value : "Eclipse",
  text : "Eclipse",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.SolarFlare = {
  value : "SolarFlare",
  text : "Solar flare",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.PsychicDrone = {
  value : "PsychicDrone",
  text : "Psychic drone",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.ShortCircuit = {
  value : "ShortCircuit",
  text : "Short circuit",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.PlayAudio = {
  value : "PlayAudio",
  text : "Play audio",
  type : EventTypes.NEUTRAL,
  conditions : [
    {value : "Audio", text : "Audio"}
  ]
};

EventTypes.CropBlight = {
  value : "CropBlight",
  text : "Crop blight",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.ToxicFallout = {
  value : "ToxicFallout",
  text : "Toxic fallout",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.VolcanicWinter = {
  value : "VolcanicWinter",
  text : "Volcanic winter",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.TraderArrival = {
  value : "TraderArrival",
  text : "Trader",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.VisitorGroup = {
  value : "VisitorGroup",
  text : "Visitors",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.CreatePawn = {
  value : "CreatePawn",
  text : "Create pawn",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.ResourcePodCrash = {
  value : "ResourcePodCrash",
  text : "Resource pod",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.RefugeePodCrash = {
  value : "RefugeePodCrash",
  text : "Refugee crash",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.PsychicSoothe = {
  value : "PsychicSoothe",
  text : "Psychic soothe",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.RefugeeChased = {
  value : "RefugeeChased",
  text : "Refugee chased",
  type : EventTypes.NEUTRAL,
  conditions : [
    {value : "Dialog", text : "Dialog"}
  ]
};

EventTypes.TimeTravel = {
  value : "TimeTravel",
  text : "Time travel",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.KillPawn = {
  value : "KillPawn",
  text : "Kill pawn",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.Alphabeavers = {
  value : "Alphabeavers",
  text : "Alphabeavers",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.AmbrosiaSprout = {
  value : "AmbrosiaSprout",
  text : "Ambrosia sprouted",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.TempFlux = {
  value : "TempFlux",
  text : "Cold snap/Heat wave",
  type : EventTypes.SMALL_THREATS,
  conditions : []
};

EventTypes.Nothing = {
  value : "Nothing",
  text : "Nothing",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Dialog = {
  value : "Dialog",
  text : "Dialog",
  type : EventTypes.NEUTRAL,
  conditions : [
    {value : "Dialog", text : "Dialog"}
  ]
};

EventTypes.WildManWandersIn = {
  value : "WildManWandersIn",
  text : "Wild man wanders in",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Planetkiller = {
  value : "Planetkiller",
  text : "Planetkiller",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.Difficulty = {
  value : "Difficulty",
  text : "Set difficulty",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.SetRelation = {
  value : "SetRelation",
  text : "Set Relation",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.HealPawn = {
  value : "HealPawn",
  text : "Heal pawn",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.PawnHealth = {
  value : "PawnHealth",
  text : "Pawn health",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.GiveThought = {
  value : "GiveThought",
  text : "Give thought",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.RenamePawn = {
  value : "RenamePawn",
  text : "Rename pawn",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.EditPawn = {
  value : "EditPawn",
  text : "Edit pawn",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Events = [
  {text : "Alphabeavers",         value : EventTypes.Alphabeavers},
  {text : "Ambrosia sprouted",    value : EventTypes.AmbrosiaSprout},
  {text : "Animal insanity all",  value : EventTypes.AnimalInsanityMass},
  {text : "Animal insanity",      value : EventTypes.AnimalInsanitySingle},
  {text : "Animals join",         value : EventTypes.FarmAnimalsWanderIn},
  {text : "Aurora",               value : EventTypes.Aurora},
  {text : "Cold snap/Heat wave",  value : EventTypes.TempFlux},
  {text : "Crop blight",          value : EventTypes.CropBlight},
  {text : "Create pawn",          value : EventTypes.CreatePawn},
  {text : "Dialog",               value : EventTypes.Dialog},
  {text : "Difficulty",           value : EventTypes.Difficulty},
  {text : "Disease",              value : EventTypes.Disease},
  {text : "Eclipse",              value : EventTypes.Eclipse},
  {text : "Edit pawn",            value : EventTypes.EditPawn},
  {text : "Flashstorm",           value : EventTypes.Flashstorm},
  {text : "Give thought",         value : EventTypes.GiveThought},
  {text : "Herd migration",       value : EventTypes.HerdMigration},
  {text : "Heal pawn",            value : EventTypes.HealPawn},
  {text : "Infestation",          value : EventTypes.Infestation},
  {text : "Kill pawn",            value : EventTypes.KillPawn},
  {text : "Manhunter pack",       value : EventTypes.ManhunterPack},
  {text : "Meteorite",            value : EventTypes.MeteoriteImpact},
  {text : "Nothing",              value : EventTypes.Nothing},
  {text : "Planetkiller",         value : EventTypes.Planetkiller},
  {text : "Psychic drone",        value : EventTypes.PsychicDrone},
  {text : "Psychic soothe",       value : EventTypes.PsychicSoothe},
  {text : "Play audio",           value : EventTypes.PlayAudio},
  {text : "Pawn health",          value : EventTypes.PawnHealth},
  {text : "Raid",                 value : EventTypes.RaidEnemy},
  {text : "Refugee crash",        value : EventTypes.RefugeePodCrash},
  {text : "Refugee chased",       value : EventTypes.RefugeeChased},
  {text : "Resource pod",         value : EventTypes.ResourcePodCrash},
  {text : "Rename pawn",          value : EventTypes.RenamePawn},
  {text : "Ship part",            value : EventTypes.ShipPartCrash},
  {text : "Short circuit",        value : EventTypes.ShortCircuit},
  {text : "Solar flare",          value : EventTypes.SolarFlare},
  {text : "Self tame",            value : EventTypes.SelfTame},
  {text : "Set relation",         value : EventTypes.SetRelation},
  {text : "Toxic fallout",        value : EventTypes.ToxicFallout},
  {text : "Trader",               value : EventTypes.TraderArrival},
  {text : "Time travel",          value : EventTypes.TimeTravel},
  {text : "Visitors",             value : EventTypes.VisitorGroup},
  {text : "Volcanic winter",      value : EventTypes.VolcanicWinter},
  {text : "Wild man wanders in",  value : EventTypes.WildManWandersIn},
];

EventTypes.EventsAsString = [
  "Alphabeavers",
  "Ambrosia sprouted",
  "Animal insanity all",
  "Animal insanity",
  "Animals join",
  "Aurora",
  "Cold snap/Heat wave",
  "Crop blight",
  "Create pawn",
  "Dialog",
  "Difficulty",
  "Disease",
  "Eclipse",
  "Edit pawn",
  "Flashstorm",
  "Give thought",
  "Herd migration",
  "Heal pawn",
  "Infestation",
  "Kill pawn",
  "Manhunter pack",
  "Nothing",
  "Psychic drone",
  "Psychic soothe",
  "Play audio",
  "Pawn health",
  "Raid",
  "Refugee crash",
  "Refugee chased",
  "Resource pod",
  "Rename pawn",
  "Ship part",
  "Short circuit",
  "Solar flare",
  "Self tame",
  "Set relation",
  "Toxic fallout",
  "Trader",
  "Time travel",
  "Visitors",
  "Volcanic winter",
  "Wanderer joins",
  "Wild man wanders in",
];

EventTypes.DifficultyLevel = [
  {value : 'Peaceful', text : 'Peaceful'},
  {value : 'Easy', text : 'Easy'},
  {value : 'Medium', text : 'Medium'},
  {value : 'Rough', text : 'Rough'},
  {value : 'Hard', text : 'Hard'},
  {value : 'Extreme', text : 'Extreme'}
];

EventTypes.ItemQualities = [
  {value : 'Awful', text : 'Awful'},
  {value : 'Poor', text : 'Poor'},
  {value : 'Normal', text : 'Normal'},
  {value : 'Good', text : 'Good'},
  {value : 'Excellent', text : 'Excellent'},
  {value : 'Masterwork', text : 'Masterwork'}
];

EventTypes.Stuff = [
  {value : 'Silver', text : 'silver'},
  {value : 'Gold', text : 'gold'},
  {value : 'Steel', text : 'steel'},
  {value : 'Plasteel', text : 'plasteel'},
  {value : 'WoodLog', text : 'wood'},
  {value : 'Uranium', text : 'uranium'},
  {value : 'Jade', text : 'jade'},
  {value : 'Cloth', text : 'cloth'},
  {value : 'Synthread', text : 'synthread'},
  {value : 'DevilstrandCloth', text : 'devilstrand'},
  {value : 'Hyperweave', text : 'hyperweave'},
  {value : 'WoolMegasloth', text : 'megasloth wool'},
  {value : 'WoolMuffalo', text : 'muffalo wool'},
  {value : 'WoolCamel', text : 'camelhair'},
  {value : 'WoolAlpaca', text : 'alpaca wool'},
  {value : 'Leather_Plain', text : 'plainleather'},
  {value : 'Leather_Dog', text : 'dog leather'},
  {value : 'Leather_Wolf', text : 'wolfskin'},
  {value : 'Leather_Panthera', text : 'panthera fur'},
  {value : 'Leather_Camel', text : 'camelhide'},
  {value : 'Leather_Bluefur', text : 'bluefur'},
  {value : 'Leather_Bear', text : 'bearskin'},
  {value : 'Leather_Human', text : 'human leather'},
  {value : 'Leather_Pig', text : 'pigskin'},
  {value : 'Leather_Light', text : 'lightleather'},
  {value : 'Leather_Bird', text : 'birdskin'},
  {value : 'Leather_Chinchilla', text : 'chinchilla fur'},
  {value : 'Leather_Fox', text : 'foxfur'},
  {value : 'Leather_Lizard', text : 'lizardskin'},
  {value : 'Leather_Elephant', text : 'elephant leather'},
  {value : 'Leather_Heavy', text : 'heavy fur'},
  {value : 'Leather_Rhinoceros', text : 'rhinoceros leather'},
  {value : 'Leather_Thrumbo', text : 'thrumbofur'},
  {value : 'Leather_Patch', text : 'patchleather'},
  {value : 'BlocksSandstone', text : 'sandstone blocks'},
  {value : 'BlocksGranite', text : 'granite blocks'},
  {value : 'BlocksLimestone', text : 'limestone blocks'},
  {value : 'BlocksSlate', text : 'slate blocks'},
  {value : 'BlocksMarble', text : 'marble blocks'},
];

EventTypes.ShipParts = [
  {value : 'CrashedPsychicEmanatorShipPart', text : 'Mechanoid ship part (Emanator)'},
  {value : 'CrashedPoisonShipPart', text : 'Mechanoid ship part (Poison)'},
  {value : 'ShipChunk', text : 'Ship chunk (metal)'},
];

EventTypes.Positions = [
  {value : 'Random', text : 'Random'},
  {value : 'RandomEdge', text : 'Random edge'},
  {value : 'Center', text : 'Map center'},
];

EventTypes.MineableMaterials = [
  {value : 'MineableSteel', text : 'Mineable steel'},
  {value : 'MineableSilver', text : 'Mineable silver'},
  {value : 'MineableGold', text : 'Mineable gold'},
  {value : 'MineableUranium', text : 'Mineable uranium'},
  {value : 'MineablePlasteel', text : 'Mineable plasteel'},
  {value : 'MineableJade', text : 'Mineable jade'},
  {value : 'MineableComponentsIndustrial', text : 'Mineable components'},
  {value : 'Sandstone', text : 'Sandstone'},
  {value : 'Granite', text : 'Granite'},
  {value : 'Limestone', text : 'Limestone'},
  {value : 'Slate', text : 'Slate'},
  {value : 'Marble', text : 'Marble'}
];

EventTypes.PawnKind = [
  {value : 'Colonist', text : 'colonist'},
  {value : 'Grenadier_Destructive', text : 'grenadier'},
  {value : 'Grenadier_EMP', text : 'EMP grenadier'},
  {value : 'Mercenary_Gunner', text : 'mercenary gunner'},
  {value : 'Mercenary_Sniper', text : 'mercenary sniper'},
  {value : 'Mercenary_Slasher', text : 'mercenary slasher'},
  {value : 'Mercenary_Heavy', text : 'heavy mercenary'},
  {value : 'Mercenary_Elite', text : 'elite mercenary'},
  {value : 'PirateBoss', text : 'boss'},
  {value : 'Villager', text : 'villager'},
  {value : 'Town_Guard', text : 'town guard'},
  {value : 'Town_Trader', text : 'town trader'},
  {value : 'Town_Councilman', text : 'town councilman'},
  {value : 'Drifter', text : 'drifter'},
  {value : 'Scavenger', text : 'scavenger gunner'},
  {value : 'Thrasher', text : 'scavenger thrasher'},
  {value : 'Pirate', text : 'pirate gunner'},
  {value : 'SpaceRefugee', text : 'space refugee'},
  {value : 'AncientSoldier', text : 'ancient soldier'},
  {value : 'Slave', text : 'slave'},
  {value : 'WildMan', text : 'wild man'},
  {value : 'Tribesperson', text : 'member'},
  {value : 'StrangerInBlack', text : 'stranger in black'},
  {value : 'Tribal_Penitent', text : 'penitent'},
  {value : 'Tribal_Archer', text : 'archer'},
  {value : 'Tribal_Warrior', text : 'warrior'},
  {value : 'Tribal_Hunter', text : 'hunter'},
  {value : 'Tribal_Trader', text : 'trader'},
  {value : 'Tribal_Berserker', text : 'berserker'},
  {value : 'Tribal_HeavyArcher', text : 'heavy archer'},
  {value : 'Tribal_ChiefMelee', text : 'berserker chief'},
  {value : 'Tribal_ChiefRanged', text : 'archer chief'},
  {value : 'Mech_Centipede', text : 'centipede'},
  {value : 'Mech_Lancer', text : 'lancer'},
  {value : 'Mech_Scyther', text : 'scyther'},
  {value : 'Muffalo', text : 'muffalo'},
  {value : 'Gazelle', text : 'gazelle'},
  {value : 'Iguana', text : 'iguana'},
  {value : 'Dromedary', text : 'dromedary'},
  {value : 'Bear_Grizzly', text : 'grizzly bear'},
  {value : 'Bear_Polar', text : 'polar bear'},
  {value : 'Cougar', text : 'cougar'},
  {value : 'Panther', text : 'panther'},
  {value : 'Lynx', text : 'lynx'},
  {value : 'Cassowary', text : 'cassowary'},
  {value : 'Emu', text : 'emu'},
  {value : 'Ostrich', text : 'ostrich'},
  {value : 'Turkey', text : 'turkey'},
  {value : 'Chicken', text : 'chicken'},
  {value : 'Pig', text : 'pig'},
  {value : 'Cow', text : 'cow'},
  {value : 'Alpaca', text : 'alpaca'},
  {value : 'Rhinoceros', text : 'rhinoceros'},
  {value : 'Elephant', text : 'elephant'},
  {value : 'Megasloth', text : 'megasloth'},
  {value : 'Thrumbo', text : 'thrumbo'},
  {value : 'Hare', text : 'hare'},
  {value : 'Snowhare', text : 'snowhare'},
  {value : 'Megascarab', text : 'megascarab'},
  {value : 'Spelopede', text : 'spelopede'},
  {value : 'Megaspider', text : 'megaspider'},
  {value : 'YorkshireTerrier', text : 'yorkshire terrier'},
  {value : 'Husky', text : 'husky'},
  {value : 'LabradorRetriever', text : 'labrador retriever'},
  {value : 'Cat', text : 'cat'},
  {value : 'Squirrel', text : 'squirrel'},
  {value : 'Alphabeaver', text : 'alphabeaver'},
  {value : 'Capybara', text : 'capybara'},
  {value : 'Chinchilla', text : 'chinchilla'},
  {value : 'Boomrat', text : 'boomrat'},
  {value : 'Raccoon', text : 'raccoon'},
  {value : 'Rat', text : 'rat'},
  {value : 'Deer', text : 'deer'},
  {value : 'Ibex', text : 'ibex'},
  {value : 'Elk', text : 'elk'},
  {value : 'Caribou', text : 'caribou'},
  {value : 'WildBoar', text : 'wild boar'},
  {value : 'Tortoise', text : 'tortoise'},
  {value : 'Cobra', text : 'cobra'},
  {value : 'Monkey', text : 'monkey'},
  {value : 'Boomalope', text : 'boomalope'},
  {value : 'Warg', text : 'warg'},
  {value : 'Wolf_Timber', text : 'timber wolf'},
  {value : 'Wolf_Arctic', text : 'arctic wolf'},
  {value : 'Fox_Fennec', text : 'fennec fox'},
  {value : 'Fox_Red', text : 'red fox'},
  {value : 'Fox_Arctic', text : 'arctic fox'},
];

EventTypes.DiseaseTypes = [
  {value : 'Disease_Flu', text : 'Flu'},
  {value : 'Disease_Plague', text : 'Plague'},
  {value : 'Disease_Malaria', text : 'Malaria'},
  {value : 'Disease_SleepingSickness', text : 'Sleeping Sickness'},
  {value : 'Disease_FibrousMechanites', text : 'Fibrous Mechanites'},
  {value : 'Disease_SensoryMechanites', text : 'Sensory Mechanites'},
  {value : 'Disease_GutWorms', text : 'Gut Worms'},
  {value : 'Disease_MuscleParasites', text : 'Muscle Parasites'},
  {value : 'Disease_AnimalFlu', text : 'Animal Flu'},
  {value : 'Disease_AnimalPlague', text : 'Animal Plague'},
];

EventTypes.Biomes = [
  {value : 'BorealForest', text : 'boreal forest'},
  {value : 'Tundra', text : 'tundra'},
  {value : 'ColdBog', text : 'cold bog'},
  {value : 'IceSheet', text : 'ice sheet'},
  {value : 'SeaIce', text : 'sea ice'},
  {value : 'TemperateForest', text : 'temperate forest'},
  {value : 'TemperateSwamp', text : 'temperate swamp'},
  {value : 'TropicalRainforest', text : 'tropical rainforest'},
  {value : 'TropicalSwamp', text : 'tropical swamp'},
  {value : 'AridShrubland', text : 'arid shrubland'},
  {value : 'Desert', text : 'desert'},
  {value : 'ExtremeDesert', text : 'extreme desert'},
  {value : 'Ocean', text : 'ocean'},
  {value : 'Lake', text : 'lake'},
];

EventTypes.Weapons = [
  {value : 'None', text : 'none'},
  {value : 'Beer', text : 'beer'},
  {value : 'Gun_MiniTurret', text : 'mini-turret gun'},
  {value : 'Gun_AutocannonTurret', text : 'autocannon'},
  {value : 'Gun_TurretSniper', text : 'uranium slug cannon'},
  {value : 'Artillery_Mortar', text : 'mortar'},
  {value : 'ThrumboHorn', text : 'thrumbo horn'},
  {value : 'ElephantTusk', text : 'elephant tusk'},
  {value : 'WoodLog', text : 'wood'},
  {value : 'MeleeWeapon_Mace', text : 'mace'},
  {value : 'MeleeWeapon_Gladius', text : 'gladius'},
  {value : 'MeleeWeapon_LongSword', text : 'longsword'},
  {value : 'MeleeWeapon_Club', text : 'club'},
  {value : 'MeleeWeapon_Knife', text : 'knife'},
  {value : 'MeleeWeapon_Ikwa', text : 'ikwa'},
  {value : 'MeleeWeapon_Spear', text : 'spear'},
  {value : 'Gun_Revolver', text : 'revolver'},
  {value : 'Gun_Autopistol', text : 'autopistol'},
  {value : 'Gun_MachinePistol', text : 'machine pistol'},
  {value : 'Gun_IncendiaryLauncher', text : 'incendiary launcher'},
  {value : 'Gun_BoltActionRifle', text : 'bolt-action rifle'},
  {value : 'Gun_PumpShotgun', text : 'pump shotgun'},
  {value : 'Gun_ChainShotgun', text : 'chain shotgun'},
  {value : 'Gun_HeavySMG', text : 'heavy SMG'},
  {value : 'Gun_LMG', text : 'LMG'},
  {value : 'Gun_AssaultRifle', text : 'assault rifle'},
  {value : 'Gun_SniperRifle', text : 'sniper rifle'},
  {value : 'Gun_Minigun', text : 'minigun'},
  {value : 'Gun_TripleRocket', text : 'triple rocket launcher'},
  {value : 'Gun_DoomsdayRocket', text : 'doomsday rocket launcher'},
  {value : 'Weapon_GrenadeFrag', text : 'frag grenades'},
  {value : 'Weapon_GrenadeMolotov', text : 'molotov cocktails'},
  {value : 'Weapon_GrenadeEMP', text : 'EMP grenades'},
  {value : 'Gun_ChargeBlasterHeavy', text : 'heavy charge blaster'},
  {value : 'Gun_InfernoCannon', text : 'inferno cannon'},
  {value : 'Bow_Short', text : 'short bow'},
  {value : 'Pila', text : 'pila'},
  {value : 'Bow_Recurve', text : 'recurve bow'},
  {value : 'Bow_Great', text : 'greatbow'},
  {value : 'Gun_ChargeRifle', text : 'charge rifle'},
  {value : 'Gun_ChargeLance', text : 'charge lance'},
  {value : 'OrbitalTargeterBombardment', text : 'orbital bombardment targeter'},
  {value : 'OrbitalTargeterPowerBeam', text : 'orbital power beam targeter'},
  {value : 'TornadoGenerator', text : 'tornado generator'},
];

EventTypes.Traders = [
  {value : 'Caravan_Neolithic_BulkGoods', text : 'Caravan Neolithic Bulk goods'},
  {value : 'Caravan_Neolithic_WarMerchant', text : 'Caravan Neolithic War merchant'},
  {value : 'Caravan_Neolithic_Slaver', text : 'Caravan Neolithic Slaver'},
  {value : 'Caravan_Neolithic_ShamanMerchant', text : 'Caravan Neolithic Shaman merchant'},
  {value : 'Caravan_Outlander_BulkGoods', text : 'Caravan Outlander Bulk goods'},
  {value : 'Caravan_Outlander_CombatSupplier', text : 'Caravan Outlander Combat supplier'},
  {value : 'Caravan_Outlander_PirateMerchant', text : 'Caravan Outlander Pirate merchant'},
  {value : 'Caravan_Outlander_Exotic', text : 'Caravan Outlander Exotic'},
  {value : 'Orbital_BulkGoods', text : 'Orbital Bulk goods'},
  {value : 'Orbital_CombatSupplier', text : 'Orbital Combat supplier'},
  {value : 'Orbital_Exotic', text : 'Orbital Exotic'},
  {value : 'Orbital_PirateMerchant', text : 'Orbital Pirate merchant'},
  {value : 'Visitor_Neolithic_Standard', text : 'Visitor Neolithic Standard'},
  {value : 'Visitor_Outlander_Standard', text : 'Visitor Outlander Standard'}
];

EventTypes.Plants = [
  {value : "Agarilux", text : "Agarilux"},
  {value : "Bryolux", text : "Bryolux"},
  {value : "BurnedTree", text : "Burned tree"},
  {value : "Glowstool", text : "Glowstool"},
  {value : "Plant_Agave", text : "Agave"},
  {value : "Plant_Alocasia", text : "Alocasia"},
  {value : "Plant_Ambrosia", text : "Ambrosia"},
  {value : "Plant_Astragalus", text : "Astragalus"},
  {value : "Plant_Berry", text : "Berry"},
  {value : "Plant_Brambles", text : "Brambles"},
  {value : "Plant_Bush", text : "Bush"},
  {value : "Plant_Chokevine", text : "Chokevine"},
  {value : "Plant_Clivia", text : "Clivia"},
  {value : "Plant_Corn", text : "Corn"},
  {value : "Plant_Cotton", text : "Cotton"},
  {value : "Plant_Dandelion", text : "Dandelion"},
  {value : "Plant_Daylily", text : "Daylily"},
  {value : "Plant_Devilstrand", text : "Devilstrand"},
  {value : "Plant_Grass", text : "Grass"},
  {value : "Plant_Haygrass", text : "Haygrass"},
  {value : "Plant_Healroot", text : "Healroot"},
  {value : "Plant_HealrootWild", text : "Healroot Wild"},
  {value : "Plant_Hops", text : "Hops"},
  {value : "Plant_Moss", text : "Moss"},
  {value : "Plant_PincushionCactus", text : "Pincushion Cactus"},
  {value : "Plant_Potato", text : "Potato"},
  {value : "Plant_Psychoid", text : "Psychoid"},
  {value : "Plant_Rafflesia", text : "Rafflesia"},
  {value : "Plant_Rice", text : "Rice"},
  {value : "Plant_Rose", text : "Rose"},
  {value : "Plant_SaguaroCactus", text : "Saguaro Cactus"},
  {value : "Plant_ShrubLow", text : "Shrub Low"},
  {value : "Plant_Smokeleaf", text : "Smokeleaf"},
  {value : "Plant_Strawberry", text : "Strawberry"},
  {value : "Plant_TallGrass", text : "Tall Grass"},
  {value : "Plant_TreeBamboo", text : "Tree Bamboo"},
  {value : "Plant_TreeBirch", text : "Tree Birch"},
  {value : "Plant_TreeCecropia", text : "Tree Cecropia"},
  {value : "Plant_TreeCocoa", text : "TreeCocoa"},
  {value : "Plant_TreeCypress", text : "Tree Cypress"},
  {value : "Plant_TreeDrago", text : "Tree Drago"},
  {value : "Plant_TreeMaple", text : "Tree Maple"},
  {value : "Plant_TreeOak", text : "Tree Oak"},
  {value : "Plant_TreePalm", text : "Tree Palm"},
  {value : "Plant_TreePine", text : "Tree Pine"},
  {value : "Plant_TreePoplar", text : "Tree Poplar"},
  {value : "Plant_TreeTeak", text : "Tree Teak"},
  {value : "Plant_TreeWillow", text : "Tree Willow"},
];

EventTypes.AnimalTypes = [
  {value : "Muffalo", text : "Muffalo"},
  {value : "Gazelle", text : "Gazelle"},
  {value : "Iguana", text : "Iguana"},
  {value : "Dromedary", text : "Dromedary"},
  {value : "Bear_Grizzly", text : "Grizzly Bear"},
  {value : "Bear_Polar", text : "Polar Bear"},
  {value : "Cougar", text : "Cougar"},
  {value : "Panther", text : "Panther"},
  {value : "Lynx", text : "Lynx"},
  {value : "Cassowary", text : "Cassowary"},
  {value : "Emu", text : "Emu"},
  {value : "Ostrich", text : "Ostrich"},
  {value : "Turkey", text : "Turkey"},
  {value : "Chicken", text : "Chicken"},
  {value : "Pig", text : "Pig"},
  {value : "Cow", text : "Cow"},
  {value : "Alpaca", text : "Alpaca"},
  {value : "Rhinoceros", text : "Rhinoceros"},
  {value : "Elephant", text : "Elephant"},
  {value : "Megasloth", text : "Megasloth"},
  {value : "Thrumbo", text : "Thrumbo"},
  {value : "Hare", text : "Hare"},
  {value : "Snowhare", text : "Snowhare"},
  {value : "Megascarab", text : "Megascarab"},
  {value : "Spelopede", text : "Spelopede"},
  {value : "Megaspider", text : "Megaspider"},
  {value : "YorkshireTerrier", text : "Yorkshire Terrier"},
  {value : "Husky", text : "Husky"},
  {value : "LabradorRetriever", text : "Labrador Retriever"},
  {value : "Cat", text : "Cat"},
  {value : "Squirrel", text : "Squirrel"},
  {value : "Alphabeaver", text : "Alphabeaver"},
  {value : "Capybara", text : "Capybara"},
  {value : "Chinchilla", text : "Chinchilla"},
  {value : "Boomrat", text : "Boomrat"},
  {value : "Raccoon", text : "Raccoon"},
  {value : "Rat", text : "Rat"},
  {value : "Deer", text : "Deer"},
  {value : "Ibex", text : "Ibex"},
  {value : "Elk", text : "Elk"},
  {value : "Caribou", text : "Caribou"},
  {value : "WildBoar", text : "Wild Boar"},
  {value : "Tortoise", text : "Tortoise"},
  {value : "Cobra", text : "Cobra"},
  {value : "Monkey", text : "Monkey"},
  {value : "Boomalope", text : "Boomalope"},
  {value : "Warg", text : "Warg"},
  {value : "Wolf_Timber", text : "Timber Wolf"},
  {value : "Wolf_Arctic", text : "Arctic Wolf"},
  {value : "Fox_Fennec", text : "Fennec Fox"},
  {value : "Fox_Red", text : "Red Fox"},
  {value : "Fox_Arctic", text : "Arctic Fox"},
];

EventTypes.Items = [
  {value : "Beer", text : "beer"},
  {value : "Wort", text : "wort"},
  {value : "Ambrosia", text : "ambrosia"},
  {value : "GoJuice", text : "go-juice"},
  {value : "Luciferium", text : "luciferium"},
  {value : "Penoxycyline", text : "penoxycyline"},
  {value : "Flake", text : "flake"},
  {value : "PsychiteTea", text : "psychite tea"},
  {value : "Yayo", text : "yayo"},
  {value : "SmokeleafJoint", text : "smokeleaf joint"},
  {value : "WakeUp", text : "wake-up"},
  {value : "SculptureSmall", text : "small sculpture"},
  {value : "SculptureLarge", text : "large sculpture"},
  {value : "SculptureGrand", text : "grand sculpture"},
  {value : "Bed", text : "bed"},
  {value : "DoubleBed", text : "double bed"},
  {value : "RoyalBed", text : "royal bed"},
  {value : "HospitalBed", text : "hospital bed"},
  {value : "Bedroll", text : "bedroll"},
  {value : "BedrollDouble", text : "double bedroll"},
  {value : "AnimalSleepingBox", text : "animal sleeping box"},
  {value : "AnimalBed", text : "animal bed"},
  {value : "Stool", text : "stool"},
  {value : "DiningChair", text : "dining chair"},
  {value : "Armchair", text : "armchair"},
  {value : "EndTable", text : "end table"},
  {value : "Table1x2c", text : "table (1x2)"},
  {value : "Table2x2c", text : "table (2x2)"},
  {value : "Table2x4c", text : "table (2x4)"},
  {value : "Table3x3c", text : "table (3x3)"},
  {value : "PlantPot", text : "plant pot"},
  {value : "StandingLamp", text : "standing lamp"},
  {value : "StandingLamp_Red", text : "standing lamp (red)"},
  {value : "StandingLamp_Green", text : "standing lamp (green)"},
  {value : "StandingLamp_Blue", text : "standing lamp (blue)"},
  {value : "SunLamp", text : "sun lamp"},
  {value : "Shelf", text : "shelf"},
  {value : "Dresser", text : "dresser"},
  {value : "HorseshoesPin", text : "horseshoes pin"},
  {value : "HoopstoneRing", text : "hoopstone ring"},
  {value : "GameOfUrBoard", text : "game-of-Ur board"},
  {value : "ChessTable", text : "chess table"},
  {value : "PokerTable", text : "poker table"},
  {value : "BilliardsTable", text : "billiards table"},
  {value : "TubeTelevision", text : "tube television"},
  {value : "FlatscreenTelevision", text : "flatscreen television"},
  {value : "MegascreenTelevision", text : "megascreen television"},
  {value : "Telescope", text : "telescope"},
  {value : "OrbitalTradeBeacon", text : "orbital trade beacon"},
  {value : "FirefoamPopper", text : "firefoam popper"},
  {value : "MultiAnalyzer", text : "multi-analyzer"},
  {value : "VitalsMonitor", text : "vitals monitor"},
  {value : "ToolCabinet", text : "tool cabinet"},
  {value : "GlowPod", text : "glow pod"},
  {value : "Battery", text : "battery"},
  {value : "TableSculpting", text : "sculptor's table"},
  {value : "TableButcher", text : "butcher table"},
  {value : "HandTailoringBench", text : "hand tailor bench"},
  {value : "ElectricTailoringBench", text : "electric tailor bench"},
  {value : "FueledSmithy", text : "fueled smithy"},
  {value : "ElectricSmithy", text : "electric smithy"},
  {value : "TableMachining", text : "machining table"},
  {value : "ElectricStove", text : "electric stove"},
  {value : "FueledStove", text : "fueled stove"},
  {value : "TableStonecutter", text : "stonecutter's table"},
  {value : "Brewery", text : "brewery"},
  {value : "DrugLab", text : "drug lab"},
  {value : "ElectricSmelter", text : "electric smelter"},
  {value : "SimpleResearchBench", text : "simple research bench"},
  {value : "FermentingBarrel", text : "fermenting barrel"},
  {value : "DeepDrill", text : "deep drill"},
  {value : "Turret_MiniTurret", text : "mini-turret"},
  {value : "Gun_MiniTurret", text : "mini-turret gun"},
  {value : "Gun_AutocannonTurret", text : "autocannon"},
  {value : "Gun_TurretSniper", text : "uranium slug cannon"},
  {value : "Turret_Mortar", text : "mortar"},
  {value : "TrapSpike", text : "spike trap"},
  {value : "TrapIED_HighExplosive", text : "IED trap"},
  {value : "TrapIED_Incendiary", text : "IED incendiary trap"},
  {value : "TrapIED_EMP", text : "IED EMP trap"},
  {value : "TrapIED_Firefoam", text : "IED firefoam trap"},
  {value : "TrapIED_AntigrainWarhead", text : "IED antigrain warhead trap"},
  {value : "PsychicEmanator", text : "psychic emanator"},
  {value : "VanometricPowerCell", text : "vanometric power cell"},
  {value : "InfiniteChemreactor", text : "infinite chemreactor"},
  {value : "Heater", text : "heater"},
  {value : "PsychicInsanityLance", text : "psychic insanity lance"},
  {value : "PsychicShockLance", text : "psychic shock lance"},
  {value : "PsychicAnimalPulser", text : "psychic animal pulser"},
  {value : "PsychicSoothePulser", text : "psychic soothe pulser"},
  {value : "Heart", text : "heart"},
  {value : "Lung", text : "lung"},
  {value : "Kidney", text : "kidney"},
  {value : "Liver", text : "liver"},
  {value : "SimpleProstheticLeg", text : "prosthetic leg"},
  {value : "SimpleProstheticArm", text : "prosthetic arm"},
  {value : "SimpleProstheticHeart", text : "prosthetic heart"},
  {value : "CochlearImplant", text : "cochlear implant"},
  {value : "BionicEye", text : "bionic eye"},
  {value : "BionicArm", text : "bionic arm"},
  {value : "BionicLeg", text : "bionic leg"},
  {value : "BionicSpine", text : "bionic spine"},
  {value : "BionicHeart", text : "bionic heart"},
  {value : "BionicStomach", text : "bionic stomach"},
  {value : "BionicEar", text : "bionic ear"},
  {value : "PowerClaw", text : "power claw"},
  {value : "ArchotechEye", text : "archotech eye"},
  {value : "ArchotechArm", text : "archotech arm"},
  {value : "ArchotechLeg", text : "archotech leg"},
  {value : "AIPersonaCore", text : "AI persona core"},
  {value : "MechSerumNeurotrainer", text : "neurotrainer mech serum"},
  {value : "MechSerumHealer", text : "healer mech serum"},
  {value : "MechSerumResurrector", text : "resurrector mech serum"},
  {value : "TechprofSubpersonaCore", text : "techprof subpersona core"},
  {value : "ThrumboHorn", text : "thrumbo horn"},
  {value : "ElephantTusk", text : "elephant tusk"},
  {value : "MealSurvivalPack", text : "packaged survival meal"},
  {value : "MealNutrientPaste", text : "nutrient paste meal"},
  {value : "MealSimple", text : "simple meal"},
  {value : "MealFine", text : "fine meal"},
  {value : "MealLavish", text : "lavish meal"},
  {value : "Kibble", text : "kibble"},
  {value : "Pemmican", text : "pemmican"},
  {value : "Joywire", text : "joywire"},
  {value : "Painstopper", text : "painstopper"},
  {value : "Chocolate", text : "chocolate"},
  {value : "Milk", text : "milk"},
  {value : "InsectJelly", text : "insect jelly"},
  {value : "EggChickenUnfertilized", text : "chicken egg (unfert.)"},
  {value : "EggChickenFertilized", text : "chicken egg (fert.)"},
  {value : "EggCobraFertilized", text : "cobra egg (fert.)"},
  {value : "EggIguanaFertilized", text : "iguana egg (fert.)"},
  {value : "EggTortoiseFertilized", text : "tortoise egg (fert.)"},
  {value : "EggCassowaryFertilized", text : "cassowary egg (fert.)"},
  {value : "EggEmuFertilized", text : "emu egg (fert.)"},
  {value : "EggOstrichFertilized", text : "ostrich egg (fert.)"},
  {value : "EggTurkeyFertilized", text : "turkey egg (fert.)"},
  {value : "MedicineHerbal", text : "herbal medicine"},
  {value : "MedicineIndustrial", text : "medicine"},
  {value : "MedicineUltratech", text : "glitterworld medicine"},
  {value : "ComponentIndustrial", text : "component"},
  {value : "ComponentSpacer", text : "advanced component"},
  {value : "Neutroamine", text : "neutroamine"},
  {value : "Chemfuel", text : "chemfuel"},
  {value : "RawPotatoes", text : "potatoes"},
  {value : "RawFungus", text : "raw fungus"},
  {value : "RawRice", text : "rice"},
  {value : "RawAgave", text : "agave fruit"},
  {value : "RawCorn", text : "corn"},
  {value : "RawBerries", text : "berries"},
  {value : "Hay", text : "hay"},
  {value : "RawHops", text : "hops"},
  {value : "PsychoidLeaves", text : "psychoid leaves"},
  {value : "SmokeleafLeaves", text : "smokeleaf leaves"},
  {value : "Shell_HighExplosive", text : "high-explosive shell"},
  {value : "Shell_Incendiary", text : "incendiary shell"},
  {value : "Shell_EMP", text : "EMP shell"},
  {value : "Shell_Firefoam", text : "firefoam shell"},
  {value : "Shell_AntigrainWarhead", text : "antigrain warhead"},
  {value : "Silver", text : "silver"},
  {value : "Gold", text : "gold"},
  {value : "Steel", text : "steel"},
  {value : "Plasteel", text : "plasteel"},
  {value : "WoodLog", text : "wood"},
  {value : "Uranium", text : "uranium"},
  {value : "Jade", text : "jade"},
  {value : "Cloth", text : "cloth"},
  {value : "Synthread", text : "synthread"},
  {value : "DevilstrandCloth", text : "devilstrand"},
  {value : "Hyperweave", text : "hyperweave"},
  {value : "WoolMegasloth", text : "megasloth wool"},
  {value : "WoolMuffalo", text : "muffalo wool"},
  {value : "WoolCamel", text : "camelhair"},
  {value : "WoolAlpaca", text : "alpaca wool"},
  {value : "Leather_Plain", text : "plainleather"},
  {value : "Leather_Dog", text : "dog leather"},
  {value : "Leather_Wolf", text : "wolfskin"},
  {value : "Leather_Panthera", text : "panthera fur"},
  {value : "Leather_Camel", text : "camelhide"},
  {value : "Leather_Bluefur", text : "bluefur"},
  {value : "Leather_Bear", text : "bearskin"},
  {value : "Leather_Human", text : "human leather"},
  {value : "Leather_Pig", text : "pigskin"},
  {value : "Leather_Light", text : "lightleather"},
  {value : "Leather_Bird", text : "birdskin"},
  {value : "Leather_Chinchilla", text : "chinchilla fur"},
  {value : "Leather_Fox", text : "foxfur"},
  {value : "Leather_Lizard", text : "lizardskin"},
  {value : "Leather_Elephant", text : "elephant leather"},
  {value : "Leather_Heavy", text : "heavy fur"},
  {value : "Leather_Rhinoceros", text : "rhinoceros leather"},
  {value : "Leather_Thrumbo", text : "thrumbofur"},
  {value : "Leather_Patch", text : "patchleather"},
  {value : "UnfinishedSculpture", text : "unfinished sculpture"},
  {value : "UnfinishedGun", text : "unfinished gun"},
  {value : "UnfinishedWeapon", text : "unfinished weapon"},
  {value : "UnfinishedArmor", text : "unfinished armor"},
  {value : "UnfinishedTechArmor", text : "unfinished armor"},
  {value : "UnfinishedMetallicTechArmor", text : "unfinished armor"},
  {value : "UnfinishedApparel", text : "unfinished apparel"},
  {value : "UnfinishedBelt", text : "unfinished belt"},
  {value : "UnfinishedComponent", text : "unfinished component"},
  {value : "MinifiedThing", text : "minified thing"},
  {value : "Apparel_ShieldBelt", text : "shield belt"},
  {value : "Apparel_SmokepopBelt", text : "smokepop belt"},
  {value : "Apparel_CowboyHat", text : "cowboy hat"},
  {value : "Apparel_BowlerHat", text : "bowler hat"},
  {value : "Apparel_TribalHeaddress", text : "tribal headdress"},
  {value : "Apparel_Tuque", text : "tuque"},
  {value : "Apparel_WarMask", text : "war mask"},
  {value : "Apparel_WarVeil", text : "war veil"},
  {value : "Apparel_SimpleHelmet", text : "simple helmet"},
  {value : "Apparel_AdvancedHelmet", text : "advanced helmet"},
  {value : "Apparel_PowerArmorHelmet", text : "marine helmet"},
  {value : "Apparel_PsychicFoilHelmet", text : "psychic foil helmet"},
  {value : "Apparel_TribalA", text : "tribalwear"},
  {value : "Apparel_Parka", text : "parka"},
  {value : "Apparel_Pants", text : "pants"},
  {value : "Apparel_BasicShirt", text : "T-shirt"},
  {value : "Apparel_CollarShirt", text : "button-down shirt"},
  {value : "Apparel_Duster", text : "duster"},
  {value : "Apparel_Jacket", text : "jacket"},
  {value : "Apparel_PlateArmor", text : "plate armor"},
  {value : "Apparel_FlakVest", text : "flak vest"},
  {value : "Apparel_FlakPants", text : "flak pants"},
  {value : "Apparel_FlakJacket", text : "flak jacket"},
  {value : "Apparel_PowerArmor", text : "marine armor"},
  {value : "ChunkSlagSteel", text : "steel slag chunk"},
  {value : "ChunkSandstone", text : "sandstone chunk"},
  {value : "BlocksSandstone", text : "sandstone blocks"},
  {value : "ChunkGranite", text : "granite chunk"},
  {value : "BlocksGranite", text : "granite blocks"},
  {value : "ChunkLimestone", text : "limestone chunk"},
  {value : "BlocksLimestone", text : "limestone blocks"},
  {value : "ChunkSlate", text : "slate chunk"},
  {value : "BlocksSlate", text : "slate blocks"},
  {value : "ChunkMarble", text : "marble chunk"},
  {value : "BlocksMarble", text : "marble blocks"},
  {value : "MeleeWeapon_Mace", text : "mace"},
  {value : "MeleeWeapon_Gladius", text : "gladius"},
  {value : "MeleeWeapon_LongSword", text : "longsword"},
  {value : "MeleeWeapon_Club", text : "club"},
  {value : "MeleeWeapon_Knife", text : "knife"},
  {value : "MeleeWeapon_Ikwa", text : "ikwa"},
  {value : "MeleeWeapon_Spear", text : "spear"},
  {value : "Gun_Revolver", text : "revolver"},
  {value : "Gun_Autopistol", text : "autopistol"},
  {value : "Gun_MachinePistol", text : "machine pistol"},
  {value : "Gun_IncendiaryLauncher", text : "incendiary launcher"},
  {value : "Gun_BoltActionRifle", text : "bolt-action rifle"},
  {value : "Gun_PumpShotgun", text : "pump shotgun"},
  {value : "Gun_ChainShotgun", text : "chain shotgun"},
  {value : "Gun_HeavySMG", text : "heavy SMG"},
  {value : "Gun_LMG", text : "LMG"},
  {value : "Gun_AssaultRifle", text : "assault rifle"},
  {value : "Gun_SniperRifle", text : "sniper rifle"},
  {value : "Gun_Minigun", text : "minigun"},
  {value : "Gun_TripleRocket", text : "triple rocket launcher"},
  {value : "Gun_DoomsdayRocket", text : "doomsday rocket launcher"},
  {value : "Weapon_GrenadeFrag", text : "frag grenades"},
  {value : "Weapon_GrenadeMolotov", text : "molotov cocktails"},
  {value : "Weapon_GrenadeEMP", text : "EMP grenades"},
  {value : "Gun_ChargeBlasterHeavy", text : "heavy charge blaster"},
  {value : "Gun_InfernoCannon", text : "inferno cannon"},
  {value : "Bow_Short", text : "short bow"},
  {value : "Pila", text : "pila"},
  {value : "Bow_Recurve", text : "recurve bow"},
  {value : "Bow_Great", text : "greatbow"},
  {value : "Gun_ChargeRifle", text : "charge rifle"},
  {value : "Gun_ChargeLance", text : "charge lance"},
  {value : "OrbitalTargeterBombardment", text : "orbital bombardment targeter"},
  {value : "OrbitalTargeterPowerBeam", text : "orbital power beam targeter"},
  {value : "TornadoGenerator", text : "tornado generator"},
  {value : "Meat_Muffalo", text : "Muffalo meat"},
  {value : "Meat_Gazelle", text : "Gazelle meat"},
  {value : "Meat_Iguana", text : "Iguana meat"},
  {value : "Meat_Dromedary", text : "Dromedary meat"},
  {value : "Meat_Bear_Grizzly", text : "bear meat"},
  {value : "Meat_Cougar", text : "Cougar meat"},
  {value : "Meat_Panther", text : "Panther meat"},
  {value : "Meat_Lynx", text : "Lynx meat"},
  {value : "Meat_Cassowary", text : "bird meat"},
  {value : "Meat_Turkey", text : "Turkey meat"},
  {value : "Meat_Chicken", text : "Chicken meat"},
  {value : "Meat_Pig", text : "pork"},
  {value : "Meat_Cow", text : "beef"},
  {value : "Meat_Alpaca", text : "Alpaca meat"},
  {value : "Meat_Rhinoceros", text : "Rhinoceros meat"},
  {value : "Meat_Elephant", text : "Elephant meat"},
  {value : "Meat_Megasloth", text : "Megasloth meat"},
  {value : "Meat_Thrumbo", text : "Thrumbo meat"},
  {value : "Meat_Hare", text : "Hare meat"},
  {value : "Meat_Megaspider", text : "insect meat"},
  {value : "Meat_YorkshireTerrier", text : "Yorkshire terrier meat"},
  {value : "Meat_Husky", text : "Husky meat"},
  {value : "Meat_LabradorRetriever", text : "Labrador retriever meat"},
  {value : "Meat_Cat", text : "Cat meat"},
  {value : "Meat_Squirrel", text : "Squirrel meat"},
  {value : "Meat_Alphabeaver", text : "Alphabeaver meat"},
  {value : "Meat_Capybara", text : "Capybara meat"},
  {value : "Meat_Chinchilla", text : "Chinchilla meat"},
  {value : "Meat_Boomrat", text : "Boomrat meat"},
  {value : "Meat_Raccoon", text : "Raccoon meat"},
  {value : "Meat_Rat", text : "Rat meat"},
  {value : "Meat_Deer", text : "venison"},
  {value : "Meat_Ibex", text : "Ibex meat"},
  {value : "Meat_Elk", text : "Elk meat"},
  {value : "Meat_Caribou", text : "Caribou meat"},
  {value : "Meat_Tortoise", text : "Tortoise meat"},
  {value : "Meat_Cobra", text : "cobraflesh"},
  {value : "Meat_Monkey", text : "Monkey meat"},
  {value : "Meat_Boomalope", text : "Boomalope meat"},
  {value : "Meat_Warg", text : "Warg meat"},
  {value : "Meat_Wolf_Timber", text : "wolfmeat"},
  {value : "Meat_Fox_Fennec", text : "foxmeat"},
  {value : "Meat_Human", text : "Human meat"},
  {value : "Corpse_Muffalo", text : "Muffalo corpse"},
  {value : "Corpse_Gazelle", text : "Gazelle corpse"},
  {value : "Corpse_Iguana", text : "Iguana corpse"},
  {value : "Corpse_Dromedary", text : "Dromedary corpse"},
  {value : "Corpse_Bear_Grizzly", text : "Grizzly bear corpse"},
  {value : "Corpse_Bear_Polar", text : "Polar bear corpse"},
  {value : "Corpse_Cougar", text : "Cougar corpse"},
  {value : "Corpse_Panther", text : "Panther corpse"},
  {value : "Corpse_Lynx", text : "Lynx corpse"},
  {value : "Corpse_Cassowary", text : "Cassowary corpse"},
  {value : "Corpse_Emu", text : "Emu corpse"},
  {value : "Corpse_Ostrich", text : "Ostrich corpse"},
  {value : "Corpse_Turkey", text : "Turkey corpse"},
  {value : "Corpse_Chicken", text : "Chicken corpse"},
  {value : "Corpse_Pig", text : "Pig corpse"},
  {value : "Corpse_Cow", text : "Cow corpse"},
  {value : "Corpse_Alpaca", text : "Alpaca corpse"},
  {value : "Corpse_Rhinoceros", text : "Rhinoceros corpse"},
  {value : "Corpse_Elephant", text : "Elephant corpse"},
  {value : "Corpse_Megasloth", text : "Megasloth corpse"},
  {value : "Corpse_Thrumbo", text : "Thrumbo corpse"},
  {value : "Corpse_Hare", text : "Hare corpse"},
  {value : "Corpse_Snowhare", text : "Snowhare corpse"},
  {value : "Corpse_Megascarab", text : "Megascarab corpse"},
  {value : "Corpse_Spelopede", text : "Spelopede corpse"},
  {value : "Corpse_Megaspider", text : "Megaspider corpse"},
  {value : "Corpse_YorkshireTerrier", text : "Yorkshire terrier corpse"},
  {value : "Corpse_Husky", text : "Husky corpse"},
  {value : "Corpse_LabradorRetriever", text : "Labrador retriever corpse"},
  {value : "Corpse_Cat", text : "Cat corpse"},
  {value : "Corpse_Squirrel", text : "Squirrel corpse"},
  {value : "Corpse_Alphabeaver", text : "Alphabeaver corpse"},
  {value : "Corpse_Capybara", text : "Capybara corpse"},
  {value : "Corpse_Chinchilla", text : "Chinchilla corpse"},
  {value : "Corpse_Boomrat", text : "Boomrat corpse"},
  {value : "Corpse_Raccoon", text : "Raccoon corpse"},
  {value : "Corpse_Rat", text : "Rat corpse"},
  {value : "Corpse_Deer", text : "Deer corpse"},
  {value : "Corpse_Ibex", text : "Ibex corpse"},
  {value : "Corpse_Elk", text : "Elk corpse"},
  {value : "Corpse_Caribou", text : "Caribou corpse"},
  {value : "Corpse_WildBoar", text : "Wild boar corpse"},
  {value : "Corpse_Tortoise", text : "Tortoise corpse"},
  {value : "Corpse_Cobra", text : "Cobra corpse"},
  {value : "Corpse_Monkey", text : "Monkey corpse"},
  {value : "Corpse_Boomalope", text : "Boomalope corpse"},
  {value : "Corpse_Warg", text : "Warg corpse"},
  {value : "Corpse_Wolf_Timber", text : "Timber wolf corpse"},
  {value : "Corpse_Wolf_Arctic", text : "Arctic wolf corpse"},
  {value : "Corpse_Fox_Fennec", text : "Fennec fox corpse"},
  {value : "Corpse_Fox_Red", text : "Red fox corpse"},
  {value : "Corpse_Fox_Arctic", text : "Arctic fox corpse"},
  {value : "Corpse_Human", text : "Human corpse"},
  {value : "Corpse_Mech_Centipede", text : "Centipede corpse"},
  {value : "Corpse_Mech_Lancer", text : "Lancer corpse"},
  {value : "Corpse_Mech_Scyther", text : "Scyther corpse"},
];

export default EventTypes;