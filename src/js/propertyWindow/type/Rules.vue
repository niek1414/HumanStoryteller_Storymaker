<template>
    <div class="info-box">
        <v-input class="property-box" messages="Explode pawns on death?">
            <v-switch
                    label="Explode on death"
                    v-model="selected.properties['ExplodeOnDeath']"
            ></v-switch>
        </v-input>

        <v-input class="property-box" v-if="selected.properties['ExplodeOnDeath'] !== undefined && selected.properties['ExplodeOnDeath']" messages="Explosion radius. Default ~6">
            <NumberField label="Explosion radius" :myModel.sync="selected.properties['ExplodeRadius']"></NumberField>
        </v-input>
        <v-input class="property-box" messages="Forbidden buildings. Clears old restrictions first.">
            <v-autocomplete
                    v-model="selected.properties['DisallowedBuildings']"
                    multiple
                    :items="buildings"
                    label="Forbidden buildings"
            ></v-autocomplete>
        </v-input>
        <v-input class="property-box" messages="Forbidden actions. Clears old restrictions first.">
            <v-autocomplete
                    messages="Forbidden actions. Clears old restrictions first."
                    v-model="selected.properties['DisallowedDesignators']"
                    multiple
                    :items="actions"
                    label="Forbidden actions"
            ></v-autocomplete>
        </v-input>
        <v-divider data-content="STATS"></v-divider>
        <v-input class="property-box" messages="Game stats" :key="refreshKey">
            <div style="width: 100%">
                <v-autocomplete
                        v-model="picked"
                        :items="availableStats"
                        label="Add stat"
                        :search-input.sync="search"
                ></v-autocomplete>
                <template v-for="(val, name) in selected.properties['Stats']" >
                    <v-card :key="name">
                        <v-card-title primary-title>{{name}}</v-card-title>
                        <v-card-text>
                            <v-input messages="Stat factor (2 is STAT * 2). Default is 1 which makes the stat normal.">
                                <NumberField label="Factor" :myModel.sync="selected.properties['Stats'][name]"></NumberField>
                            </v-input>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="error" v-on:click="function() {
                                search = '';
                                delete selected.properties['Stats'][name];
                                refreshKey++;
                            }">
                                remove
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    <br>
                </template>
            </div>
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "Rules",
    data : function() {
      if (this.selected.properties["Stats"] === undefined) {
        this.selected.properties["Stats"] = {};
      }
      return {
        refreshKey : 0,
        actions : [
          {value : "Designator_ZoneAdd_Growing", text : "Add growing zone"},
          {value : "Designator_ZoneAddStockpile_Resources", text : "Add resource stockpile"},
          {value : "Designator_ZoneAddStockpile_Dumping", text : "Add dumping stockpile"},
          {value : "Designator_Build", text : "Build"},
          {value : "Designator_Claim", text : "Claim"},
          {value : "Designator_Haul", text : "Haul"},
          {value : "Designator_Hunt", text : "Hunt"},
          {value : "Designator_Mine", text : "Mine"},
          {value : "Designator_Slaughter", text : "Slaughter"},
          {value : "Designator_Strip", text : "Strip"},
          {value : "Designator_Tame", text : "Tame"},
        ],
        buildings : [
          {value : "AnimalSleepingSpot", text : "Animal sleeping spot"},
          {value : "AnimalSleepingBox", text : "Animal sleeping box"},
          {value : "AnimalBed", text : "Animal bed"},
          {value : "Armchair", text : "Armchair"},
          {value : "Turret_Autocannon", text : "Autocannon turret"},
          {value : "Autodoor", text : "Autodoor"},
          {value : "Battery", text : "Battery"},
          {value : "Bed", text : "Bed"},
          {value : "Bedroll", text : "Bedroll"},
          {value : "BilliardsTable", text : "Billiards table"},
          {value : "BiofuelRefinery", text : "Biofuel refinery"},
          {value : "Brewery", text : "Brewery"},
          {value : "ButcherSpot", text : "Butcher spot"},
          {value : "TableButcher", text : "Butcher table"},
          {value : "Campfire", text : "Campfire"},
          {value : "CaravanPackingSpot", text : "Caravan packing spot"},
          {value : "ChemfuelPoweredGenerator", text : "Chemfuel powered generator"},
          {value : "ChessTable", text : "Chess table"},
          {value : "CommsConsole", text : "Comms console"},
          {value : "Cooler", text : "Cooler"},
          {value : "CraftingSpot", text : "Crafting spot"},
          {value : "CryptosleepCasket", text : "Cryptosleep casket"},
          {value : "DeepDrill", text : "Deep drill"},
          {value : "DiningChair", text : "Dining chair"},
          {value : "Door", text : "Door"},
          {value : "DoubleSleepingSpot", text : "Double sleeping spot"},
          {value : "DoubleBed", text : "Double bed"},
          {value : "BedrollDouble", text : "Double bedroll"},
          {value : "Dresser", text : "Dresser"},
          {value : "DrugLab", text : "Drug lab"},
          {value : "ElectricTailoringBench", text : "Electric tailor bench"},
          {value : "ElectricSmithy", text : "Electric smithy"},
          {value : "ElectricStove", text : "Electric stove"},
          {value : "ElectricSmelter", text : "Electric smelter"},
          {value : "ElectricCrematorium", text : "Electric crematorium"},
          {value : "EndTable", text : "End table"},
          {value : "FabricationBench", text : "Fabrication bench"},
          {value : "FermentingBarrel", text : "Fermenting barrel"},
          {value : "FirefoamPopper", text : "Firefoam popper"},
          {value : "FlatscreenTelevision", text : "Flatscreen television"},
          {value : "FueledSmithy", text : "Fueled smithy"},
          {value : "FueledStove", text : "Fueled stove"},
          {value : "GameOfUrBoard", text : "Game-of-Ur board"},
          {value : "GeothermalGenerator", text : "Geothermal generator"},
          {value : "Grave", text : "Grave"},
          {value : "GroundPenetratingScanner", text : "Ground-penetrating scanner"},
          {value : "HandTailoringBench", text : "Hand tailor bench"},
          {value : "Heater", text : "Heater"},
          {value : "HiTechResearchBench", text : "Hi-tech research bench"},
          {value : "HoopstoneRing", text : "Hoopstone ring"},
          {value : "Hopper", text : "Hopper"},
          {value : "HorseshoesPin", text : "Horseshoes pin"},
          {value : "HospitalBed", text : "Hospital bed"},
          {value : "HydroponicsBasin", text : "Hydroponics basin"},
          {value : "TrapIED_HighExplosive", text : "IED trap"},
          {value : "TrapIED_Incendiary", text : "IED incendiary trap"},
          {value : "TrapIED_EMP", text : "IED EMP trap"},
          {value : "TrapIED_Firefoam", text : "IED firefoam trap"},
          {value : "TrapIED_AntigrainWarhead", text : "IED antigrain warhead trap"},
          {value : "LongRangeMineralScanner", text : "Long-range mineral scanner"},
          {value : "TableMachining", text : "Machining table"},
          {value : "MarriageSpot", text : "Marriage spot"},
          {value : "Turret_MiniTurret", text : "Mini-turret"},
          {value : "MoisturePump", text : "Moisture pump"},
          {value : "Turret_Mortar", text : "Mortar"},
          {value : "MultiAnalyzer", text : "Multi-analyzer"},
          {value : "NutrientPasteDispenser", text : "Nutrient paste dispenser"},
          {value : "OrbitalTradeBeacon", text : "Orbital trade beacon"},
          {value : "PartySpot", text : "Party spot"},
          {value : "PassiveCooler", text : "Passive cooler"},
          {value : "PlantPot", text : "Plant pot"},
          {value : "PodLauncher", text : "Pod launcher"},
          {value : "PokerTable", text : "Poker table"},
          {value : "PowerConduit", text : "Power conduit"},
          {value : "PowerSwitch", text : "Power switch"},
          {value : "RoyalBed", text : "Royal bed"},
          {value : "Sandbags", text : "Sandbags"},
          {value : "Sarcophagus", text : "Sarcophagus"},
          {value : "TableSculpting", text : "Sculptor's table"},
          {value : "Ship_SensorCluster", text : "Sensor cluster"},
          {value : "Shelf", text : "Shelf"},
          {value : "Ship_Beam", text : "Ship structural beam"},
          {value : "Ship_CryptosleepCasket", text : "Ship cryptosleep casket"},
          {value : "Ship_ComputerCore", text : "Ship computer core"},
          {value : "Ship_Reactor", text : "Ship reactor"},
          {value : "Ship_Engine", text : "Ship engine"},
          {value : "SimpleResearchBench", text : "Simple research bench"},
          {value : "SleepingSpot", text : "Sleeping spot"},
          {value : "SolarGenerator", text : "Solar generator"},
          {value : "TrapSpike", text : "Spike trap"},
          {value : "StandingLamp", text : "Standing lamp"},
          {value : "StandingLamp_Red", text : "Standing lamp (red)"},
          {value : "StandingLamp_Green", text : "Standing lamp (green)"},
          {value : "StandingLamp_Blue", text : "Standing lamp (blue)"},
          {value : "TableStonecutter", text : "Stonecutter's table"},
          {value : "Stool", text : "Stool"},
          {value : "SunLamp", text : "Sun lamp"},
          {value : "Table1x2c", text : "Table (1x2)"},
          {value : "Table2x2c", text : "Table (2x2)"},
          {value : "Table2x4c", text : "Table (2x4)"},
          {value : "Table3x3c", text : "Table (3x3)"},
          {value : "ToolCabinet", text : "Tool cabinet"},
          {value : "TorchLamp", text : "Torch lamp"},
          {value : "TransportPod", text : "Transport pod"},
          {value : "TubeTelevision", text : "Tube television"},
          {value : "Turret_Sniper", text : "Uranium slug turret"},
          {value : "Vent", text : "Vent"},
          {value : "VitalsMonitor", text : "Vitals monitor"},
          {value : "Wall", text : "Wall"},
          {value : "WatermillGenerator", text : "Watermill generator"},
          {value : "WaterproofConduit", text : "Waterproof conduit"},
          {value : "WindTurbine", text : "Wind turbine"},
          {value : "WoodFiredGenerator", text : "Wood-fired generator"},
        ],
        availableStats : [
          {value : "AccuracyTouch", text : "Accuracy (close)"},
          {value : "AccuracyShort", text : "Accuracy (short)"},
          {value : "AccuracyMedium", text : "Accuracy (medium)"},
          {value : "AccuracyLong", text : "Accuracy (long)"},
          {value : "AimingDelayFactor", text : "Aiming time"},
          {value : "AnimalGatherSpeed", text : "Animal gather speed"},
          {value : "AnimalGatherYield", text : "Animal gather yield"},
          {value : "StuffEffectMultiplierArmor", text : "Armor - Material effect multiplier"},
          {value : "ArmorRating_Sharp", text : "Armor - Sharp"},
          {value : "ArmorRating_Blunt", text : "Armor - Blunt"},
          {value : "ArmorRating_Heat", text : "Armor - Heat"},
          {value : "StuffPower_Armor_Sharp", text : "Armor - Sharp"},
          {value : "StuffPower_Armor_Blunt", text : "Armor - Blunt"},
          {value : "StuffPower_Armor_Heat", text : "Armor - Heat"},
          {value : "Beauty", text : "Beauty"},
          {value : "BluntDamageMultiplier", text : "Blunt damage"},
          {value : "ButcheryFleshSpeed", text : "Butchery speed"},
          {value : "ButcheryFleshEfficiency", text : "Butchery efficiency"},
          {value : "CarryingCapacity", text : "Carrying capacity"},
          {value : "Cleanliness", text : "Cleanliness"},
          {value : "Comfort", text : "Comfort"},
          {value : "ConstructSuccessChance", text : "Construct success chance"},
          {value : "ConstructionSpeedFactor", text : "Construction speed"},
          {value : "ConstructionSpeed", text : "Construction speed"},
          {value : "CookSpeed", text : "Cooking speed"},
          {value : "RangedWeapon_DamageMultiplier", text : "Damage multiplier"},
          {value : "DeteriorationRate", text : "Deterioration rate"},
          {value : "DoorOpenSpeed", text : "Door opening speed"},
          {value : "DrugSynthesisSpeed", text : "Drug synthesis speed"},
          {value : "DrugCookingSpeed", text : "Drug cooking speed"},
          {value : "EatingSpeed", text : "Eating speed"},
          {value : "EquipDelay", text : "Equip delay"},
          {value : "Flammability", text : "Flammability"},
          {value : "FoodPoisonChanceFixedHuman", text : "Food poison chance"},
          {value : "FoodPoisonChance", text : "Food poison chance"},
          {value : "ForagedNutritionPerDay", text : "Foraged food amount"},
          {value : "GlobalLearningFactor", text : "Global learning factor"},
          {value : "WorkSpeedGlobal", text : "Global work speed"},
          {value : "HungerRateMultiplier", text : "Hunger rate multiplier"},
          {value : "HuntingStealth", text : "Hunting stealth"},
          {value : "ImmunityGainSpeedFactor", text : "Immunity gain speed factor"},
          {value : "ImmunityGainSpeed", text : "Immunity gain speed"},
          {value : "StuffEffectMultiplierInsulation_Cold", text : "Insulation - Cold - Material effect multiplier"},
          {value : "StuffEffectMultiplierInsulation_Heat", text : "Insulation - Heat - Material effect multiplier"},
          {value : "Insulation_Cold", text : "Insulation - Cold"},
          {value : "Insulation_Heat", text : "Insulation - Heat"},
          {value : "StuffPower_Insulation_Cold", text : "Insulation - Cold"},
          {value : "StuffPower_Insulation_Heat", text : "Insulation - Heat"},
          {value : "LeatherAmount", text : "Leather amount"},
          {value : "MarketValue", text : "Market value"},
          {value : "Mass", text : "Mass"},
          {value : "MaxHitPoints", text : "Max hit points"},
          {value : "ComfyTemperatureMax", text : "Maximum comfortable temperature"},
          {value : "MeatAmount", text : "Meat amount"},
          {value : "ButcheryMechanoidSpeed", text : "Mechanoid disassembly speed"},
          {value : "ButcheryMechanoidEfficiency", text : "Mechanoid disassembly efficiency"},
          {value : "MedicalPotency", text : "Medical potency"},
          {value : "MedicalQualityMax", text : "Medical tend quality maximum"},
          {value : "MedicalTendQualityOffset", text : "Medical tend quality offset"},
          {value : "MedicalTendSpeed", text : "Medical tend speed"},
          {value : "MedicalTendQuality", text : "Medical tend quality"},
          {value : "MedicalOperationSpeed", text : "Medical operation speed"},
          {value : "MedicalSurgerySuccessChance", text : "Medical surgery success chance"},
          {value : "MeleeDPS", text : "Melee DPS"},
          {value : "MeleeArmorPenetration", text : "Melee armor penetration"},
          {value : "MeleeHitChance", text : "Melee hit chance"},
          {value : "MeleeDodgeChance", text : "Melee dodge chance"},
          {value : "MeleeWeapon_AverageDPS", text : "Melee damage per second"},
          {value : "MeleeWeapon_AverageArmorPenetration", text : "Melee armor penetration"},
          {value : "MeleeWeapon_DamageMultiplier", text : "Melee damage multiplier"},
          {value : "MeleeWeapon_CooldownMultiplier", text : "Melee cooldown"},
          {value : "MentalBreakThreshold", text : "Mental break threshold"},
          {value : "ComfyTemperatureMin", text : "Minimum comfortable temperature"},
          {value : "MinimumHandlingSkill", text : "Minimum handling skill"},
          {value : "MiningSpeed", text : "Mining speed"},
          {value : "MiningYield", text : "Mining yield"},
          {value : "MoveSpeed", text : "Move speed"},
          {value : "NegotiationAbility", text : "Negotiation ability"},
          {value : "Nutrition", text : "Nutrition"},
          {value : "PainShockThreshold", text : "Pain shock threshold"},
          {value : "PlantWorkSpeed", text : "Plant work speed"},
          {value : "PlantHarvestYield", text : "Plant harvest yield"},
          {value : "PsychicSensitivity", text : "Psychic sensitivity"},
          {value : "RangedWeapon_Cooldown", text : "Ranged cooldown"},
          {value : "JoyGainFactor", text : "Recreation power"},
          {value : "FixBrokenDownBuildingSuccessChance", text : "Repair success chance"},
          {value : "ResearchSpeedFactor", text : "Research speed factor"},
          {value : "ResearchSpeed", text : "Research speed"},
          {value : "BedRestEffectiveness", text : "Rest effectiveness"},
          {value : "RestRateMultiplier", text : "Rest rate multiplier"},
          {value : "SculptingSpeed", text : "Sculpting speed"},
          {value : "SellPriceFactor", text : "Sell price multiplier"},
          {value : "SharpDamageMultiplier", text : "Sharp damage"},
          {value : "EnergyShieldEnergyMax", text : "Shield max energy"},
          {value : "EnergyShieldRechargeRate", text : "Shield recharge rate"},
          {value : "ShootingAccuracyTurret", text : "Shooting accuracy"},
          {value : "ShootingAccuracyPawn", text : "Shooting accuracy"},
          {value : "SmeltingSpeed", text : "Smelting speed"},
          {value : "SmithingSpeed", text : "Smithing speed"},
          {value : "SmokepopBeltRadius", text : "Smokepop belt radius"},
          {value : "SmoothingSpeed", text : "Smoothing speed"},
          {value : "SocialImpact", text : "Social impact"},
          {value : "SurgerySuccessChanceFactor", text : "Surgery success chance factor"},
          {value : "TailoringSpeed", text : "Tailoring speed"},
          {value : "TameAnimalChance", text : "Tame animal chance"},
          {value : "ToxicSensitivity", text : "Toxic sensitivity"},
          {value : "TradePriceImprovement", text : "Trade price improvement"},
          {value : "TrainAnimalChance", text : "Train animal chance"},
          {value : "TrapMeleeDamage", text : "Trap melee damage"},
          {value : "TrapSpringChance", text : "Trap spring chance"},
          {value : "UnskilledLaborSpeed", text : "Unskilled labor speed"},
          {value : "WorkToMake", text : "Work to make"},
          {value : "WorkToBuild", text : "Work to build"},
          {value : "WorkTableWorkSpeedFactor", text : "Work speed factor"},
          {value : "WorkTableEfficiencyFactor", text : "Work efficiency factor"},
        ],
        picked : null,
        search : "",
        clearOnce : false,
      }
    },
    watch : {
      picked(val) {
        if (val !== null && val !== undefined && val !== "") {
          if (this.selected.properties["Stats"] === undefined) {
            this.selected.properties["Stats"] = {};
          }
          this.selected.properties["Stats"][val] = 1;
          this.picked = "";
          this.clearOnce = true;
        }
      },

      search(val) {
        if (this.clearOnce) {
          this.search = "";
          this.clearOnce = false;
        }
      }
    },
  }
</script>

<style scoped>
</style>