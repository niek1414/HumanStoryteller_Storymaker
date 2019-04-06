<template>
    <div class="info-box">
        <v-input messages="Explode pawns on death?">
            <v-switch
                    label="Explode on death"
                    v-model="selected.properties['ExplodeOnDeath']"
            ></v-switch>
        </v-input>

        <v-input v-if="selected.properties['ExplodeOnDeath'] !== undefined && selected.properties['ExplodeOnDeath']" messages="Explosion radius. Default ~6">
            <NumberField label="Explosion radius" :myModel.sync="selected.properties['ExplodeRadius']"></NumberField>
        </v-input>
        <v-autocomplete messages="Forbidden buildings. Clears old restrictions first."
                        v-model="selected.properties['DisallowedBuildings']"
                        multiple
                        :items="buildings"
                        label="Forbidden buildings"
        ></v-autocomplete>
        <v-autocomplete messages="Forbidden actions. Clears old restrictions first."
                        v-model="selected.properties['DisallowedDesignators']"
                        multiple
                        :items="actions"
                        label="Forbidden actions"
        ></v-autocomplete>
        <v-divider data-content="STATS"></v-divider>
        <v-autocomplete
                v-model="picked"
                :items="availableStats"
                label="Add stat"
                :search-input.sync="search"
        ></v-autocomplete>
        <template v-for="(val, name) in selected.properties['Stats']">
            <v-card>
                <v-card-title primary-title>{{name}}</v-card-title>
                <v-card-text>
                    <v-input messages="Stat factor (2 is STAT * 2). Default is 1 which makes the stat normal.">
                        <NumberField label="Factor" :myModel.sync="selected.properties['Stats'][name]"></NumberField>
                    </v-input>
                </v-card-text>
                <v-card-actions>
                    <v-btn flat color="error" v-on:click="function() {
                    search = '';delete selected.properties['Stats'][name]
                    }">
                        remove
                    </v-btn>
                </v-card-actions>
            </v-card>
            <br>
        </template>
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
        actions : [
          {value : "Designator_ZoneAdd_Growing", text : "Add growing zone"},
          {value : "Designator_Mine", text : "Mine"},
          {value : "Designator_Hunt", text : "Hunt"},
          {value : "Designator_Tame", text : "Tame"},
          {value : "Designator_Build", text : "Build"},
          {value : "Designator_Claim", text : "Claim"},
          {value : "Designator_Slaughter", text : "Slaughter"},
          {value : "Designator_Haul", text : "Haul"},
          {value : "Designator_Strip", text : "Strip"},
          {value : "Designator_ZoneAddStockpile_Resources", text : "Add resource stockpile"},
          {value : "Designator_ZoneAddStockpile_Dumping", text : "Add dumping stockpile"},
        ],
        buildings : [
          {value : "SleepingSpot", text : "Sleeping spot"},
          {value : "DoubleSleepingSpot", text : "Double sleeping spot"},
          {value : "Bed", text : "Bed"},
          {value : "DoubleBed", text : "Double bed"},
          {value : "RoyalBed", text : "Royal bed"},
          {value : "HospitalBed", text : "Hospital bed"},
          {value : "Bedroll", text : "Bedroll"},
          {value : "BedrollDouble", text : "Double bedroll"},
          {value : "AnimalSleepingSpot", text : "Animal sleeping spot"},
          {value : "AnimalSleepingBox", text : "Animal sleeping box"},
          {value : "AnimalBed", text : "Animal bed"},
          {value : "Stool", text : "Stool"},
          {value : "DiningChair", text : "Dining chair"},
          {value : "Armchair", text : "Armchair"},
          {value : "EndTable", text : "End table"},
          {value : "Table1x2c", text : "Table (1x2)"},
          {value : "Table2x2c", text : "Table (2x2)"},
          {value : "Table2x4c", text : "Table (2x4)"},
          {value : "Table3x3c", text : "Table (3x3)"},
          {value : "PlantPot", text : "Plant pot"},
          {value : "TorchLamp", text : "Torch lamp"},
          {value : "StandingLamp", text : "Standing lamp"},
          {value : "StandingLamp_Red", text : "Standing lamp (red)"},
          {value : "StandingLamp_Green", text : "Standing lamp (green)"},
          {value : "StandingLamp_Blue", text : "Standing lamp (blue)"},
          {value : "SunLamp", text : "Sun lamp"},
          {value : "Shelf", text : "Shelf"},
          {value : "Dresser", text : "Dresser"},
          {value : "HorseshoesPin", text : "Horseshoes pin"},
          {value : "HoopstoneRing", text : "Hoopstone ring"},
          {value : "GameOfUrBoard", text : "Game-of-Ur board"},
          {value : "ChessTable", text : "Chess table"},
          {value : "PokerTable", text : "Poker table"},
          {value : "BilliardsTable", text : "Billiards table"},
          {value : "TubeTelevision", text : "Tube television"},
          {value : "FlatscreenTelevision", text : "Flatscreen television"},
          {value : "OrbitalTradeBeacon", text : "Orbital trade beacon"},
          {value : "CommsConsole", text : "Comms console"},
          {value : "FirefoamPopper", text : "Firefoam popper"},
          {value : "MoisturePump", text : "Moisture pump"},
          {value : "GroundPenetratingScanner", text : "Ground-penetrating scanner"},
          {value : "LongRangeMineralScanner", text : "Long-range mineral scanner"},
          {value : "PodLauncher", text : "Pod launcher"},
          {value : "TransportPod", text : "Transport pod"},
          {value : "MultiAnalyzer", text : "Multi-analyzer"},
          {value : "VitalsMonitor", text : "Vitals monitor"},
          {value : "ToolCabinet", text : "Tool cabinet"},
          {value : "Grave", text : "Grave"},
          {value : "Sarcophagus", text : "Sarcophagus"},
          {value : "CryptosleepCasket", text : "Cryptosleep casket"},
          {value : "MarriageSpot", text : "Marriage spot"},
          {value : "PartySpot", text : "Party spot"},
          {value : "CaravanPackingSpot", text : "Caravan packing spot"},
          {value : "PowerConduit", text : "Power conduit"},
          {value : "WaterproofConduit", text : "Waterproof conduit"},
          {value : "PowerSwitch", text : "Power switch"},
          {value : "WoodFiredGenerator", text : "Wood-fired generator"},
          {value : "ChemfuelPoweredGenerator", text : "Chemfuel powered generator"},
          {value : "WindTurbine", text : "Wind turbine"},
          {value : "Battery", text : "Battery"},
          {value : "SolarGenerator", text : "Solar generator"},
          {value : "GeothermalGenerator", text : "Geothermal generator"},
          {value : "WatermillGenerator", text : "Watermill generator"},
          {value : "CraftingSpot", text : "Crafting spot"},
          {value : "ButcherSpot", text : "Butcher spot"},
          {value : "TableSculpting", text : "Sculptor's table"},
          {value : "TableButcher", text : "Butcher table"},
          {value : "HandTailoringBench", text : "Hand tailor bench"},
          {value : "ElectricTailoringBench", text : "Electric tailor bench"},
          {value : "FueledSmithy", text : "Fueled smithy"},
          {value : "ElectricSmithy", text : "Electric smithy"},
          {value : "TableMachining", text : "Machining table"},
          {value : "ElectricStove", text : "Electric stove"},
          {value : "FueledStove", text : "Fueled stove"},
          {value : "TableStonecutter", text : "Stonecutter's table"},
          {value : "Brewery", text : "Brewery"},
          {value : "DrugLab", text : "Drug lab"},
          {value : "ElectricSmelter", text : "Electric smelter"},
          {value : "BiofuelRefinery", text : "Biofuel refinery"},
          {value : "FabricationBench", text : "Fabrication bench"},
          {value : "SimpleResearchBench", text : "Simple research bench"},
          {value : "HiTechResearchBench", text : "Hi-tech research bench"},
          {value : "ElectricCrematorium", text : "Electric crematorium"},
          {value : "HydroponicsBasin", text : "Hydroponics basin"},
          {value : "FermentingBarrel", text : "Fermenting barrel"},
          {value : "DeepDrill", text : "Deep drill"},
          {value : "NutrientPasteDispenser", text : "Nutrient paste dispenser"},
          {value : "Hopper", text : "Hopper"},
          {value : "Sandbags", text : "Sandbags"},
          {value : "Turret_MiniTurret", text : "Mini-turret"},
          {value : "Turret_Autocannon", text : "Autocannon turret"},
          {value : "Turret_Sniper", text : "Uranium slug turret"},
          {value : "Turret_Mortar", text : "Mortar"},
          {value : "TrapSpike", text : "Spike trap"},
          {value : "TrapIED_HighExplosive", text : "IED trap"},
          {value : "TrapIED_Incendiary", text : "IED incendiary trap"},
          {value : "TrapIED_EMP", text : "IED EMP trap"},
          {value : "TrapIED_Firefoam", text : "IED firefoam trap"},
          {value : "TrapIED_AntigrainWarhead", text : "IED antigrain warhead trap"},
          {value : "Ship_Beam", text : "Ship structural beam"},
          {value : "Ship_CryptosleepCasket", text : "Ship cryptosleep casket"},
          {value : "Ship_ComputerCore", text : "Ship computer core"},
          {value : "Ship_Reactor", text : "Ship reactor"},
          {value : "Ship_Engine", text : "Ship engine"},
          {value : "Ship_SensorCluster", text : "Sensor cluster"},
          {value : "Door", text : "Door"},
          {value : "Autodoor", text : "Autodoor"},
          {value : "Wall", text : "Wall"},
          {value : "Campfire", text : "Campfire"},
          {value : "PassiveCooler", text : "Passive cooler"},
          {value : "Heater", text : "Heater"},
          {value : "Cooler", text : "Cooler"},
          {value : "Vent", text : "Vent"},
        ],
        availableStats : [
          {value : "StuffEffectMultiplierInsulation_Cold", text : "Insulation - Cold - Material effect multiplier"},
          {value : "StuffEffectMultiplierInsulation_Heat", text : "Insulation - Heat - Material effect multiplier"},
          {value : "StuffEffectMultiplierArmor", text : "Armor - Material effect multiplier"},
          {value : "ArmorRating_Sharp", text : "Armor - Sharp"},
          {value : "ArmorRating_Blunt", text : "Armor - Blunt"},
          {value : "ArmorRating_Heat", text : "Armor - Heat"},
          {value : "Insulation_Cold", text : "Insulation - Cold"},
          {value : "Insulation_Heat", text : "Insulation - Heat"},
          {value : "EnergyShieldEnergyMax", text : "Shield max energy"},
          {value : "EnergyShieldRechargeRate", text : "Shield recharge rate"},
          {value : "SmokepopBeltRadius", text : "Smokepop belt radius"},
          {value : "EquipDelay", text : "Equip delay"},
          {value : "MaxHitPoints", text : "Max hit points"},
          {value : "Mass", text : "Mass"},
          {value : "MarketValue", text : "Market value"},
          {value : "SellPriceFactor", text : "Sell price multiplier"},
          {value : "Flammability", text : "Flammability"},
          {value : "WorkToMake", text : "Work to make"},
          {value : "DeteriorationRate", text : "Deterioration rate"},
          {value : "Beauty", text : "Beauty"},
          {value : "Cleanliness", text : "Cleanliness"},
          {value : "Comfort", text : "Comfort"},
          {value : "Nutrition", text : "Nutrition"},
          {value : "FoodPoisonChanceFixedHuman", text : "Food poison chance"},
          {value : "ShootingAccuracyTurret", text : "Shooting accuracy"},
          {value : "MedicalPotency", text : "Medical potency"},
          {value : "MedicalQualityMax", text : "Medical tend quality maximum"},
          {value : "ConstructionSpeedFactor", text : "Construction speed"},
          {value : "WorkToBuild", text : "Work to build"},
          {value : "DoorOpenSpeed", text : "Door opening speed"},
          {value : "BedRestEffectiveness", text : "Rest effectiveness"},
          {value : "TrapMeleeDamage", text : "Trap melee damage"},
          {value : "TrapSpringChance", text : "Trap spring chance"},
          {value : "ResearchSpeedFactor", text : "Research speed factor"},
          {value : "MedicalTendQualityOffset", text : "Medical tend quality offset"},
          {value : "ImmunityGainSpeedFactor", text : "Immunity gain speed factor"},
          {value : "WorkTableWorkSpeedFactor", text : "Work speed factor"},
          {value : "WorkTableEfficiencyFactor", text : "Work efficiency factor"},
          {value : "JoyGainFactor", text : "Recreation power"},
          {value : "SurgerySuccessChanceFactor", text : "Surgery success chance factor"},
          {value : "MeleeDPS", text : "Melee DPS"},
          {value : "MeleeArmorPenetration", text : "Melee armor penetration"},
          {value : "MeleeHitChance", text : "Melee hit chance"},
          {value : "MeleeDodgeChance", text : "Melee dodge chance"},
          {value : "ShootingAccuracyPawn", text : "Shooting accuracy"},
          {value : "AimingDelayFactor", text : "Aiming time"},
          {value : "MoveSpeed", text : "Move speed"},
          {value : "MentalBreakThreshold", text : "Mental break threshold"},
          {value : "PsychicSensitivity", text : "Psychic sensitivity"},
          {value : "ToxicSensitivity", text : "Toxic sensitivity"},
          {value : "GlobalLearningFactor", text : "Global learning factor"},
          {value : "HungerRateMultiplier", text : "Hunger rate multiplier"},
          {value : "RestRateMultiplier", text : "Rest rate multiplier"},
          {value : "EatingSpeed", text : "Eating speed"},
          {value : "ComfyTemperatureMin", text : "Minimum comfortable temperature"},
          {value : "ComfyTemperatureMax", text : "Maximum comfortable temperature"},
          {value : "ImmunityGainSpeed", text : "Immunity gain speed"},
          {value : "CarryingCapacity", text : "Carrying capacity"},
          {value : "MeatAmount", text : "Meat amount"},
          {value : "LeatherAmount", text : "Leather amount"},
          {value : "MinimumHandlingSkill", text : "Minimum handling skill"},
          {value : "PainShockThreshold", text : "Pain shock threshold"},
          {value : "ForagedNutritionPerDay", text : "Foraged food amount"},
          {value : "NegotiationAbility", text : "Negotiation ability"},
          {value : "TradePriceImprovement", text : "Trade price improvement"},
          {value : "SocialImpact", text : "Social impact"},
          {value : "TameAnimalChance", text : "Tame animal chance"},
          {value : "TrainAnimalChance", text : "Train animal chance"},
          {value : "WorkSpeedGlobal", text : "Global work speed"},
          {value : "MiningSpeed", text : "Mining speed"},
          {value : "MiningYield", text : "Mining yield"},
          {value : "SmoothingSpeed", text : "Smoothing speed"},
          {value : "ResearchSpeed", text : "Research speed"},
          {value : "AnimalGatherSpeed", text : "Animal gather speed"},
          {value : "AnimalGatherYield", text : "Animal gather yield"},
          {value : "PlantWorkSpeed", text : "Plant work speed"},
          {value : "PlantHarvestYield", text : "Plant harvest yield"},
          {value : "HuntingStealth", text : "Hunting stealth"},
          {value : "ConstructionSpeed", text : "Construction speed"},
          {value : "ConstructSuccessChance", text : "Construct success chance"},
          {value : "FixBrokenDownBuildingSuccessChance", text : "Repair success chance"},
          {value : "MedicalTendSpeed", text : "Medical tend speed"},
          {value : "MedicalTendQuality", text : "Medical tend quality"},
          {value : "MedicalOperationSpeed", text : "Medical operation speed"},
          {value : "MedicalSurgerySuccessChance", text : "Medical surgery success chance"},
          {value : "UnskilledLaborSpeed", text : "Unskilled labor speed"},
          {value : "SculptingSpeed", text : "Sculpting speed"},
          {value : "TailoringSpeed", text : "Tailoring speed"},
          {value : "SmithingSpeed", text : "Smithing speed"},
          {value : "DrugSynthesisSpeed", text : "Drug synthesis speed"},
          {value : "CookSpeed", text : "Cooking speed"},
          {value : "FoodPoisonChance", text : "Food poison chance"},
          {value : "DrugCookingSpeed", text : "Drug cooking speed"},
          {value : "ButcheryFleshSpeed", text : "Butchery speed"},
          {value : "ButcheryMechanoidSpeed", text : "Mechanoid disassembly speed"},
          {value : "ButcheryFleshEfficiency", text : "Butchery efficiency"},
          {value : "ButcheryMechanoidEfficiency", text : "Mechanoid disassembly efficiency"},
          {value : "SmeltingSpeed", text : "Smelting speed"},
          {value : "StuffPower_Armor_Sharp", text : "Armor - Sharp"},
          {value : "StuffPower_Armor_Blunt", text : "Armor - Blunt"},
          {value : "StuffPower_Armor_Heat", text : "Armor - Heat"},
          {value : "StuffPower_Insulation_Cold", text : "Insulation - Cold"},
          {value : "StuffPower_Insulation_Heat", text : "Insulation - Heat"},
          {value : "MeleeWeapon_AverageDPS", text : "Melee damage per second"},
          {value : "MeleeWeapon_AverageArmorPenetration", text : "Melee armor penetration"},
          {value : "MeleeWeapon_DamageMultiplier", text : "Melee damage multiplier"},
          {value : "MeleeWeapon_CooldownMultiplier", text : "Melee cooldown"},
          {value : "SharpDamageMultiplier", text : "Sharp damage"},
          {value : "BluntDamageMultiplier", text : "Blunt damage"},
          {value : "AccuracyTouch", text : "Accuracy (close)"},
          {value : "AccuracyShort", text : "Accuracy (short)"},
          {value : "AccuracyMedium", text : "Accuracy (medium)"},
          {value : "AccuracyLong", text : "Accuracy (long)"},
          {value : "RangedWeapon_Cooldown", text : "Ranged cooldown"},
          {value : "RangedWeapon_DamageMultiplier", text : "Damage multiplier"},
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
    .info-box {
        margin: 30px;
    }
</style>