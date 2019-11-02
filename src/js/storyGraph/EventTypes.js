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
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.PointTo = {
  value : "PointTo",
  text : "Point to",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.ShowImage = {
  value : "ShowImage",
  text : "Show image",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.SavePawnGroup = {
  value : "SavePawnGroup",
  text : "Save pawn group",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.Alphabeavers = {
  value : "Alphabeavers",
  text : "Alphabeavers",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.CoupleDecouple = {
  value : "CoupleDecouple",
  text : "(De)couple map",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.ChapterSplash = {
  value : "ChapterSplash",
  text : "Chapter splash",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.ControlCamera = {
  value : "ControlCamera",
  text : "Control camera",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.MovieMode = {
  value : "MovieMode",
  text : "Movie mode",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.FadeBlack = {
  value : "FadeBlack",
  text : "Fade to black",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.RenameMap = {
  value : "RenameMap",
  text : "Rename map",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.RadioMessage = {
  value : "RadioMessage",
  text : "Radio message",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.SpeedControl = {
  value : "SpeedControl",
  text : "Speed control",
  type : EventTypes.NEUTRAL,
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

EventTypes.Root = {
  value : "Root",
  text : "Root",
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

EventTypes.CreateStructure = {
  value : "CreateStructure",
  text : "Create structure",
  type : EventTypes.NEUTRAL,
  conditions : [
    {value : "CreatedStructure", text : "Created structure"}
  ]
};

EventTypes.DestroyPosition = {
  value : "DestroyPosition",
  text : "Destroy position",
  type : EventTypes.SMALL_THREATS,
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

EventTypes.Rules = {
  value : "Rules",
  text : "Rules",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Research = {
  value : "Research",
  text : "Research",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.DeleteItems = {
  value : "DeleteItems",
  text : "Delete items",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.OrbitalStrike = {
  value : "OrbitalStrike",
  text : "Orbital strike",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.MentalBreak = {
  value : "MentalBreak",
  text : "Mental break",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.Quest = {
  value : "Quest",
  text : "Quest",
  type : EventTypes.GENERALLY_GOOD,
  conditions : [
    {value : "Quest", text : "Quest"}
  ]
};

EventTypes.TradeRequest = {
  value : "TradeRequest",
  text : "Trade request",
  type : EventTypes.GENERALLY_GOOD,
  conditions : [
    {value : "Trade", text : "Trade"}
  ]
};

EventTypes.CreateSettlement = {
  value : "CreateSettlement",
  text : "Create settlement",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.IntentGiver = {
  value : "IntentGiver",
  text : "Intent & Job-Giver",
  type : EventTypes.NEUTRAL,
  conditions : [
    {value : "Traveled", text : "Traveled"}
  ]
};

EventTypes.Events = [
  {text : "Alphabeavers", value : EventTypes.Alphabeavers},
  {text : "Ambrosia sprouted", value : EventTypes.AmbrosiaSprout},
  {text : "Animal insanity all", value : EventTypes.AnimalInsanityMass},
  {text : "Animal insanity", value : EventTypes.AnimalInsanitySingle},
  {text : "Animals join", value : EventTypes.FarmAnimalsWanderIn},
  {text : "Aurora", value : EventTypes.Aurora},
  {text : "Chapter splash", value : EventTypes.ChapterSplash},
  {text : "Control camera", value : EventTypes.ControlCamera},
  {text : "Cold snap/Heat wave", value : EventTypes.TempFlux},
  {text : "Crop blight", value : EventTypes.CropBlight},
  {text : "Create pawn", value : EventTypes.CreatePawn},
  {text : "Create settlement", value : EventTypes.CreateSettlement},
  {text : "Create structure", value : EventTypes.CreateStructure},
  {text : "Dialog", value : EventTypes.Dialog},
  {text : "Delete items", value : EventTypes.DeleteItems},
  {text : "Destroy position", value : EventTypes.DestroyPosition},
  {text : "Difficulty", value : EventTypes.Difficulty},
  {text : "Disease", value : EventTypes.Disease},
  {text : "(De)couple map", value : EventTypes.CoupleDecouple},
  {text : "Eclipse", value : EventTypes.Eclipse},
  {text : "Edit pawn", value : EventTypes.EditPawn},
  {text : "Fade to black", value : EventTypes.FadeBlack},
  {text : "Flashstorm", value : EventTypes.Flashstorm},
  {text : "Give thought", value : EventTypes.GiveThought},
  {text : "Herd migration", value : EventTypes.HerdMigration},
  {text : "Heal pawn", value : EventTypes.HealPawn},
  {text : "Infestation", value : EventTypes.Infestation},
  {text : "Intent & Job-Giver", value : EventTypes.IntentGiver},
  {text : "Kill pawn", value : EventTypes.KillPawn},
  {text : "Manhunter pack", value : EventTypes.ManhunterPack},
  {text : "Meteorite", value : EventTypes.MeteoriteImpact},
  {text : "Mental break", value : EventTypes.MentalBreak},
  {text : "Movie mode", value : EventTypes.MovieMode},
  {text : "Rename map", value : EventTypes.RenameMap},
  {text : "Nothing", value : EventTypes.Nothing},
  {text : "Orbital strike", value : EventTypes.OrbitalStrike},
  {text : "Planetkiller", value : EventTypes.Planetkiller},
  {text : "Point to", value : EventTypes.PointTo},
  {text : "Psychic drone", value : EventTypes.PsychicDrone},
  {text : "Psychic soothe", value : EventTypes.PsychicSoothe},
  {text : "Play audio", value : EventTypes.PlayAudio},
  {text : "Pawn health", value : EventTypes.PawnHealth},
  {text : "Quest", value : EventTypes.Quest},
  {text : "Raid", value : EventTypes.RaidEnemy},
  {text : "Radio message", value : EventTypes.RadioMessage},
  {text : "Refugee crash", value : EventTypes.RefugeePodCrash},
  {text : "Refugee chased", value : EventTypes.RefugeeChased},
  {text : "Resource pod", value : EventTypes.ResourcePodCrash},
  {text : "Rename pawn", value : EventTypes.RenamePawn},
  {text : "Rules", value : EventTypes.Rules},
  {text : "Research", value : EventTypes.Research},
  {text : "Show image", value : EventTypes.ShowImage},
  {text : "Save pawn group", value : EventTypes.SavePawnGroup},
  {text : "Ship part", value : EventTypes.ShipPartCrash},
  {text : "Short circuit", value : EventTypes.ShortCircuit},
  {text : "Solar flare", value : EventTypes.SolarFlare},
  {text : "Self tame", value : EventTypes.SelfTame},
  {text : "Set relation", value : EventTypes.SetRelation},
  {text : "Speed control", value : EventTypes.SpeedControl},
  {text : "Toxic fallout", value : EventTypes.ToxicFallout},
  {text : "Trader", value : EventTypes.TraderArrival},
  {text : "Time travel", value : EventTypes.TimeTravel},
  {text : "Trade request", value : EventTypes.TradeRequest},
  {text : "Visitors", value : EventTypes.VisitorGroup},
  {text : "Volcanic winter", value : EventTypes.VolcanicWinter},
  {text : "Wild man wanders in", value : EventTypes.WildManWandersIn},
];

EventTypes.EventsAsString = [
  "Alphabeavers",
  "Ambrosia sprouted",
  "Animal insanity all",
  "Animal insanity",
  "Animals join",
  "Aurora",
  "Chapter splash",
  "Control camera",
  "Cold snap/Heat wave",
  "Crop blight",
  "Create pawn",
  "Create settlement",
  "Create structure",
  "Dialog",
  "Delete items",
  "Destroy position",
  "Difficulty",
  "Disease",
  "(De)couple map",
  "Eclipse",
  "Edit pawn",
  "Fade to black",
  "Flashstorm",
  "Give thought",
  "Herd migration",
  "Heal pawn",
  "Infestation",
  "Intent & Job-Giver",
  "Kill pawn",
  "Manhunter pack",
  "Meteorite",
  "Mental break",
  "Movie mode",
  "Rename map",
  "Nothing",
  "Orbital strike",
  "Planetkiller",
  "Point to",
  "Psychic drone",
  "Psychic soothe",
  "Play audio",
  "Pawn health",
  "Quest",
  "Raid",
  "Radio message",
  "Refugee crash",
  "Refugee chased",
  "Resource pod",
  "Rename pawn",
  "Rules",
  "Research",
  "Show image",
  "Save pawn group",
  "Ship part",
  "Short circuit",
  "Solar flare",
  "Self tame",
  "Set relation",
  "Speed control",
  "Toxic fallout",
  "Trader",
  "Time travel",
  "Trade request",
  "Visitors",
  "Volcanic winter",
  "Wild man wanders in",
];

//<editor-fold desc="DifficultyLevel">
EventTypes.DifficultyLevel = [
  {value : 'Peaceful', text : 'Peaceful'},
  {value : 'Easy', text : 'Easy'},
  {value : 'Medium', text : 'Medium'},
  {value : 'Rough', text : 'Rough'},
  {value : 'Hard', text : 'Hard'},
  {value : 'Extreme', text : 'Extreme'}
];
//</editor-fold>
//<editor-fold desc="SystemVariables">
EventTypes.SystemVariables = [
  "_DAYS",
  "_TREAT_POINTS",
  "_WEALTH"
];
//</editor-fold>
//<editor-fold desc="ResearchProject">
EventTypes.ResearchProject = [
  {value : "AdvancedFabrication", text : "Advanced fabrication"},
  {value : "ShipComputerCore", text : "AI persuasion"},
  {value : "AirConditioning", text : "Air conditioning"},
  {value : "HeavyTurrets", text : "Autocannon turret"},
  {value : "Autodoors", text : "Autodoor"},
  {value : "Batteries", text : "Battery"},
  {value : "Brewing", text : "Beer brewing"},
  {value : "BiofuelRefining", text : "Biofuel refining"},
  {value : "Bionics", text : "Bionics"},
  {value : "BlowbackOperation", text : "Blowback operation"},
  {value : "CarpetMaking", text : "Carpet making"},
  {value : "Cocoa", text : "Cocoa"},
  {value : "ColoredLights", text : "Colored lights"},
  {value : "ComplexFurniture", text : "Complex furniture"},
  {value : "ComplexClothing", text : "Complex clothing"},
  {value : "Cryptosleep", text : "Cryptosleep casket"},
  {value : "DeepDrilling", text : "Deep drilling"},
  {value : "Devilstrand", text : "Devilstrand"},
  {value : "DrugProduction", text : "Drug production"},
  {value : "Electricity", text : "Electricity"},
  {value : "Fabrication", text : "Fabrication"},
  {value : "Firefoam", text : "Firefoam"},
  {value : "FlakArmor", text : "Flak armor"},
  {value : "FlatscreenTelevision", text : "Flatscreen television"},
  {value : "GasOperation", text : "Gas operation"},
  {value : "GeothermalPower", text : "Geothermal power"},
  {value : "GoJuiceProduction", text : "Go-juice production"},
  {value : "Greatbow", text : "Greatbow"},
  {value : "GroundPenetratingScanner", text : "Ground-penetrating scanner"},
  {value : "GunTurrets", text : "Gun turrets"},
  {value : "Gunsmithing", text : "Gunsmithing"},
  {value : "HospitalBed", text : "Hospital bed"},
  {value : "Hydroponics", text : "Hydroponics"},
  {value : "IEDs", text : "IEDs"},
  {value : "ShipEngine", text : "Johnson-Tanaka drive"},
  {value : "LongRangeMineralScanner", text : "Long-range mineral scanner"},
  {value : "LongBlades", text : "Long blades"},
  {value : "Machining", text : "Machining"},
  {value : "MedicineProduction", text : "Medicine production"},
  {value : "MicroelectronicsBasics", text : "Microelectronics"},
  {value : "MoisturePump", text : "Moisture pump"},
  {value : "Mortars", text : "Mortars"},
  {value : "MultiAnalyzer", text : "Multi-analyzer"},
  {value : "MultibarrelWeapons", text : "Multibarrel weapons"},
  {value : "NutrientPaste", text : "Nutrient paste"},
  {value : "PackagedSurvivalMeal", text : "Packaged survival meal"},
  {value : "PassiveCooler", text : "Passive cooler"},
  {value : "Pemmican", text : "Pemmican"},
  {value : "PenoxycylineProduction", text : "Penoxycyline production"},
  {value : "PlateArmor", text : "Plate armor"},
  {value : "PoweredArmor", text : "Powered armor"},
  {value : "PrecisionRifling", text : "Precision rifling"},
  {value : "Prosthetics", text : "Prosthetics"},
  {value : "PsychiteRefining", text : "Psychite refining"},
  {value : "PsychoidBrewing", text : "Psychoid brewing"},
  {value : "ChargedShot", text : "Pulse-charged munitions"},
  {value : "RecurveBow", text : "Recurve bow"},
  {value : "ShieldBelt", text : "Shield belt"},
  {value : "Smithing", text : "Smithing"},
  {value : "SmokepopBelt", text : "Smokepop belts"},
  {value : "SolarPanels", text : "Solar panel"},
  {value : "ShipBasics", text : "Starflight basics"},
  {value : "ShipSensorCluster", text : "Starflight sensors"},
  {value : "ShipReactor", text : "Starship reactor"},
  {value : "SterileMaterials", text : "Sterile materials"},
  {value : "Stonecutting", text : "Stonecutting"},
  {value : "TransportPod", text : "Transport pod"},
  {value : "TreeSowing", text : "Tree sowing"},
  {value : "TubeTelevision", text : "Tube television"},
  {value : "SniperTurret", text : "Uranium slug turret"},
  {value : "ShipCryptosleep", text : "Vacuum cryptosleep casket"},
  {value : "VitalsMonitor", text : "Vitals monitor"},
  {value : "WakeUpProduction", text : "Wake-up production"},
  {value : "WatermillGenerator", text : "Watermill generator"},
];
//</editor-fold>
//<editor-fold desc="ItemQualities">
EventTypes.ItemQualities = [
  {value : 'Awful', text : 'Awful'},
  {value : 'Poor', text : 'Poor'},
  {value : 'Normal', text : 'Normal'},
  {value : 'Good', text : 'Good'},
  {value : 'Excellent', text : 'Excellent'},
  {value : 'Masterwork', text : 'Masterwork'}
];
//</editor-fold>
//<editor-fold desc="Stuff">
EventTypes.Stuff = [
  {value : 'WoolAlpaca', text : 'Alpaca wool'},
  {value : 'Leather_Bear', text : 'Bearskin'},
  {value : 'Leather_Bird', text : 'Birdskin'},
  {value : 'Leather_Bluefur', text : 'Bluefur'},
  {value : 'WoolCamel', text : 'Camelhair'},
  {value : 'Leather_Camel', text : 'Camelhide'},
  {value : 'Leather_Chinchilla', text : 'Chinchilla fur'},
  {value : 'Cloth', text : 'Cloth'},
  {value : 'DevilstrandCloth', text : 'Devilstrand'},
  {value : 'Leather_Dog', text : 'Dog leather'},
  {value : 'Leather_Elephant', text : 'Elephant leather'},
  {value : 'Leather_Fox', text : 'Foxfur'},
  {value : 'Gold', text : 'Gold'},
  {value : 'BlocksGranite', text : 'Granite blocks'},
  {value : 'Leather_Heavy', text : 'Heavy fur'},
  {value : 'Leather_Human', text : 'Human leather'},
  {value : 'Hyperweave', text : 'Hyperweave'},
  {value : 'Jade', text : 'Jade'},
  {value : 'Leather_Light', text : 'Lightleather'},
  {value : 'BlocksLimestone', text : 'Limestone blocks'},
  {value : 'Leather_Lizard', text : 'Lizardskin'},
  {value : 'BlocksMarble', text : 'Marble blocks'},
  {value : 'WoolMegasloth', text : 'Megasloth wool'},
  {value : 'WoolMuffalo', text : 'Muffalo wool'},
  {value : 'Leather_Panthera', text : 'Panthera fur'},
  {value : 'Leather_Patch', text : 'Patchleather'},
  {value : 'Leather_Pig', text : 'Pigskin'},
  {value : 'Leather_Plain', text : 'Plainleather'},
  {value : 'Plasteel', text : 'Plasteel'},
  {value : 'Leather_Rhinoceros', text : 'Rhinoceros leather'},
  {value : 'BlocksSandstone', text : 'Sandstone blocks'},
  {value : 'Silver', text : 'Silver'},
  {value : 'BlocksSlate', text : 'Slate blocks'},
  {value : 'Steel', text : 'Steel'},
  {value : 'Synthread', text : 'Synthread'},
  {value : 'Leather_Thrumbo', text : 'Thrumbofur'},
  {value : 'Uranium', text : 'Uranium'},
  {value : 'Leather_Wolf', text : 'Wolfskin'},
  {value : 'WoodLog', text : 'Wood'},
];
//</editor-fold>
//<editor-fold desc="ShipParts">
EventTypes.ShipParts = [
  {value : 'CrashedPsychicEmanatorShipPart', text : 'Mechanoid ship part (Emanator)'},
  {value : 'CrashedPoisonShipPart', text : 'Mechanoid ship part (Poison)'},
  {value : 'ShipChunk', text : 'Ship chunk (metal)'},
];
//</editor-fold>
//<editor-fold desc="Positions">
EventTypes.Positions = [
  {value : 'Random', text : 'Random'},
  {value : 'RandomEdge', text : 'Random edge'},
  {value : 'Center', text : 'Map center'},
  {value : 'OutsideColony', text : 'Just outside colony'},
  {value : 'Siege', text : 'Siege location'},
  {value : 'Pointer', text : 'Mouse pointer'},
];
//</editor-fold>
//<editor-fold desc="MineableMaterials">
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
//</editor-fold>
//<editor-fold desc="PawnKind">
EventTypes.PawnKind = [
  {value : 'Alpaca', text : 'Alpaca'},
  {value : 'Alphabeaver', text : 'Alphabeaver'},
  {value : 'AncientSoldier', text : 'Ancient soldier'},
  {value : 'Tribal_Archer', text : 'Archer'},
  {value : 'Tribal_ChiefRanged', text : 'Archer chief'},
  {value : 'Wolf_Arctic', text : 'Arctic wolf'},
  {value : 'Fox_Arctic', text : 'Arctic fox'},
  {value : 'Tribal_Berserker', text : 'Berserker'},
  {value : 'Tribal_ChiefMelee', text : 'Berserker chief'},
  {value : 'Boomalope', text : 'Boomalope'},
  {value : 'Boomrat', text : 'Boomrat'},
  {value : 'PirateBoss', text : 'Boss'},
  {value : 'Capybara', text : 'Capybara'},
  {value : 'Caribou', text : 'Caribou'},
  {value : 'Cassowary', text : 'Cassowary'},
  {value : 'Cat', text : 'Cat'},
  {value : 'Mech_Centipede', text : 'Centipede'},
  {value : 'Chicken', text : 'Chicken'},
  {value : 'Chinchilla', text : 'Chinchilla'},
  {value : 'Cobra', text : 'Cobra'},
  {value : 'Colonist', text : 'Colonist'},
  {value : 'Cougar', text : 'Cougar'},
  {value : 'Cow', text : 'Cow'},
  {value : 'Deer', text : 'Deer'},
  {value : 'Drifter', text : 'Drifter'},
  {value : 'Dromedary', text : 'Dromedary'},
  {value : 'Elephant', text : 'Elephant'},
  {value : 'Mercenary_Elite', text : 'Elite mercenary'},
  {value : 'Elk', text : 'Elk'},
  {value : 'Grenadier_EMP', text : 'EMP grenadier'},
  {value : 'Emu', text : 'Emu'},
  {value : 'Fox_Fennec', text : 'Fennec fox'},
  {value : 'Gazelle', text : 'Gazelle'},
  {value : 'Grenadier_Destructive', text : 'Grenadier'},
  {value : 'Bear_Grizzly', text : 'Grizzly bear'},
  {value : 'Hare', text : 'Hare'},
  {value : 'Mercenary_Heavy', text : 'Heavy mercenary'},
  {value : 'Tribal_HeavyArcher', text : 'Heavy archer'},
  {value : 'Tribal_Hunter', text : 'Hunter'},
  {value : 'Husky', text : 'Husky'},
  {value : 'Ibex', text : 'Ibex'},
  {value : 'Iguana', text : 'Iguana'},
  {value : 'LabradorRetriever', text : 'Labrador retriever'},
  {value : 'Mech_Lancer', text : 'Lancer'},
  {value : 'Lynx', text : 'Lynx'},
  {value : 'Megascarab', text : 'Megascarab'},
  {value : 'Megasloth', text : 'Megasloth'},
  {value : 'Megaspider', text : 'Megaspider'},
  {value : 'Tribesperson', text : 'Member'},
  {value : 'Mercenary_Gunner', text : 'Mercenary gunner'},
  {value : 'Mercenary_Sniper', text : 'Mercenary sniper'},
  {value : 'Mercenary_Slasher', text : 'Mercenary slasher'},
  {value : 'Monkey', text : 'Monkey'},
  {value : 'Muffalo', text : 'Muffalo'},
  {value : 'Ostrich', text : 'Ostrich'},
  {value : 'Panther', text : 'Panther'},
  {value : 'Tribal_Penitent', text : 'Penitent'},
  {value : 'Pig', text : 'Pig'},
  {value : 'Pirate', text : 'Pirate gunner'},
  {value : 'Bear_Polar', text : 'Polar bear'},
  {value : 'Raccoon', text : 'Raccoon'},
  {value : 'Rat', text : 'Rat'},
  {value : 'Fox_Red', text : 'Red fox'},
  {value : 'Rhinoceros', text : 'Rhinoceros'},
  {value : 'Scavenger', text : 'Scavenger gunner'},
  {value : 'Thrasher', text : 'Scavenger thrasher'},
  {value : 'Mech_Scyther', text : 'Scyther'},
  {value : 'Slave', text : 'Slave'},
  {value : 'Snowhare', text : 'Snowhare'},
  {value : 'SpaceRefugee', text : 'Space refugee'},
  {value : 'Spelopede', text : 'Spelopede'},
  {value : 'Squirrel', text : 'Squirrel'},
  {value : 'StrangerInBlack', text : 'Stranger in black'},
  {value : 'Thrumbo', text : 'Thrumbo'},
  {value : 'Wolf_Timber', text : 'Timber wolf'},
  {value : 'Tortoise', text : 'Tortoise'},
  {value : 'Town_Guard', text : 'Town guard'},
  {value : 'Town_Trader', text : 'Town trader'},
  {value : 'Town_Councilman', text : 'Town councilman'},
  {value : 'Tribal_Trader', text : 'Trader'},
  {value : 'Turkey', text : 'Turkey'},
  {value : 'Villager', text : 'Villager'},
  {value : 'Warg', text : 'Warg'},
  {value : 'Tribal_Warrior', text : 'Warrior'},
  {value : 'WildMan', text : 'Wild man'},
  {value : 'WildBoar', text : 'Wild boar'},
  {value : 'YorkshireTerrier', text : 'Yorkshire terrier'},
];
//</editor-fold>
//<editor-fold desc="DiseaseTypes">
EventTypes.DiseaseTypes = [
  {value : 'Disease_AnimalFlu', text : 'Animal Flu'},
  {value : 'Disease_AnimalPlague', text : 'Animal Plague'},
  {value : 'Disease_FibrousMechanites', text : 'Fibrous Mechanites'},
  {value : 'Disease_Flu', text : 'Flu'},
  {value : 'Disease_GutWorms', text : 'Gut Worms'},
  {value : 'Disease_Malaria', text : 'Malaria'},
  {value : 'Disease_MuscleParasites', text : 'Muscle Parasites'},
  {value : 'Disease_Plague', text : 'Plague'},
  {value : 'Disease_SensoryMechanites', text : 'Sensory Mechanites'},
  {value : 'Disease_SleepingSickness', text : 'Sleeping Sickness'},
];
//</editor-fold>
//<editor-fold desc="Biomes">
EventTypes.Biomes = [
  {value : 'AridShrubland', text : 'Arid shrubland'},
  {value : 'BorealForest', text : 'Boreal forest'},
  {value : 'ColdBog', text : 'Cold bog'},
  {value : 'Desert', text : 'Desert'},
  {value : 'ExtremeDesert', text : 'Extreme desert'},
  {value : 'IceSheet', text : 'Ice sheet'},
  {value : 'Lake', text : 'Lake'},
  {value : 'Ocean', text : 'Ocean'},
  {value : 'SeaIce', text : 'Sea ice'},
  {value : 'TemperateForest', text : 'Temperate forest'},
  {value : 'TemperateSwamp', text : 'Temperate swamp'},
  {value : 'TropicalRainforest', text : 'Tropical rainforest'},
  {value : 'TropicalSwamp', text : 'Tropical swamp'},
  {value : 'Tundra', text : 'Tundra'},
];
//</editor-fold>
//<editor-fold desc="Weapons">
EventTypes.Weapons = [
  {value : 'None', text : 'none'},
  {value : 'Gun_AssaultRifle', text : 'Assault rifle'},
  {value : 'Gun_AutocannonTurret', text : 'Autocannon'},
  {value : 'Gun_Autopistol', text : 'Autopistol'},
  {value : 'Beer', text : 'Beer'},
  {value : 'Gun_BoltActionRifle', text : 'Bolt-action rifle'},
  {value : 'Gun_ChainShotgun', text : 'Chain shotgun'},
  {value : 'Gun_ChargeRifle', text : 'Charge rifle'},
  {value : 'Gun_ChargeLance', text : 'Charge lance'},
  {value : 'MeleeWeapon_Club', text : 'Club'},
  {value : 'Gun_DoomsdayRocket', text : 'Doomsday rocket launcher'},
  {value : 'ElephantTusk', text : 'Elephant tusk'},
  {value : 'Weapon_GrenadeEMP', text : 'EMP grenades'},
  {value : 'Weapon_GrenadeFrag', text : 'Frag grenades'},
  {value : 'MeleeWeapon_Gladius', text : 'Gladius'},
  {value : 'Bow_Great', text : 'Greatbow'},
  {value : 'Gun_HeavySMG', text : 'Heavy SMG'},
  {value : 'Gun_ChargeBlasterHeavy', text : 'Heavy charge blaster'},
  {value : 'MeleeWeapon_Ikwa', text : 'Ikwa'},
  {value : 'Gun_IncendiaryLauncher', text : 'Incendiary launcher'},
  {value : 'Gun_InfernoCannon', text : 'Inferno cannon'},
  {value : 'MeleeWeapon_Knife', text : 'Knife'},
  {value : 'Gun_LMG', text : 'LMG'},
  {value : 'MeleeWeapon_LongSword', text : 'Longsword'},
  {value : 'MeleeWeapon_Mace', text : 'Mace'},
  {value : 'Gun_MachinePistol', text : 'Machine pistol'},
  {value : 'Gun_MiniTurret', text : 'Mini-turret gun'},
  {value : 'Gun_Minigun', text : 'Minigun'},
  {value : 'Weapon_GrenadeMolotov', text : 'Molotov cocktails'},
  {value : 'Artillery_Mortar', text : 'Mortar'},
  {value : 'OrbitalTargeterBombardment', text : 'Orbital bombardment targeter'},
  {value : 'OrbitalTargeterPowerBeam', text : 'Orbital power beam targeter'},
  {value : 'Pila', text : 'Pila'},
  {value : 'Gun_PumpShotgun', text : 'Pump shotgun'},
  {value : 'Bow_Recurve', text : 'Recurve bow'},
  {value : 'Gun_Revolver', text : 'Revolver'},
  {value : 'Bow_Short', text : 'Short bow'},
  {value : 'Gun_SniperRifle', text : 'Sniper rifle'},
  {value : 'MeleeWeapon_Spear', text : 'Spear'},
  {value : 'ThrumboHorn', text : 'Thrumbo horn'},
  {value : 'TornadoGenerator', text : 'Tornado generator'},
  {value : 'Gun_TripleRocket', text : 'Triple rocket launcher'},
  {value : 'Gun_TurretSniper', text : 'Uranium slug cannon'},
  {value : 'WoodLog', text : 'Wood'},
];
//</editor-fold>
//<editor-fold desc="Traders">
EventTypes.Traders = [
  {value : 'Caravan_Neolithic_BulkGoods', text : 'Caravan Neolithic Bulk goods'},
  {value : 'Caravan_Neolithic_ShamanMerchant', text : 'Caravan Neolithic Shaman merchant'},
  {value : 'Caravan_Neolithic_Slaver', text : 'Caravan Neolithic Slaver'},
  {value : 'Caravan_Neolithic_WarMerchant', text : 'Caravan Neolithic War merchant'},
  {value : 'Caravan_Outlander_BulkGoods', text : 'Caravan Outlander Bulk goods'},
  {value : 'Caravan_Outlander_CombatSupplier', text : 'Caravan Outlander Combat supplier'},
  {value : 'Caravan_Outlander_Exotic', text : 'Caravan Outlander Exotic'},
  {value : 'Caravan_Outlander_PirateMerchant', text : 'Caravan Outlander Pirate merchant'},
  {value : 'Orbital_BulkGoods', text : 'Orbital Bulk goods'},
  {value : 'Orbital_CombatSupplier', text : 'Orbital Combat supplier'},
  {value : 'Orbital_Exotic', text : 'Orbital Exotic'},
  {value : 'Orbital_PirateMerchant', text : 'Orbital Pirate merchant'},
  {value : 'Visitor_Neolithic_Standard', text : 'Visitor Neolithic Standard'},
  {value : 'Visitor_Outlander_Standard', text : 'Visitor Outlander Standard'}
];
//</editor-fold>
//<editor-fold desc="Plants">
EventTypes.Plants = [
  {value : "Agarilux", text : "Agarilux"},
  {value : "Plant_Agave", text : "Agave"},
  {value : "Plant_Alocasia", text : "Alocasia"},
  {value : "Plant_Ambrosia", text : "Ambrosia"},
  {value : "Plant_Astragalus", text : "Astragalus"},
  {value : "Plant_Berry", text : "Berry"},
  {value : "Plant_Brambles", text : "Brambles"},
  {value : "Bryolux", text : "Bryolux"},
  {value : "BurnedTree", text : "Burned tree"},
  {value : "Plant_Bush", text : "Bush"},
  {value : "Plant_Chokevine", text : "Chokevine"},
  {value : "Plant_Clivia", text : "Clivia"},
  {value : "Plant_Corn", text : "Corn"},
  {value : "Plant_Cotton", text : "Cotton"},
  {value : "Plant_Dandelion", text : "Dandelion"},
  {value : "Plant_Daylily", text : "Daylily"},
  {value : "Plant_Devilstrand", text : "Devilstrand"},
  {value : "Glowstool", text : "Glowstool"},
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
  {value : "Plant_TreeCypress", text : "Tree Cypress"},
  {value : "Plant_TreeDrago", text : "Tree Drago"},
  {value : "Plant_TreeMaple", text : "Tree Maple"},
  {value : "Plant_TreeOak", text : "Tree Oak"},
  {value : "Plant_TreePalm", text : "Tree Palm"},
  {value : "Plant_TreePine", text : "Tree Pine"},
  {value : "Plant_TreePoplar", text : "Tree Poplar"},
  {value : "Plant_TreeTeak", text : "Tree Teak"},
  {value : "Plant_TreeWillow", text : "Tree Willow"},
  {value : "Plant_TreeCocoa", text : "TreeCocoa"},
];
//</editor-fold>
//<editor-fold desc="AnimalTypes">
EventTypes.AnimalTypes = [
  {value : "Alpaca", text : "Alpaca"},
  {value : "Alphabeaver", text : "Alphabeaver"},
  {value : "Wolf_Arctic", text : "Arctic Wolf"},
  {value : "Fox_Arctic", text : "Arctic Fox"},
  {value : "Boomalope", text : "Boomalope"},
  {value : "Boomrat", text : "Boomrat"},
  {value : "Capybara", text : "Capybara"},
  {value : "Caribou", text : "Caribou"},
  {value : "Cassowary", text : "Cassowary"},
  {value : "Cat", text : "Cat"},
  {value : "Chicken", text : "Chicken"},
  {value : "Chinchilla", text : "Chinchilla"},
  {value : "Cobra", text : "Cobra"},
  {value : "Cougar", text : "Cougar"},
  {value : "Cow", text : "Cow"},
  {value : "Deer", text : "Deer"},
  {value : "Dromedary", text : "Dromedary"},
  {value : "Elephant", text : "Elephant"},
  {value : "Elk", text : "Elk"},
  {value : "Emu", text : "Emu"},
  {value : "Fox_Fennec", text : "Fennec Fox"},
  {value : "Gazelle", text : "Gazelle"},
  {value : "Bear_Grizzly", text : "Grizzly Bear"},
  {value : "Hare", text : "Hare"},
  {value : "Husky", text : "Husky"},
  {value : "Ibex", text : "Ibex"},
  {value : "Iguana", text : "Iguana"},
  {value : "LabradorRetriever", text : "Labrador Retriever"},
  {value : "Lynx", text : "Lynx"},
  {value : "Megascarab", text : "Megascarab"},
  {value : "Megasloth", text : "Megasloth"},
  {value : "Megaspider", text : "Megaspider"},
  {value : "Monkey", text : "Monkey"},
  {value : "Muffalo", text : "Muffalo"},
  {value : "Ostrich", text : "Ostrich"},
  {value : "Panther", text : "Panther"},
  {value : "Pig", text : "Pig"},
  {value : "Bear_Polar", text : "Polar Bear"},
  {value : "Raccoon", text : "Raccoon"},
  {value : "Rat", text : "Rat"},
  {value : "Fox_Red", text : "Red Fox"},
  {value : "Rhinoceros", text : "Rhinoceros"},
  {value : "Snowhare", text : "Snowhare"},
  {value : "Spelopede", text : "Spelopede"},
  {value : "Squirrel", text : "Squirrel"},
  {value : "Thrumbo", text : "Thrumbo"},
  {value : "Wolf_Timber", text : "Timber Wolf"},
  {value : "Tortoise", text : "Tortoise"},
  {value : "Turkey", text : "Turkey"},
  {value : "Warg", text : "Warg"},
  {value : "WildBoar", text : "Wild Boar"},
  {value : "YorkshireTerrier", text : "Yorkshire Terrier"},
];
//</editor-fold>
//<editor-fold desc="PawnTraits">
EventTypes.PawnTraits = [
  {value : "Nudist|0", text : "Nudist"},
  {value : "Bloodlust|0", text : "Bloodlust"},
  {value : "Kind|0", text : "Kind"},
  {value : "Psychopath|0", text : "Psychopath"},
  {value : "Cannibal|0", text : "Cannibal"},
  {value : "Abrasive|0", text : "Abrasive"},
  {value : "TooSmart|0", text : "Too smart"},
  {value : "Brawler|0", text : "Brawler"},
  {value : "Masochist|0", text : "Masochist"},
  {value : "NightOwl|0", text : "Night owl"},
  {value : "Greedy|0", text : "Greedy"},
  {value : "Jealous|0", text : "Jealous"},
  {value : "Ascetic|0", text : "Ascetic"},
  {value : "Gay|0", text : "Gay"},
  {value : "AnnoyingVoice|0", text : "Annoying voice"},
  {value : "CreepyBreathing|0", text : "Creepy breathing"},
  {value : "Pyromaniac|0", text : "Pyromaniac"},
  {value : "Wimp|0", text : "Wimp"},
  {value : "Nimble|0", text : "Nimble"},
  {value : "FastLearner|0", text : "Fast learner"},
  {value : "Undergrounder|0", text : "Undergrounder"},
  {value : "Transhumanist|0", text : "Transhumanist"},
  {value : "BodyPurist|0", text : "Body purist"},
  {value : "DislikesMen|0", text : "Misandrist"},
  {value : "DislikesWomen|0", text : "Misogynist"},
  {value : "GreatMemory|0", text : "Great memory"},
  {value : "Tough|0", text : "Tough"},
  {value : "Gourmand|0", text : "Gourmand"},
  {value : "QuickSleeper|0", text : "Quick sleeper"},
  {value : "SpeedOffset|-1", text : "Slowpoke"},
  {value : "SpeedOffset|1", text : "Fast walker"},
  {value : "SpeedOffset|2", text : "Jogger"},
  {value : "DrugDesire|2", text : "Chemical fascination"},
  {value : "DrugDesire|1", text : "Chemical interest"},
  {value : "DrugDesire|-1", text : "Teetotaler"},
  {value : "NaturalMood|2", text : "Sanguine"},
  {value : "NaturalMood|1", text : "Optimist"},
  {value : "NaturalMood|-1", text : "Pessimist"},
  {value : "NaturalMood|-2", text : "Depressive"},
  {value : "Nerves|2", text : "Iron-willed"},
  {value : "Nerves|1", text : "Steadfast"},
  {value : "Nerves|-1", text : "Nervous"},
  {value : "Nerves|-2", text : "Volatile"},
  {value : "Neurotic|1", text : "Neurotic"},
  {value : "Neurotic|2", text : "Very neurotic"},
  {value : "Industriousness|2", text : "Industrious"},
  {value : "Industriousness|1", text : "Hard worker"},
  {value : "Industriousness|-1", text : "Lazy"},
  {value : "Industriousness|-2", text : "Slothful"},
  {value : "PsychicSensitivity|2", text : "Psychically hypersensitive"},
  {value : "PsychicSensitivity|1", text : "Psychically sensitive"},
  {value : "PsychicSensitivity|-1", text : "Psychically dull"},
  {value : "PsychicSensitivity|-2", text : "Psychically deaf"},
  {value : "ShootingAccuracy|1", text : "Careful shooter"},
  {value : "ShootingAccuracy|-1", text : "Trigger-happy"},
  {value : "Beauty|2", text : "Beautiful"},
  {value : "Beauty|1", text : "Pretty"},
  {value : "Beauty|-1", text : "Ugly"},
  {value : "Beauty|-2", text : "Staggeringly ugly"},
  {value : "Immunity|1", text : "Super-immune"},
  {value : "Immunity|-1", text : "Sickly"},
];
//</editor-fold>
//<editor-fold desc="Items">
EventTypes.Items = [
  {value : "ComponentSpacer", text : "Advanced component"},
  {value : "Apparel_AdvancedHelmet", text : "Advanced helmet"},
  {value : "RawAgave", text : "Agave fruit"},
  {value : "AIPersonaCore", text : "AI persona core"},
  {value : "WoolAlpaca", text : "Alpaca wool"},
  {value : "Meat_Alpaca", text : "Alpaca meat"},
  {value : "Corpse_Alpaca", text : "Alpaca corpse"},
  {value : "Meat_Alphabeaver", text : "Alphabeaver meat"},
  {value : "Corpse_Alphabeaver", text : "Alphabeaver corpse"},
  {value : "Ambrosia", text : "Ambrosia"},
  {value : "AnimalSleepingBox", text : "Animal sleeping box"},
  {value : "AnimalBed", text : "Animal bed"},
  {value : "Shell_AntigrainWarhead", text : "Antigrain warhead"},
  {value : "ArchotechEye", text : "Archotech eye"},
  {value : "ArchotechArm", text : "Archotech arm"},
  {value : "ArchotechLeg", text : "Archotech leg"},
  {value : "Corpse_Wolf_Arctic", text : "Arctic wolf corpse"},
  {value : "Corpse_Fox_Arctic", text : "Arctic fox corpse"},
  {value : "Armchair", text : "Armchair"},
  {value : "Gun_AssaultRifle", text : "Assault rifle"},
  {value : "Gun_AutocannonTurret", text : "Autocannon"},
  {value : "Gun_Autopistol", text : "Autopistol"},
  {value : "Battery", text : "Battery"},
  {value : "Meat_Bear_Grizzly", text : "Bear meat"},
  {value : "Leather_Bear", text : "Bearskin"},
  {value : "Bed", text : "Bed"},
  {value : "Bedroll", text : "Bedroll"},
  {value : "Meat_Cow", text : "Beef"},
  {value : "Beer", text : "Beer"},
  {value : "RawBerries", text : "Berries"},
  {value : "BilliardsTable", text : "Billiards table"},
  {value : "BionicEye", text : "Bionic eye"},
  {value : "BionicArm", text : "Bionic arm"},
  {value : "BionicLeg", text : "Bionic leg"},
  {value : "BionicSpine", text : "Bionic spine"},
  {value : "BionicHeart", text : "Bionic heart"},
  {value : "BionicStomach", text : "Bionic stomach"},
  {value : "BionicEar", text : "Bionic ear"},
  {value : "Meat_Cassowary", text : "Bird meat"},
  {value : "Leather_Bird", text : "Birdskin"},
  {value : "Leather_Bluefur", text : "Bluefur"},
  {value : "Gun_BoltActionRifle", text : "Bolt-action rifle"},
  {value : "Meat_Boomalope", text : "Boomalope meat"},
  {value : "Corpse_Boomalope", text : "Boomalope corpse"},
  {value : "Meat_Boomrat", text : "Boomrat meat"},
  {value : "Corpse_Boomrat", text : "Boomrat corpse"},
  {value : "Apparel_BowlerHat", text : "Bowler hat"},
  {value : "Brewery", text : "Brewery"},
  {value : "TableButcher", text : "Butcher table"},
  {value : "Apparel_CollarShirt", text : "Button-down shirt"},
  {value : "WoolCamel", text : "Camelhair"},
  {value : "Leather_Camel", text : "Camelhide"},
  {value : "Meat_Capybara", text : "Capybara meat"},
  {value : "Corpse_Capybara", text : "Capybara corpse"},
  {value : "Meat_Caribou", text : "Caribou meat"},
  {value : "Corpse_Caribou", text : "Caribou corpse"},
  {value : "EggCassowaryFertilized", text : "Cassowary egg (fert.)"},
  {value : "Corpse_Cassowary", text : "Cassowary corpse"},
  {value : "Meat_Cat", text : "Cat meat"},
  {value : "Corpse_Cat", text : "Cat corpse"},
  {value : "Corpse_Mech_Centipede", text : "Centipede corpse"},
  {value : "Gun_ChainShotgun", text : "Chain shotgun"},
  {value : "Gun_ChargeRifle", text : "Charge rifle"},
  {value : "Gun_ChargeLance", text : "Charge lance"},
  {value : "Chemfuel", text : "Chemfuel"},
  {value : "ChessTable", text : "Chess table"},
  {value : "EggChickenUnfertilized", text : "Chicken egg (unfert.)"},
  {value : "EggChickenFertilized", text : "Chicken egg (fert.)"},
  {value : "Meat_Chicken", text : "Chicken meat"},
  {value : "Corpse_Chicken", text : "Chicken corpse"},
  {value : "Leather_Chinchilla", text : "Chinchilla fur"},
  {value : "Meat_Chinchilla", text : "Chinchilla meat"},
  {value : "Corpse_Chinchilla", text : "Chinchilla corpse"},
  {value : "Chocolate", text : "Chocolate"},
  {value : "Cloth", text : "Cloth"},
  {value : "MeleeWeapon_Club", text : "Club"},
  {value : "EggCobraFertilized", text : "Cobra egg (fert.)"},
  {value : "Corpse_Cobra", text : "Cobra corpse"},
  {value : "Meat_Cobra", text : "Cobraflesh"},
  {value : "CochlearImplant", text : "Cochlear implant"},
  {value : "ComponentIndustrial", text : "Component"},
  {value : "RawCorn", text : "Corn"},
  {value : "Meat_Cougar", text : "Cougar meat"},
  {value : "Corpse_Cougar", text : "Cougar corpse"},
  {value : "Corpse_Cow", text : "Cow corpse"},
  {value : "Apparel_CowboyHat", text : "Cowboy hat"},
  {value : "DeepDrill", text : "Deep drill"},
  {value : "Corpse_Deer", text : "Deer corpse"},
  {value : "DevilstrandCloth", text : "Devilstrand"},
  {value : "DiningChair", text : "Dining chair"},
  {value : "Leather_Dog", text : "Dog leather"},
  {value : "Gun_DoomsdayRocket", text : "Doomsday rocket launcher"},
  {value : "DoubleBed", text : "Double bed"},
  {value : "BedrollDouble", text : "Double bedroll"},
  {value : "Dresser", text : "Dresser"},
  {value : "Meat_Dromedary", text : "Dromedary meat"},
  {value : "Corpse_Dromedary", text : "Dromedary corpse"},
  {value : "DrugLab", text : "Drug lab"},
  {value : "Apparel_Duster", text : "Duster"},
  {value : "ElectricTailoringBench", text : "Electric tailor bench"},
  {value : "ElectricSmithy", text : "Electric smithy"},
  {value : "ElectricStove", text : "Electric stove"},
  {value : "ElectricSmelter", text : "Electric smelter"},
  {value : "ElephantTusk", text : "Elephant tusk"},
  {value : "Leather_Elephant", text : "Elephant leather"},
  {value : "Meat_Elephant", text : "Elephant meat"},
  {value : "Corpse_Elephant", text : "Elephant corpse"},
  {value : "Meat_Elk", text : "Elk meat"},
  {value : "Corpse_Elk", text : "Elk corpse"},
  {value : "Shell_EMP", text : "EMP shell"},
  {value : "Weapon_GrenadeEMP", text : "EMP grenades"},
  {value : "EggEmuFertilized", text : "Emu egg (fert.)"},
  {value : "Corpse_Emu", text : "Emu corpse"},
  {value : "EndTable", text : "End table"},
  {value : "Corpse_Fox_Fennec", text : "Fennec fox corpse"},
  {value : "FermentingBarrel", text : "Fermenting barrel"},
  {value : "MealFine", text : "Fine meal"},
  {value : "FirefoamPopper", text : "Firefoam popper"},
  {value : "Shell_Firefoam", text : "Firefoam shell"},
  {value : "Apparel_FlakVest", text : "Flak vest"},
  {value : "Apparel_FlakPants", text : "Flak pants"},
  {value : "Apparel_FlakJacket", text : "Flak jacket"},
  {value : "Flake", text : "Flake"},
  {value : "FlatscreenTelevision", text : "Flatscreen television"},
  {value : "Leather_Fox", text : "Foxfur"},
  {value : "Meat_Fox_Fennec", text : "Foxmeat"},
  {value : "Weapon_GrenadeFrag", text : "Frag grenades"},
  {value : "FueledSmithy", text : "Fueled smithy"},
  {value : "FueledStove", text : "Fueled stove"},
  {value : "GameOfUrBoard", text : "Game-of-Ur board"},
  {value : "Meat_Gazelle", text : "Gazelle meat"},
  {value : "Corpse_Gazelle", text : "Gazelle corpse"},
  {value : "MeleeWeapon_Gladius", text : "Gladius"},
  {value : "MedicineUltratech", text : "Glitterworld medicine"},
  {value : "GlowPod", text : "Glow pod"},
  {value : "GoJuice", text : "Go-juice"},
  {value : "Gold", text : "Gold"},
  {value : "SculptureGrand", text : "Grand sculpture"},
  {value : "ChunkGranite", text : "Granite chunk"},
  {value : "BlocksGranite", text : "Granite blocks"},
  {value : "Bow_Great", text : "Greatbow"},
  {value : "Corpse_Bear_Grizzly", text : "Grizzly bear corpse"},
  {value : "HandTailoringBench", text : "Hand tailor bench"},
  {value : "Meat_Hare", text : "Hare meat"},
  {value : "Corpse_Hare", text : "Hare corpse"},
  {value : "Hay", text : "Hay"},
  {value : "MechSerumHealer", text : "Healer mech serum"},
  {value : "Heart", text : "Heart"},
  {value : "Heater", text : "Heater"},
  {value : "Leather_Heavy", text : "Heavy fur"},
  {value : "Gun_HeavySMG", text : "Heavy SMG"},
  {value : "Gun_ChargeBlasterHeavy", text : "Heavy charge blaster"},
  {value : "MedicineHerbal", text : "Herbal medicine"},
  {value : "Shell_HighExplosive", text : "High-explosive shell"},
  {value : "HoopstoneRing", text : "Hoopstone ring"},
  {value : "RawHops", text : "Hops"},
  {value : "HorseshoesPin", text : "Horseshoes pin"},
  {value : "HospitalBed", text : "Hospital bed"},
  {value : "Leather_Human", text : "Human leather"},
  {value : "Meat_Human", text : "Human meat"},
  {value : "Corpse_Human", text : "Human corpse"},
  {value : "Meat_Husky", text : "Husky meat"},
  {value : "Corpse_Husky", text : "Husky corpse"},
  {value : "Hyperweave", text : "Hyperweave"},
  {value : "Meat_Ibex", text : "Ibex meat"},
  {value : "Corpse_Ibex", text : "Ibex corpse"},
  {value : "TrapIED_HighExplosive", text : "IED trap"},
  {value : "TrapIED_Incendiary", text : "IED incendiary trap"},
  {value : "TrapIED_EMP", text : "IED EMP trap"},
  {value : "TrapIED_Firefoam", text : "IED firefoam trap"},
  {value : "TrapIED_AntigrainWarhead", text : "IED antigrain warhead trap"},
  {value : "EggIguanaFertilized", text : "Iguana egg (fert.)"},
  {value : "Meat_Iguana", text : "Iguana meat"},
  {value : "Corpse_Iguana", text : "Iguana corpse"},
  {value : "MeleeWeapon_Ikwa", text : "Ikwa"},
  {value : "Shell_Incendiary", text : "Incendiary shell"},
  {value : "Gun_IncendiaryLauncher", text : "Incendiary launcher"},
  {value : "Gun_InfernoCannon", text : "Inferno cannon"},
  {value : "InfiniteChemreactor", text : "Infinite chemreactor"},
  {value : "InsectJelly", text : "Insect jelly"},
  {value : "Meat_Megaspider", text : "Insect meat"},
  {value : "Apparel_Jacket", text : "Jacket"},
  {value : "Jade", text : "Jade"},
  {value : "Joywire", text : "Joywire"},
  {value : "Kibble", text : "Kibble"},
  {value : "Kidney", text : "Kidney"},
  {value : "MeleeWeapon_Knife", text : "Knife"},
  {value : "Meat_LabradorRetriever", text : "Labrador retriever meat"},
  {value : "Corpse_LabradorRetriever", text : "Labrador retriever corpse"},
  {value : "Corpse_Mech_Lancer", text : "Lancer corpse"},
  {value : "SculptureLarge", text : "Large sculpture"},
  {value : "MealLavish", text : "Lavish meal"},
  {value : "Leather_Light", text : "Lightleather"},
  {value : "ChunkLimestone", text : "Limestone chunk"},
  {value : "BlocksLimestone", text : "Limestone blocks"},
  {value : "Liver", text : "Liver"},
  {value : "Leather_Lizard", text : "Lizardskin"},
  {value : "Gun_LMG", text : "LMG"},
  {value : "MeleeWeapon_LongSword", text : "Longsword"},
  {value : "Luciferium", text : "Luciferium"},
  {value : "Lung", text : "Lung"},
  {value : "Meat_Lynx", text : "Lynx meat"},
  {value : "Corpse_Lynx", text : "Lynx corpse"},
  {value : "MeleeWeapon_Mace", text : "Mace"},
  {value : "Gun_MachinePistol", text : "Machine pistol"},
  {value : "TableMachining", text : "Machining table"},
  {value : "ChunkMarble", text : "Marble chunk"},
  {value : "BlocksMarble", text : "Marble blocks"},
  {value : "Apparel_PowerArmorHelmet", text : "Marine helmet"},
  {value : "Apparel_PowerArmor", text : "Marine armor"},
  {value : "MedicineIndustrial", text : "Medicine"},
  {value : "Corpse_Megascarab", text : "Megascarab corpse"},
  {value : "MegascreenTelevision", text : "Megascreen television"},
  {value : "WoolMegasloth", text : "Megasloth wool"},
  {value : "Meat_Megasloth", text : "Megasloth meat"},
  {value : "Corpse_Megasloth", text : "Megasloth corpse"},
  {value : "Corpse_Megaspider", text : "Megaspider corpse"},
  {value : "Milk", text : "Milk"},
  {value : "Turret_MiniTurret", text : "Mini-turret"},
  {value : "Gun_MiniTurret", text : "Mini-turret gun"},
  {value : "MinifiedThing", text : "Minified thing"},
  {value : "Gun_Minigun", text : "Minigun"},
  {value : "Weapon_GrenadeMolotov", text : "Molotov cocktails"},
  {value : "Meat_Monkey", text : "Monkey meat"},
  {value : "Corpse_Monkey", text : "Monkey corpse"},
  {value : "Turret_Mortar", text : "Mortar"},
  {value : "WoolMuffalo", text : "Muffalo wool"},
  {value : "Meat_Muffalo", text : "Muffalo meat"},
  {value : "Corpse_Muffalo", text : "Muffalo corpse"},
  {value : "MultiAnalyzer", text : "Multi-analyzer"},
  {value : "MechSerumNeurotrainer", text : "Neurotrainer mech serum"},
  {value : "Neutroamine", text : "Neutroamine"},
  {value : "MealNutrientPaste", text : "Nutrient paste meal"},
  {value : "OrbitalTradeBeacon", text : "Orbital trade beacon"},
  {value : "OrbitalTargeterBombardment", text : "Orbital bombardment targeter"},
  {value : "OrbitalTargeterPowerBeam", text : "Orbital power beam targeter"},
  {value : "EggOstrichFertilized", text : "Ostrich egg (fert.)"},
  {value : "Corpse_Ostrich", text : "Ostrich corpse"},
  {value : "MealSurvivalPack", text : "Packaged survival meal"},
  {value : "Painstopper", text : "Painstopper"},
  {value : "Meat_Panther", text : "Panther meat"},
  {value : "Corpse_Panther", text : "Panther corpse"},
  {value : "Leather_Panthera", text : "Panthera fur"},
  {value : "Apparel_Pants", text : "Pants"},
  {value : "Apparel_Parka", text : "Parka"},
  {value : "Leather_Patch", text : "Patchleather"},
  {value : "Pemmican", text : "Pemmican"},
  {value : "Penoxycyline", text : "Penoxycyline"},
  {value : "Corpse_Pig", text : "Pig corpse"},
  {value : "Leather_Pig", text : "Pigskin"},
  {value : "Pila", text : "Pila"},
  {value : "Leather_Plain", text : "Plainleather"},
  {value : "PlantPot", text : "Plant pot"},
  {value : "Plasteel", text : "Plasteel"},
  {value : "Apparel_PlateArmor", text : "Plate armor"},
  {value : "PokerTable", text : "Poker table"},
  {value : "Corpse_Bear_Polar", text : "Polar bear corpse"},
  {value : "Meat_Pig", text : "Pork"},
  {value : "RawPotatoes", text : "Potatoes"},
  {value : "PowerClaw", text : "Power claw"},
  {value : "SimpleProstheticLeg", text : "Prosthetic leg"},
  {value : "SimpleProstheticArm", text : "Prosthetic arm"},
  {value : "SimpleProstheticHeart", text : "Prosthetic heart"},
  {value : "PsychicEmanator", text : "Psychic emanator"},
  {value : "PsychicInsanityLance", text : "Psychic insanity lance"},
  {value : "PsychicShockLance", text : "Psychic shock lance"},
  {value : "PsychicAnimalPulser", text : "Psychic animal pulser"},
  {value : "PsychicSoothePulser", text : "Psychic soothe pulser"},
  {value : "Apparel_PsychicFoilHelmet", text : "Psychic foil helmet"},
  {value : "PsychiteTea", text : "Psychite tea"},
  {value : "PsychoidLeaves", text : "Psychoid leaves"},
  {value : "Gun_PumpShotgun", text : "Pump shotgun"},
  {value : "Meat_Raccoon", text : "Raccoon meat"},
  {value : "Corpse_Raccoon", text : "Raccoon corpse"},
  {value : "Meat_Rat", text : "Rat meat"},
  {value : "Corpse_Rat", text : "Rat corpse"},
  {value : "RawFungus", text : "Raw fungus"},
  {value : "Bow_Recurve", text : "Recurve bow"},
  {value : "Corpse_Fox_Red", text : "Red fox corpse"},
  {value : "MechSerumResurrector", text : "Resurrector mech serum"},
  {value : "Gun_Revolver", text : "Revolver"},
  {value : "Leather_Rhinoceros", text : "Rhinoceros leather"},
  {value : "Meat_Rhinoceros", text : "Rhinoceros meat"},
  {value : "Corpse_Rhinoceros", text : "Rhinoceros corpse"},
  {value : "RawRice", text : "Rice"},
  {value : "RoyalBed", text : "Royal bed"},
  {value : "ChunkSandstone", text : "Sandstone chunk"},
  {value : "BlocksSandstone", text : "Sandstone blocks"},
  {value : "TableSculpting", text : "Sculptor's table"},
  {value : "Corpse_Mech_Scyther", text : "Scyther corpse"},
  {value : "Shelf", text : "Shelf"},
  {value : "Apparel_ShieldBelt", text : "Shield belt"},
  {value : "Bow_Short", text : "Short bow"},
  {value : "Silver", text : "Silver"},
  {value : "SimpleResearchBench", text : "Simple research bench"},
  {value : "MealSimple", text : "Simple meal"},
  {value : "Apparel_SimpleHelmet", text : "Simple helmet"},
  {value : "ChunkSlate", text : "Slate chunk"},
  {value : "BlocksSlate", text : "Slate blocks"},
  {value : "SculptureSmall", text : "Small sculpture"},
  {value : "SmokeleafJoint", text : "Smokeleaf joint"},
  {value : "SmokeleafLeaves", text : "Smokeleaf leaves"},
  {value : "Apparel_SmokepopBelt", text : "Smokepop belt"},
  {value : "Gun_SniperRifle", text : "Sniper rifle"},
  {value : "Corpse_Snowhare", text : "Snowhare corpse"},
  {value : "MeleeWeapon_Spear", text : "Spear"},
  {value : "Corpse_Spelopede", text : "Spelopede corpse"},
  {value : "TrapSpike", text : "Spike trap"},
  {value : "Meat_Squirrel", text : "Squirrel meat"},
  {value : "Corpse_Squirrel", text : "Squirrel corpse"},
  {value : "StandingLamp", text : "Standing lamp"},
  {value : "StandingLamp_Red", text : "Standing lamp (red)"},
  {value : "StandingLamp_Green", text : "Standing lamp (green)"},
  {value : "StandingLamp_Blue", text : "Standing lamp (blue)"},
  {value : "Steel", text : "Steel"},
  {value : "ChunkSlagSteel", text : "Steel slag chunk"},
  {value : "TableStonecutter", text : "Stonecutter's table"},
  {value : "Stool", text : "Stool"},
  {value : "SunLamp", text : "Sun lamp"},
  {value : "Synthread", text : "Synthread"},
  {value : "Apparel_BasicShirt", text : "T-shirt"},
  {value : "Table1x2c", text : "Table (1x2)"},
  {value : "Table2x2c", text : "Table (2x2)"},
  {value : "Table2x4c", text : "Table (2x4)"},
  {value : "Table3x3c", text : "Table (3x3)"},
  {value : "TechprofSubpersonaCore", text : "Techprof subpersona core"},
  {value : "Telescope", text : "Telescope"},
  {value : "ThrumboHorn", text : "Thrumbo horn"},
  {value : "Meat_Thrumbo", text : "Thrumbo meat"},
  {value : "Corpse_Thrumbo", text : "Thrumbo corpse"},
  {value : "Leather_Thrumbo", text : "Thrumbofur"},
  {value : "Corpse_Wolf_Timber", text : "Timber wolf corpse"},
  {value : "ToolCabinet", text : "Tool cabinet"},
  {value : "TornadoGenerator", text : "Tornado generator"},
  {value : "EggTortoiseFertilized", text : "Tortoise egg (fert.)"},
  {value : "Meat_Tortoise", text : "Tortoise meat"},
  {value : "Corpse_Tortoise", text : "Tortoise corpse"},
  {value : "Apparel_TribalHeaddress", text : "Tribal headdress"},
  {value : "Apparel_TribalA", text : "Tribalwear"},
  {value : "Gun_TripleRocket", text : "Triple rocket launcher"},
  {value : "TubeTelevision", text : "Tube television"},
  {value : "Apparel_Tuque", text : "Tuque"},
  {value : "EggTurkeyFertilized", text : "Turkey egg (fert.)"},
  {value : "Meat_Turkey", text : "Turkey meat"},
  {value : "Corpse_Turkey", text : "Turkey corpse"},
  {value : "UnfinishedSculpture", text : "Unfinished sculpture"},
  {value : "UnfinishedGun", text : "Unfinished gun"},
  {value : "UnfinishedWeapon", text : "Unfinished weapon"},
  {value : "UnfinishedArmor", text : "Unfinished armor"},
  {value : "UnfinishedTechArmor", text : "Unfinished armor"},
  {value : "UnfinishedMetallicTechArmor", text : "Unfinished armor"},
  {value : "UnfinishedApparel", text : "Unfinished apparel"},
  {value : "UnfinishedBelt", text : "Unfinished belt"},
  {value : "UnfinishedComponent", text : "Unfinished component"},
  {value : "Uranium", text : "Uranium"},
  {value : "Gun_TurretSniper", text : "Uranium slug cannon"},
  {value : "VanometricPowerCell", text : "Vanometric power cell"},
  {value : "Meat_Deer", text : "Venison"},
  {value : "VitalsMonitor", text : "Vitals monitor"},
  {value : "WakeUp", text : "Wake-up"},
  {value : "Apparel_WarMask", text : "War mask"},
  {value : "Apparel_WarVeil", text : "War veil"},
  {value : "Meat_Warg", text : "Warg meat"},
  {value : "Corpse_Warg", text : "Warg corpse"},
  {value : "Corpse_WildBoar", text : "Wild boar corpse"},
  {value : "Meat_Wolf_Timber", text : "Wolfmeat"},
  {value : "Leather_Wolf", text : "Wolfskin"},
  {value : "WoodLog", text : "Wood"},
  {value : "Wort", text : "Wort"},
  {value : "Yayo", text : "Yayo"},
  {value : "Meat_YorkshireTerrier", text : "Yorkshire terrier meat"},
  {value : "Corpse_YorkshireTerrier", text : "Yorkshire terrier corpse"},
];
//</editor-fold>

export default EventTypes;