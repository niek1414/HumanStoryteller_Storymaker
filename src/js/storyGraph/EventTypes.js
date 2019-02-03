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
  type : EventTypes.GENERALLY_BAD
};

EventTypes.Divider = {
  value : "Divider",
  text : "Divider",
  type : EventTypes.GENERALLY_BAD
};

EventTypes.RaidEnemy = {
  value : "RaidEnemy",
  text : "Raid",
  type : EventTypes.BIG_THREATS
};

EventTypes.ShipPartCrash = {
  value : "ShipPartCrash",
  text : "Ship part",
  type : EventTypes.BIG_THREATS
};

EventTypes.ManhunterPack = {
  value : "ManhunterPack",
  text : "Manhunter pack",
  type : EventTypes.BIG_THREATS
};

EventTypes.Infestation = {
  value : "Infestation",
  text : "Infestation",
  type : EventTypes.BIG_THREATS
};

EventTypes.RaidFriendly = {
  value : "RaidFriendly",
  text : "Raid friendly",
  type : EventTypes.GENERALLY_GOOD
};

EventTypes.AnimalInsanitySingle = {
  value : "AnimalInsanitySingle",
  text : "Animal insanity",
  type : EventTypes.SMALL_THREATS
};

EventTypes.AnimalInsanityMass = {
  value : "AnimalInsanityMass",
  text : "Animal insanity all",
  type : EventTypes.BIG_THREATS
};

EventTypes.FarmAnimalsWanderIn = {
  value : "FarmAnimalsWanderIn",
  text : "Animals join",
  type : EventTypes.GENERALLY_GOOD
};

EventTypes.ColdSnap = {
  value : "ColdSnap",
  text : "Cold snap",
  type : EventTypes.SMALL_THREATS
};

EventTypes.HeatWave = {
  value : "HeatWave",
  text : "Heat wave",
  type : EventTypes.SMALL_THREATS
};

EventTypes.Aurora = {
  value : "Aurora",
  text : "Aurora",
  type : EventTypes.NEUTRAL
};

EventTypes.Eclipse = {
  value : "Eclipse",
  text : "Eclipse",
  type : EventTypes.GENERALLY_BAD
};

EventTypes.SolarFlare = {
  value : "SolarFlare",
  text : "Solar flare",
  type : EventTypes.GENERALLY_BAD
};

EventTypes.PsychicDrone = {
  value : "PsychicDrone",
  text : "Psychic drone",
  type : EventTypes.GENERALLY_BAD
};

EventTypes.ShortCircuit = {
  value : "ShortCircuit",
  text : "Short circuit",
  type : EventTypes.GENERALLY_BAD
};

EventTypes.CropBlight = {
  value : "CropBlight",
  text : "Crop blight",
  type : EventTypes.GENERALLY_BAD
};

EventTypes.ToxicFallout = {
  value : "ToxicFallout",
  text : "Toxic fallout",
  type : EventTypes.GENERALLY_BAD
};

EventTypes.VolcanicWinter = {
  value : "VolcanicWinter",
  text : "Volcanic winter",
  type : EventTypes.GENERALLY_BAD
};

EventTypes.TraderArrivalGeneral = {
  value : "TraderArrivalGeneral",
  text : "Trader",
  type : EventTypes.GENERALLY_GOOD
};

EventTypes.TraderArrivalSlaver = {
  value : "TraderArrivalSlaver",
  text : "Trader slaver",
  type : EventTypes.GENERALLY_GOOD
};

EventTypes.TravelerGroup = {
  value : "TravelerGroup",
  text : "Traveler",
  type : EventTypes.GENERALLY_GOOD
};

EventTypes.VisitorGroup = {
  value : "VisitorGroup",
  text : "Visitors",
  type : EventTypes.GENERALLY_GOOD
};

EventTypes.WandererJoin = {
  value : "WandererJoin",
  text : "Wanderer joins",
  type : EventTypes.GENERALLY_GOOD
};

EventTypes.ResourcePodCrash = {
  value : "ResourcePodCrash",
  text : "Resource pod",
  type : EventTypes.GENERALLY_GOOD
};

