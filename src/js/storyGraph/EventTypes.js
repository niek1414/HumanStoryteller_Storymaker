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

EventTypes.Infestation = {
  value : "Infestation",
  text : "Infestation",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.RaidFriendly = {
  value : "RaidFriendly",
  text : "Raid friendly",
  type : EventTypes.GENERALLY_GOOD,
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

EventTypes.HeatWave = {
  value : "HeatWave",
  text : "Heat wave",
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

EventTypes.TraderArrivalGeneral = {
  value : "TraderArrivalGeneral",
  text : "Trader",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.TraderArrivalSlaver = {
  value : "TraderArrivalSlaver",
  text : "Trader slaver",
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

EventTypes.Events = [
  {text : "Alphabeavers",         value : EventTypes.Alphabeavers},
  {text : "Ambrosia sprouted",    value : EventTypes.AmbrosiaSprout},
  {text : "Animal insanity all",  value : EventTypes.AnimalInsanityMass},
  {text : "Animal insanity",      value : EventTypes.AnimalInsanitySingle},
  {text : "Animals join",         value : EventTypes.FarmAnimalsWanderIn},
  {text : "Aurora",               value : EventTypes.Aurora},
  {text : "Cold snap",            value : EventTypes.ColdSnap},
  {text : "Crop blight",          value : EventTypes.CropBlight},
  {text : "Dialog",               value : EventTypes.Dialog},
  {text : "Disease",              value : EventTypes.Disease},
  {text : "Eclipse",              value : EventTypes.Eclipse},
  {text : "Heat wave",            value : EventTypes.HeatWave},
  {text : "Infestation",          value : EventTypes.Infestation},
  {text : "Manhunter pack",       value : EventTypes.ManhunterPack},
  {text : "Nothing",              value : EventTypes.Nothing},
  {text : "Psychic drone",        value : EventTypes.PsychicDrone},
  {text : "Psychic soothe",       value : EventTypes.PsychicSoothe},
  {text : "Raid friendly",        value : EventTypes.RaidFriendly},
  {text : "Raid",                 value : EventTypes.RaidEnemy},
  {text : "Refugee crash",        value : EventTypes.RefugeePodCrash},
  {text : "Resource pod",         value : EventTypes.ResourcePodCrash},
  {text : "Ship part",            value : EventTypes.ShipPartCrash},
  {text : "Short circuit",        value : EventTypes.ShortCircuit},
  {text : "Solar flare",          value : EventTypes.SolarFlare},
  {text : "Toxic fallout",        value : EventTypes.ToxicFallout},
  {text : "Trader slaver",        value : EventTypes.TraderArrivalSlaver},
  {text : "Trader",               value : EventTypes.TraderArrivalGeneral},
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
  "Cold snap",
  "Crop blight",
  "Dialog",
  "Disease",
  "Eclipse",
  "Heat wave",
  "Infestation",
  "Manhunter pack",
  "Nothing",
  "Psychic drone",
  "Psychic soothe",
  "Raid friendly",
  "Raid",
  "Refugee crash",
  "Resource pod",
  "Ship part",
  "Short circuit",
  "Solar flare",
  "Toxic fallout",
  "Trader slaver",
  "Trader",
  "Traveler",
  "Visitors",
  "Volcanic winter",
  "Wanderer joins",
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