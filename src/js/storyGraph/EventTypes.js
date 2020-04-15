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
  desc : "Give pawns a disease",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.Divider = {
  value : "Divider",
  text : "Divider",
  desc : "Split in two runners",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.RaidEnemy = {
  value : "RaidEnemy",
  text : "Raid",
  desc : "Create a (enemy) raid",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.ShipPartCrash = {
  value : "ShipPartCrash",
  text : "Ship part",
  desc : "Drop ship parts",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.ManhunterPack = {
  value : "ManhunterPack",
  text : "Manhunter pack",
  desc : "Spawns a pack of manhunting animals",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.Flashstorm = {
  value : "Flashstorm",
  text : "Flashstorm",
  desc : "Creates a flashstorm",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.Unfog = {
  value : "Unfog",
  text : "(Un)Fog",
  desc : "Adds or removes the fog of war in areas",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.MeteoriteImpact = {
  value : "MeteoriteImpact",
  text : "Meteorite",
  desc : "Drops meteorite(s)",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.HerdMigration = {
  value : "HerdMigration",
  text : "Herd migration",
  desc : "Let a group of animals travel through an area",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Infestation = {
  value : "Infestation",
  text : "Infestation",
  desc : "Spawn an insect infestation",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.AnimalInsanitySingle = {
  value : "AnimalInsanitySingle",
  text : "Animal insanity",
  desc : "Drives a single animal to hunt for humans",
  type : EventTypes.SMALL_THREATS,
  conditions : []
};

EventTypes.AnimalInsanityMass = {
  value : "AnimalInsanityMass",
  text : "Animal insanity all",
  desc : "Drives all animals of the same kind to hunt for humans",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.FarmAnimalsWanderIn = {
  value : "FarmAnimalsWanderIn",
  text : "Animals join",
  desc : "Spawns animals that join the colony",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.SelfTame = {
  value : "SelfTame",
  text : "Self tame",
  desc : "A single animal on the map joins the colony",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.Aurora = {
  value : "Aurora",
  text : "Aurora",
  desc : "Shows an aurora in the sky",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Eclipse = {
  value : "Eclipse",
  text : "Eclipse",
  desc : "Hides the sun during the day for a while",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.SolarFlare = {
  value : "SolarFlare",
  text : "Solar flare",
  desc : "Disables electronics for a while",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.PsychicDrone = {
  value : "PsychicDrone",
  text : "Psychic drone",
  desc : "Decreases pawns mod of one gender",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.ShortCircuit = {
  value : "ShortCircuit",
  text : "Short circuit",
  desc : "Discharges the batteries of one powergrid with an explosion",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.PlayAudio = {
  value : "PlayAudio",
  text : "Play audio",
  desc : "Plays a sound or song",
  type : EventTypes.NEUTRAL,
  conditions : [
    {value : "Audio", text : "Audio"}
  ]
};

EventTypes.CropBlight = {
  value : "CropBlight",
  text : "Crop blight",
  desc : "Spawns plant disease",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.ToxicFallout = {
  value : "ToxicFallout",
  text : "Toxic fallout",
  desc : "Makes it toxic outside",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.TransferPawn = {
  value : "TransferPawn",
  text : "Transfer pawn",
  desc : "Transfers a pawn to a map",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.VolcanicWinter = {
  value : "VolcanicWinter",
  text : "Volcanic winter",
  desc : "Creates a unusual long and cold period",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.TraderArrival = {
  value : "TraderArrival",
  text : "Trader",
  desc : "A group visits with stuff to trade",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.VisitorGroup = {
  value : "VisitorGroup",
  text : "Visitors",
  desc : "A group visits",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.CreatePawn = {
  value : "CreatePawn",
  text : "Create pawn",
  desc : "Create a new custom pawn",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.ResourcePodCrash = {
  value : "ResourcePodCrash",
  text : "Resource pod",
  desc : "Drop some resources",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.RefugeePodCrash = {
  value : "RefugeePodCrash",
  text : "Refugee crash",
  desc : "Drop a pawn",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.PsychicSoothe = {
  value : "PsychicSoothe",
  text : "Psychic soothe",
  desc : "Increases pawns mod of one gender",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.RefugeeChased = {
  value : "RefugeeChased",
  text : "Refugee chased",
  desc : "A pawn joins followed by a raid",
  type : EventTypes.NEUTRAL,
  conditions : [
    {value : "Dialog", text : "Dialog"}
  ]
};

EventTypes.TimeTravel = {
  value : "TimeTravel",
  text : "Time travel",
  desc : "Change the current time",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.KillPawn = {
  value : "KillPawn",
  text : "Kill pawn",
  desc : "Kills a pawn",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.PointTo = {
  value : "PointTo",
  text : "Point to",
  desc : "Draws a arrow on the screen",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.ShowImage = {
  value : "ShowImage",
  text : "Show image",
  desc : "Shows a custom image",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.SavePawnGroup = {
  value : "SavePawnGroup",
  text : "Save pawn group",
  desc : "Save a group of pawns for later reference",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.Alphabeavers = {
  value : "Alphabeavers",
  text : "Alphabeavers",
  desc : "Spawns a group of tree eating beavers",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.CoupleDecouple = {
  value : "CoupleDecouple",
  text : "(De)couple map",
  desc : "Show or hide a map, reappear on caravan arrival",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.ChapterSplash = {
  value : "ChapterSplash",
  text : "Chapter splash",
  desc : "Shows a banner with a title and subtext",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.ControlCamera = {
  value : "ControlCamera",
  text : "Control camera",
  desc : "Control what the player is looking at",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.MovieMode = {
  value : "MovieMode",
  text : "Movie mode",
  desc : "Shows movie bars and disables player controls",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.OnHit = {
  value : "OnHit",
  text : "On hit",
  desc : "Do something on getting hit from range",
  type : EventTypes.NEUTRAL,
  conditions : [
    {value : "QueueEvent", text : "Queued event fired"}
  ]
};

EventTypes.FadeBlack = {
  value : "FadeBlack",
  text : "Fade to black",
  desc : "Fade the screen to black",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.DisableStoryEvent = {
  value : "DisableStoryEvent",
  text : "Disable story event",
  desc : "Disables events like the game ending dialog",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.RenameMap = {
  value : "RenameMap",
  text : "Rename map",
  desc : "Name a map for later reference",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.RadioMessage = {
  value : "RadioMessage",
  text : "Radio message",
  desc : "Show a message box with the pawn image",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.BubbleMessage = {
  value : "BubbleMessage",
  text : "Bubble message",
  desc : "Show a bubble message coming from a pawn",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.SpeedControl = {
  value : "SpeedControl",
  text : "Speed control",
  desc : "Forces a specific speed and/or locks it",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.AmbrosiaSprout = {
  value : "AmbrosiaSprout",
  text : "Ambrosia sprouted",
  desc : "Create a few plants with addicting fruits",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.TempFlux = {
  value : "TempFlux",
  text : "Cold snap/Heat wave",
  desc : "Change the temperature for a bit",
  type : EventTypes.SMALL_THREATS,
  conditions : []
};

EventTypes.Nothing = {
  value : "Nothing",
  text : "Empty event",
  desc : "Can be used to manipulate the story without executing a event",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Root = {
  value : "Root",
  text : "Root",
  desc : "This it the entry event",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Dialog = {
  value : "Dialog",
  text : "Dialog",
  desc : "Show a dialog screen with options",
  type : EventTypes.NEUTRAL,
  conditions : [
    {value : "Dialog", text : "Dialog"}
  ]
};

EventTypes.WildManWandersIn = {
  value : "WildManWandersIn",
  text : "Wild man wanders in",
  desc : "A wild man or woman enters the area",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Planetkiller = {
  value : "Planetkiller",
  text : "Planetkiller",
  desc : "Creates a countdown that ends the game",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.Difficulty = {
  value : "Difficulty",
  text : "Set difficulty",
  desc : "Change the difficulty",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.SetRelation = {
  value : "SetRelation",
  text : "Set Relation",
  desc : "Change the relation between factions",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.HealPawn = {
  value : "HealPawn",
  text : "Heal pawn",
  desc : "Heal a pawn",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.PawnHealth = {
  value : "PawnHealth",
  text : "Pawn health",
  desc : "Inflict health complications",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.GiveThought = {
  value : "GiveThought",
  text : "Give thought",
  desc : "Give a pawn a positive or negative thought",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.CreateStructure = {
  value : "CreateStructure",
  text : "Create structure",
  desc : "Spawn objects",
  type : EventTypes.NEUTRAL,
  conditions : [
    {value : "CreatedStructure", text : "Created structure"}
  ]
};

EventTypes.DestroyPosition = {
  value : "DestroyPosition",
  text : "Destroy position",
  desc : "Remove all objects from the position",
  type : EventTypes.SMALL_THREATS,
  conditions : []
};

EventTypes.Explosion = {
  value : "Explosion",
  text : "Explosion",
  desc : "Make things go boom",
  type : EventTypes.BIG_THREATS,
  conditions : []
};

EventTypes.RenamePawn = {
  value : "RenamePawn",
  text : "Rename pawn",
  desc : "Name a pawn for later reference",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.EditPawn = {
  value : "EditPawn",
  text : "Edit pawn",
  desc : "Change an existing pawn",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Rules = {
  value : "Rules",
  text : "Rules",
  desc : "Enforce specific game rules",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.Research = {
  value : "Research",
  text : "Research",
  desc : "Finish research projects",
  type : EventTypes.NEUTRAL,
  conditions : []
};

EventTypes.DeleteItems = {
  value : "DeleteItems",
  text : "Delete items",
  desc : "Remove a specific amount of items",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.OrbitalStrike = {
  value : "OrbitalStrike",
  text : "Orbital strike",
  desc : "Use a satellite to execute a space-to-ground attack",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

EventTypes.MentalBreak = {
  value : "MentalBreak",
  text : "Mental break",
  desc : "Give a pawn a mental break",
  type : EventTypes.GENERALLY_BAD,
  conditions : []
};

// EventTypes.Quest = {
//   value : "Quest",
//   text : "Quest",
//   desc : "Make a specific request to the colony",
//   type : EventTypes.GENERALLY_GOOD,
//   conditions : [
//     {value : "Quest", text : "Quest"}
//   ]
// };<!--Disabled because of compatibility issues between RW 1.0 and 1.1-->

EventTypes.TradeRequest = {
  value : "TradeRequest",
  text : "Trade request",
  desc : "Make a specific trade request to the colony",
  type : EventTypes.GENERALLY_GOOD,
  conditions : [
    {value : "Trade", text : "Trade"}
  ]
};

EventTypes.CreateSettlement = {
  value : "CreateSettlement",
  text : "Create settlement",
  desc : "Create a new settlement on the map",
  type : EventTypes.GENERALLY_GOOD,
  conditions : []
};

EventTypes.IntentGiver = {
  value : "IntentGiver",
  text : "Intent & Job-Giver",
  desc : "Make a pawn do something",
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
  {text : "Bubble message", value : EventTypes.BubbleMessage},
  {text : "Chapter splash", value : EventTypes.ChapterSplash},
  {text : "Control camera", value : EventTypes.ControlCamera},
  {text : "Cold snap/Heat wave", value : EventTypes.TempFlux},
  {text : "Crop blight", value : EventTypes.CropBlight},
  {text : "Create pawn", value : EventTypes.CreatePawn},
  {text : "Create settlement", value : EventTypes.CreateSettlement},
  {text : "Create structure", value : EventTypes.CreateStructure},
  {text : "Dialog", value : EventTypes.Dialog},
  {text : "Disable story event", value : EventTypes.DisableStoryEvent},
  {text : "Delete items", value : EventTypes.DeleteItems},
  {text : "Destroy position", value : EventTypes.DestroyPosition},
  {text : "Difficulty", value : EventTypes.Difficulty},
  {text : "Disease", value : EventTypes.Disease},
  {text : "(De)couple map", value : EventTypes.CoupleDecouple},
  {text : "Eclipse", value : EventTypes.Eclipse},
  {text : "Explosion", value : EventTypes.Explosion},
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
  {text : "Empty event", value : EventTypes.Nothing},
  {text : "On hit", value : EventTypes.OnHit},
  {text : "Orbital strike", value : EventTypes.OrbitalStrike},
  {text : "Planetkiller", value : EventTypes.Planetkiller},
  {text : "Point to", value : EventTypes.PointTo},
  {text : "Psychic drone", value : EventTypes.PsychicDrone},
  {text : "Psychic soothe", value : EventTypes.PsychicSoothe},
  {text : "Play audio", value : EventTypes.PlayAudio},
  {text : "Pawn health", value : EventTypes.PawnHealth},
  // {text : "Quest", value : EventTypes.Quest}, <!--Disabled because of compatibility issues between RW 1.0 and 1.1-->
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
  {text : "Transfer pawn", value : EventTypes.TransferPawn},
  {text : "Trader", value : EventTypes.TraderArrival},
  {text : "Time travel", value : EventTypes.TimeTravel},
  {text : "Trade request", value : EventTypes.TradeRequest},
  {text : "(Un)Fog", value : EventTypes.Unfog},
  {text : "Visitors", value : EventTypes.VisitorGroup},
  {text : "Volcanic winter", value : EventTypes.VolcanicWinter},
  {text : "Wild man wanders in", value : EventTypes.WildManWandersIn},
];

EventTypes.NativeEvents = [
  EventTypes.Alphabeavers,
  EventTypes.AmbrosiaSprout,
  EventTypes.AnimalInsanityMass,
  EventTypes.AnimalInsanitySingle,
  EventTypes.FarmAnimalsWanderIn,
  EventTypes.Aurora,
  EventTypes.TempFlux,
  EventTypes.CropBlight,
  EventTypes.Disease,
  EventTypes.Eclipse,
  EventTypes.Flashstorm,
  EventTypes.HerdMigration,
  EventTypes.Infestation,
  EventTypes.ManhunterPack,
  EventTypes.MeteoriteImpact,
  EventTypes.OrbitalStrike,
  EventTypes.PsychicDrone,
  EventTypes.PsychicSoothe,
  // EventTypes.Quest, <!--Disabled because of compatibility issues between RW 1.0 and 1.1-->
  EventTypes.RefugeePodCrash,
  EventTypes.RefugeeChased,
  EventTypes.ShipPartCrash,
  EventTypes.RaidEnemy,
  EventTypes.ResourcePodCrash,
  EventTypes.ShortCircuit,
  EventTypes.SolarFlare,
  EventTypes.SelfTame,
  EventTypes.ToxicFallout,
  EventTypes.TraderArrival,
  EventTypes.TradeRequest,
  EventTypes.VisitorGroup,
  EventTypes.VolcanicWinter,
  EventTypes.WildManWandersIn,
];

EventTypes.GodlikeEvents = [
  EventTypes.CreatePawn,
  EventTypes.CreateSettlement,
  EventTypes.CreateStructure,
  EventTypes.DeleteItems,
  EventTypes.DestroyPosition,
  EventTypes.Difficulty,
  EventTypes.CoupleDecouple,
  EventTypes.EditPawn,
  EventTypes.Explosion,
  EventTypes.GiveThought,
  EventTypes.HealPawn,
  EventTypes.IntentGiver,
  EventTypes.KillPawn,
  EventTypes.MentalBreak,
  EventTypes.OnHit,
  EventTypes.Planetkiller,
  EventTypes.PawnHealth,
  EventTypes.Rules,
  EventTypes.Research,
  EventTypes.SetRelation,
  EventTypes.TransferPawn,
  EventTypes.TimeTravel,
];

EventTypes.PresentationEvents = [
  EventTypes.BubbleMessage,
  EventTypes.ChapterSplash,
  EventTypes.ControlCamera,
  EventTypes.Dialog,
  EventTypes.DisableStoryEvent,
  EventTypes.FadeBlack,
  EventTypes.MovieMode,
  EventTypes.PointTo,
  EventTypes.PlayAudio,
  EventTypes.RadioMessage,
  EventTypes.ShowImage,
  EventTypes.SpeedControl,
  EventTypes.Unfog,
];

EventTypes.UtilityEvents = [
  EventTypes.RenameMap,
  EventTypes.Nothing,
  EventTypes.RenamePawn,
  EventTypes.SavePawnGroup,
];

EventTypes.EventsAsString = [
  "Alphabeavers",
  "Ambrosia sprouted",
  "Animal insanity all",
  "Animal insanity",
  "Animals join",
  "Aurora",
  "Bubble message",
  "Chapter splash",
  "Control camera",
  "Cold snap/Heat wave",
  "Crop blight",
  "Create pawn",
  "Create settlement",
  "Create structure",
  "Dialog",
  "Disable story event",
  "Delete items",
  "Destroy position",
  "Difficulty",
  "Disease",
  "(De)couple map",
  "Eclipse",
  "Explosion",
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
  "Empty event",
  "On hit",
  "Orbital strike",
  "Planetkiller",
  "Point to",
  "Psychic drone",
  "Psychic soothe",
  "Play audio",
  "Pawn health",
  // "Quest", <!--Disabled because of compatibility issues between RW 1.0 and 1.1-->
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
  "Transfer pawn",
  "Trader",
  "Time travel",
  "Trade request",
  "Visitors",
  "(Un)Fog",
  "Volcanic winter",
  "Wild man wanders in",
];

export default EventTypes;