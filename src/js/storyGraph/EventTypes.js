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
  {text : "Planetkiller",         value : EventTypes.Planetkiller},
  {text : "Psychic drone",        value : EventTypes.PsychicDrone},
  {text : "Psychic soothe",       value : EventTypes.PsychicSoothe},
  {text : "Raid",                 value : EventTypes.RaidEnemy},
  {text : "Refugee crash",        value : EventTypes.RefugeePodCrash},
  {text : "Refugee chased",       value : EventTypes.RefugeeChased},
  {text : "Resource pod",         value : EventTypes.ResourcePodCrash},
  {text : "Ship part",            value : EventTypes.ShipPartCrash},
  {text : "Short circuit",        value : EventTypes.ShortCircuit},
  {text : "Solar flare",          value : EventTypes.SolarFlare},
  {text : "Self tame",            value : EventTypes.SelfTame},
  {text : "Toxic fallout",        value : EventTypes.ToxicFallout},
  {text : "Trader",               value : EventTypes.TraderArrival},
  {text : "Visitors",             value : EventTypes.VisitorGroup},
  {text : "Volcanic winter",      value : EventTypes.VolcanicWinter},
  {text : "Wanderer joins",       value : EventTypes.WandererJoin},
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
  "Self tame",
  "Toxic fallout",
  "Trader",
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

