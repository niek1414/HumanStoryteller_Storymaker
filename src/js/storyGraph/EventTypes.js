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

EventTypes.TravelerGroup = {
  value : "TravelerGroup",
  text : "Traveler",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.VisitorGroup = {
  value : "VisitorGroup",
  text : "Visitors",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.WandererJoin = {
  value : "WandererJoin",
  text : "Wanderer joins",
  type : EventTypes.GENERALLY_GOOD,
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

EventTypes.Difficulty = {
  value : "Difficulty",
  text : "Set difficulty",
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
  {text : "Dialog",               value : EventTypes.Dialog},
  {text : "Difficulty",           value : EventTypes.Difficulty},
  {text : "Disease",              value : EventTypes.Disease},
  {text : "Eclipse",              value : EventTypes.Eclipse},
  {text : "Flashstorm",           value : EventTypes.Flashstorm},
  {text : "Herd migration",       value : EventTypes.HerdMigration},
  {text : "Infestation",          value : EventTypes.Infestation},
  {text : "Manhunter pack",       value : EventTypes.ManhunterPack},
  {text : "Meteorite",            value : EventTypes.MeteoriteImpact},
  {text : "Nothing",              value : EventTypes.Nothing},
  {text : "Psychic drone",        value : EventTypes.PsychicDrone},
  {text : "Psychic soothe",       value : EventTypes.PsychicSoothe},
  {text : "Raid",                 value : EventTypes.RaidEnemy},
  {text : "Refugee crash",        value : EventTypes.RefugeePodCrash},
  {text : "Refugee chased",       value : EventTypes.RefugeeChased},
  {text : "Resource pod",         value : EventTypes.ResourcePodCrash},
  {text : "Ship part",            value : EventTypes.ShipPartCrash},
  {text : "Short circuit",        value : EventTypes.ShortCircuit},
  {text : "Solar flare",          value : EventTypes.SolarFlare},
  {text : "Toxic fallout",        value : EventTypes.ToxicFallout},
  {text : "Trader",               value : EventTypes.TraderArrival},
  {text : "Traveler",             value : EventTypes.TravelerGroup},
  {text : "Visitors",             value : EventTypes.VisitorGroup},
  {text : "Volcanic winter",      value : EventTypes.VolcanicWinter},
  {text : "Wanderer joins",       value : EventTypes.WandererJoin},
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
  "Dialog",
  "Difficulty",
  "Disease",
  "Eclipse",
  "Flashstorm",
  "Herd migration",
  "Infestation",
  "Manhunter pack",
  "Nothing",
  "Psychic drone",
  "Psychic soothe",
  "Raid",
  "Refugee crash",
  "Refugee chased",
  "Resource pod",
  "Ship part",
  "Short circuit",
  "Solar flare",
  "Toxic fallout",
  "Trader",
  "Traveler",
  "Visitors",
  "Volcanic winter",
  "Wanderer joins",
];

EventTypes.DifficultyLevel = [
  {value : 'Peaceful', text : 'Peaceful'},
  {value : 'Easy', text : 'Easy'},
  {value : 'Medium', text : 'Medium'},
  {value : 'Rough', text : 'Rough'},
  {value : 'Hard', text : 'Hard'},
  {value : 'Extreme', text : 'Extreme'}
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
  {value : "WildBoar", text : "WildBoar"},
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

export default EventTypes;