EventTypes.RefugeePodCrash = {
  value : "RefugeePodCrash",
  text : "Refugee crash",
  type : EventTypes.GENERALLY_GOOD
};

EventTypes.PsychicSoothe = {
  value : "PsychicSoothe",
  text : "Psychic soothe",
  type : EventTypes.GENERALLY_GOOD
};

EventTypes.RefugeeChased = {
  value : "RefugeeChased",
  text : "Refugee chased",
  type : EventTypes.NEUTRAL
};

EventTypes.Alphabeavers = {
  value : "Alphabeavers",
  text : "Alphabeavers",
  type : EventTypes.GENERALLY_BAD
};

EventTypes.AmbrosiaSprout = {
  value : "AmbrosiaSprout",
  text : "Ambrosia sprouted",
  type : EventTypes.GENERALLY_GOOD
};

EventTypes.Nothing = {
  value : "Nothing",
  text : "Nothing",
  type : EventTypes.NEUTRAL
};

EventTypes.Events = [
  {text : "Raid",                 value : EventTypes.RaidEnemy},
  {text : "Disease",              value : EventTypes.Disease},
  {text : "Ship part",            value : EventTypes.ShipPartCrash},
  {text : "Manhunter pack",       value : EventTypes.ManhunterPack},
  {text : "Infestation",          value : EventTypes.Infestation},
  {text : "Raid friendly",        value : EventTypes.RaidFriendly},
  {text : "Animal insanity",      value : EventTypes.AnimalInsanitySingle},
  {text : "Animal insanity all",  value : EventTypes.AnimalInsanityMass},
  {text : "Animals join",         value : EventTypes.FarmAnimalsWanderIn},
  {text : "Cold snap",            value : EventTypes.ColdSnap},
  {text : "Heat wave",            value : EventTypes.HeatWave},
  {text : "Aurora",               value : EventTypes.Aurora},
  {text : "Eclipse",              value : EventTypes.Eclipse},
  {text : "Solar flare",          value : EventTypes.SolarFlare},
  {text : "Psychic drone",        value : EventTypes.PsychicDrone},
  {text : "Short circuit",        value : EventTypes.ShortCircuit},
  {text : "Crop blight",          value : EventTypes.CropBlight},
  {text : "Toxic fallout",        value : EventTypes.ToxicFallout},
  {text : "Volcanic winter",      value : EventTypes.VolcanicWinter},
  {text : "Trader",               value : EventTypes.TraderArrivalGeneral},
  {text : "Trader slaver",        value : EventTypes.TraderArrivalSlaver},
  {text : "Traveler",             value : EventTypes.TravelerGroup},
  {text : "Visitors",             value : EventTypes.VisitorGroup},
  {text : "Wanderer joins",       value : EventTypes.WandererJoin},
  {text : "Resource pod",         value : EventTypes.ResourcePodCrash},
  {text : "Refugee crash",        value : EventTypes.RefugeePodCrash},
  {text : "Psychic soothe",       value : EventTypes.PsychicSoothe},
  {text : "Alphabeavers",         value : EventTypes.Alphabeavers},
  {text : "Ambrosia sprouted",    value : EventTypes.AmbrosiaSprout},
  {text : "Nothing",              value : EventTypes.Nothing},
];

EventTypes.EventsAsString = [
  "Raid",
  "Disease",
  "Ship part",
  "Manhunter pack",
  "Infestation",
  "Raid friendly",
  "Animal insanity",
  "Animal insanity all",
  "Animals join",
  "Cold snap",
  "Heat wave",
  "Aurora",
  "Eclipse",
  "Solar flare",
  "Psychic drone",
  "Short circuit",
  "Crop blight",
  "Toxic fallout",
  "Volcanic winter",
  "Trader",
  "Trader slaver",
  "Traveler",
  "Visitors",
  "Wanderer joins",
  "Resource pod",
  "Refugee crash",
  "Psychic soothe",
  "Alphabeavers",
  "Ambrosia sprouted",
  "Caravan demand",
  "Nothing",
];

export default EventTypes;