EventTypes.ShipParts = [
  {value : 'CrashedPsychicEmanatorShipPart', text : 'Mechanoid ship part (Emanator)'},
  {value : 'CrashedPoisonShipPart', text : 'Mechanoid ship part (Poison)'},
  {value : 'ShipChunk', text : 'Ship chunk (metal)'},
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
  {value : "Beer", text : "Beer"},
  {value : "Wort", text : "Wort"},
  {value : "Ambrosia", text : "Ambrosia"},
  {value : "GoJuice", text : "Go-juice"},
  {value : "Luciferium", text : "Luciferium"},
  {value : "Penoxycyline", text : "Penoxycyline"},
  {value : "Flake", text : "Flake"},
  {value : "PsychiteTea", text : "Psychite tea"},
  {value : "Yayo", text : "Yayo"},
  {value : "SmokeleafJoint", text : "Smokeleaf joint"},
  {value : "WakeUp", text : "Wake-up"},
  {value : "Gun_MiniTurret", text : "Mini-turret gun"},
  {value : "Gun_AutocannonTurret", text : "Autocannon"},
  {value : "Gun_TurretSniper", text : "Uranium slug cannon"},
  {value : "Artillery_Mortar", text : "Mortar"},
  {value : "PsychicInsanityLance", text : "Psychic insanity lance"},
  {value : "PsychicShockLance", text : "Psychic shock lance"},
  {value : "PsychicAnimalPulser", text : "Psychic animal pulser"},
  {value : "PsychicSoothePulser", text : "Psychic soothe pulser"},
  {value : "Heart", text : "Heart"},
  {value : "Lung", text : "Lung"},
  {value : "Kidney", text : "Kidney"},
  {value : "Liver", text : "Liver"},
  {value : "SimpleProstheticLeg", text : "Prosthetic leg"},
  {value : "SimpleProstheticArm", text : "Prosthetic arm"},
  {value : "SimpleProstheticHeart", text : "Prosthetic heart"},
  {value : "CochlearImplant", text : "Cochlear implant"},
  {value : "BionicEye", text : "Bionic eye"},
  {value : "BionicArm", text : "Bionic arm"},
  {value : "BionicLeg", text : "Bionic leg"},
  {value : "BionicSpine", text : "Bionic spine"},
  {value : "BionicHeart", text : "Bionic heart"},
  {value : "BionicStomach", text : "Bionic stomach"},
  {value : "BionicEar", text : "Bionic ear"},
  {value : "PowerClaw", text : "Power claw"},
  {value : "ArchotechEye", text : "Archotech eye"},
  {value : "ArchotechArm", text : "Archotech arm"},
  {value : "ArchotechLeg", text : "Archotech leg"},
  {value : "AIPersonaCore", text : "Ai persona core"},
  {value : "MechSerumNeurotrainer", text : "Neurotrainer mech serum"},
  {value : "MechSerumHealer", text : "Healer mech serum"},
  {value : "MechSerumResurrector", text : "Resurrector mech serum"},
  {value : "TechprofSubpersonaCore", text : "Techprof subpersona core"},
  {value : "ThrumboHorn", text : "Thrumbo horn"},
  {value : "ElephantTusk", text : "Elephant tusk"},
  {value : "MealSurvivalPack", text : "Packaged survival meal"},
  {value : "MealNutrientPaste", text : "Nutrient paste meal"},
  {value : "MealSimple", text : "Simple meal"},
  {value : "MealFine", text : "Fine meal"},
  {value : "MealLavish", text : "Lavish meal"},
  {value : "Kibble", text : "Kibble"},
  {value : "Pemmican", text : "Pemmican"},
  {value : "Joywire", text : "Joywire"},
  {value : "Painstopper", text : "Painstopper"},
  {value : "Chocolate", text : "Chocolate"},
  {value : "Milk", text : "Milk"},
  {value : "InsectJelly", text : "Insect jelly"},
  {value : "EggChickenUnfertilized", text : "Chicken egg (unfert.)"},
  {value : "EggChickenFertilized", text : "Chicken egg (fert.)"},
  {value : "EggCobraFertilized", text : "Cobra egg (fert.)"},
  {value : "EggIguanaFertilized", text : "Iguana egg (fert.)"},
  {value : "EggTortoiseFertilized", text : "Tortoise egg (fert.)"},
  {value : "EggCassowaryFertilized", text : "Cassowary egg (fert.)"},
  {value : "EggEmuFertilized", text : "Emu egg (fert.)"},
  {value : "EggOstrichFertilized", text : "Ostrich egg (fert.)"},
  {value : "EggTurkeyFertilized", text : "Turkey egg (fert.)"},
  {value : "MedicineHerbal", text : "Herbal medicine"},
  {value : "MedicineIndustrial", text : "Medicine"},
  {value : "MedicineUltratech", text : "Glitterworld medicine"},
  {value : "ComponentIndustrial", text : "Component"},
  {value : "ComponentSpacer", text : "Advanced component"},
  {value : "Neutroamine", text : "Neutroamine"},
  {value : "Chemfuel", text : "Chemfuel"},
  {value : "RawPotatoes", text : "Potatoes"},
  {value : "RawFungus", text : "Raw fungus"},
  {value : "RawRice", text : "Rice"},
  {value : "RawAgave", text : "Agave fruit"},
  {value : "RawCorn", text : "Corn"},
  {value : "RawBerries", text : "Berries"},
  {value : "Hay", text : "Hay"},
  {value : "RawHops", text : "Hops"},
  {value : "PsychoidLeaves", text : "Psychoid leaves"},
  {value : "SmokeleafLeaves", text : "Smokeleaf leaves"},
  {value : "Shell_HighExplosive", text : "High-explosive shell"},
  {value : "Shell_Incendiary", text : "Incendiary shell"},
  {value : "Shell_EMP", text : "Emp shell"},
  {value : "Shell_Firefoam", text : "Firefoam shell"},
  {value : "Shell_AntigrainWarhead", text : "Antigrain warhead"},
  {value : "Silver", text : "Silver"},
  {value : "Gold", text : "Gold"},
  {value : "Steel", text : "Steel"},
  {value : "Plasteel", text : "Plasteel"},
  {value : "WoodLog", text : "Wood"},
  {value : "Uranium", text : "Uranium"},
  {value : "Jade", text : "Jade"},
  {value : "Cloth", text : "Cloth"},
  {value : "Synthread", text : "Synthread"},
  {value : "DevilstrandCloth", text : "Devilstrand"},
  {value : "Hyperweave", text : "Hyperweave"},
  {value : "WoolMegasloth", text : "Megasloth wool"},
  {value : "WoolMuffalo", text : "Muffalo wool"},
  {value : "WoolCamel", text : "Camelhair"},
  {value : "WoolAlpaca", text : "Alpaca wool"},
  {value : "Leather_Plain", text : "Plainleather"},
  {value : "Leather_Dog", text : "Dog leather"},
  {value : "Leather_Wolf", text : "Wolfskin"},
  {value : "Leather_Panthera", text : "Panthera fur"},
  {value : "Leather_Camel", text : "Camelhide"},
  {value : "Leather_Bluefur", text : "Bluefur"},
  {value : "Leather_Bear", text : "Bearskin"},
  {value : "Leather_Human", text : "Human leather"},
  {value : "Leather_Pig", text : "Pigskin"},
  {value : "Leather_Light", text : "Lightleather"},
  {value : "Leather_Bird", text : "Birdskin"},
  {value : "Leather_Chinchilla", text : "Chinchilla fur"},
  {value : "Leather_Fox", text : "Foxfur"},
  {value : "Leather_Lizard", text : "Lizardskin"},
  {value : "Leather_Elephant", text : "Elephant leather"},
  {value : "Leather_Heavy", text : "Heavy fur"},
  {value : "Leather_Rhinoceros", text : "Rhinoceros leather"},
  {value : "Leather_Thrumbo", text : "Thrumbofur"},
  {value : "Leather_Patch", text : "Patchleather"},
  {value : "UnfinishedSculpture", text : "Unfinished sculpture"},
  {value : "UnfinishedGun", text : "Unfinished gun"},
  {value : "UnfinishedWeapon", text : "Unfinished weapon"},
  {value : "UnfinishedArmor", text : "Unfinished armor"},
  {value : "UnfinishedTechArmor", text : "Unfinished armor"},
  {value : "UnfinishedMetallicTechArmor", text : "Unfinished armor"},
  {value : "UnfinishedApparel", text : "Unfinished apparel"},
  {value : "UnfinishedBelt", text : "Unfinished belt"},
  {value : "UnfinishedComponent", text : "Unfinished component"},
  {value : "MinifiedThing", text : "Minified thing"},
  {value : "Apparel_ShieldBelt", text : "Shield belt"},
  {value : "Apparel_SmokepopBelt", text : "Smokepop belt"},
  {value : "Apparel_CowboyHat", text : "Cowboy hat"},
  {value : "Apparel_BowlerHat", text : "Bowler hat"},
  {value : "Apparel_TribalHeaddress", text : "Tribal headdress"},
  {value : "Apparel_Tuque", text : "Tuque"},
  {value : "Apparel_WarMask", text : "War mask"},
  {value : "Apparel_WarVeil", text : "War veil"},
  {value : "Apparel_SimpleHelmet", text : "Simple helmet"},
  {value : "Apparel_AdvancedHelmet", text : "Advanced helmet"},
  {value : "Apparel_PowerArmorHelmet", text : "Marine helmet"},
  {value : "Apparel_PsychicFoilHelmet", text : "Psychic foil helmet"},
  {value : "Apparel_TribalA", text : "Tribalwear"},
  {value : "Apparel_Parka", text : "Parka"},
  {value : "Apparel_Pants", text : "Pants"},
  {value : "Apparel_BasicShirt", text : "T-shirt"},
  {value : "Apparel_CollarShirt", text : "Button-down shirt"},
  {value : "Apparel_Duster", text : "Duster"},
  {value : "Apparel_Jacket", text : "Jacket"},
  {value : "Apparel_PlateArmor", text : "Plate armor"},
  {value : "Apparel_FlakVest", text : "Flak vest"},
  {value : "Apparel_FlakPants", text : "Flak pants"},
  {value : "Apparel_FlakJacket", text : "Flak jacket"},
  {value : "Apparel_PowerArmor", text : "Marine armor"},
  {value : "ActiveDropPod", text : "Drop pod"},
  {value : "ChunkSlagSteel", text : "Steel slag chunk"},
  {value : "ChunkSandstone", text : "Sandstone chunk"},
  {value : "BlocksSandstone", text : "Sandstone blocks"},
  {value : "ChunkGranite", text : "Granite chunk"},
  {value : "BlocksGranite", text : "Granite blocks"},
  {value : "ChunkLimestone", text : "Limestone chunk"},
  {value : "BlocksLimestone", text : "Limestone blocks"},
  {value : "ChunkSlate", text : "Slate chunk"},
  {value : "BlocksSlate", text : "Slate blocks"},
  {value : "ChunkMarble", text : "Marble chunk"},
  {value : "BlocksMarble", text : "Marble blocks"},
  {value : "MeleeWeapon_Mace", text : "Mace"},
  {value : "MeleeWeapon_Gladius", text : "Gladius"},
  {value : "MeleeWeapon_LongSword", text : "Longsword"},
  {value : "MeleeWeapon_Club", text : "Club"},
  {value : "MeleeWeapon_Knife", text : "Knife"},
  {value : "MeleeWeapon_Ikwa", text : "Ikwa"},
  {value : "MeleeWeapon_Spear", text : "Spear"},
  {value : "Gun_Revolver", text : "Revolver"},
  {value : "Gun_Autopistol", text : "Autopistol"},
  {value : "Gun_MachinePistol", text : "Machine pistol"},
  {value : "Gun_IncendiaryLauncher", text : "Incendiary launcher"},
  {value : "Gun_BoltActionRifle", text : "Bolt-action rifle"},
  {value : "Gun_PumpShotgun", text : "Pump shotgun"},
  {value : "Gun_ChainShotgun", text : "Chain shotgun"},
  {value : "Gun_HeavySMG", text : "Heavy smg"},
  {value : "Gun_LMG", text : "Lmg"},
  {value : "Gun_AssaultRifle", text : "Assault rifle"},
  {value : "Gun_SniperRifle", text : "Sniper rifle"},
  {value : "Gun_Minigun", text : "Minigun"},
  {value : "Gun_TripleRocket", text : "Triple rocket launcher"},
  {value : "Gun_DoomsdayRocket", text : "Doomsday rocket launcher"},
  {value : "Weapon_GrenadeFrag", text : "Frag grenades"},
  {value : "Weapon_GrenadeMolotov", text : "Molotov cocktails"},
  {value : "Weapon_GrenadeEMP", text : "Emp grenades"},
  {value : "Gun_ChargeBlasterHeavy", text : "Heavy charge blaster"},
  {value : "Gun_InfernoCannon", text : "Inferno cannon"},
  {value : "Bow_Short", text : "Short bow"},
  {value : "Pila", text : "Pila"},
  {value : "Bow_Recurve", text : "Recurve bow"},
  {value : "Bow_Great", text : "Greatbow"},
  {value : "Gun_ChargeRifle", text : "Charge rifle"},
  {value : "Gun_ChargeLance", text : "Charge lance"},
  {value : "OrbitalTargeterBombardment", text : "Orbital bombardment targeter"},
  {value : "OrbitalTargeterPowerBeam", text : "Orbital power beam targeter"},
  {value : "TornadoGenerator", text : "Tornado generator"},
  {value : "Meat_Muffalo", text : "Muffalo meat"},
  {value : "Meat_Gazelle", text : "Gazelle meat"},
  {value : "Meat_Iguana", text : "Iguana meat"},
  {value : "Meat_Dromedary", text : "Dromedary meat"},
  {value : "Meat_Bear_Grizzly", text : "Bear meat"},
  {value : "Meat_Cougar", text : "Cougar meat"},
  {value : "Meat_Panther", text : "Panther meat"},
  {value : "Meat_Lynx", text : "Lynx meat"},
  {value : "Meat_Cassowary", text : "Bird meat"},
  {value : "Meat_Turkey", text : "Turkey meat"},
  {value : "Meat_Chicken", text : "Chicken meat"},
  {value : "Meat_Pig", text : "Pork"},
  {value : "Meat_Cow", text : "Beef"},
  {value : "Meat_Alpaca", text : "Alpaca meat"},
  {value : "Meat_Rhinoceros", text : "Rhinoceros meat"},
  {value : "Meat_Elephant", text : "Elephant meat"},
  {value : "Meat_Megasloth", text : "Megasloth meat"},
  {value : "Meat_Thrumbo", text : "Thrumbo meat"},
  {value : "Meat_Hare", text : "Hare meat"},
  {value : "Meat_Megaspider", text : "Insect meat"},
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
  {value : "Meat_Deer", text : "Venison"},
  {value : "Meat_Ibex", text : "Ibex meat"},
  {value : "Meat_Elk", text : "Elk meat"},
  {value : "Meat_Caribou", text : "Caribou meat"},
  {value : "Meat_Tortoise", text : "Tortoise meat"},
  {value : "Meat_Cobra", text : "Cobraflesh"},
  {value : "Meat_Monkey", text : "Monkey meat"},
  {value : "Meat_Boomalope", text : "Boomalope meat"},
  {value : "Meat_Warg", text : "Warg meat"},
  {value : "Meat_Wolf_Timber", text : "Wolfmeat"},
  {value : "Meat_Fox_Fennec", text : "Foxmeat"},
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