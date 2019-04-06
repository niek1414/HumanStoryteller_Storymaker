<template>
    <div class="info-box">
        <v-input messages="Names of pawns to give thought.">
            <v-combobox
                    v-model="selected.properties['Names']"
                    :items="[]"
                    multiple
                    small-chips
            >
                <template slot="no-data">
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                Press <kbd>enter</kbd> to create a new name
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-combobox>
        </v-input>
        <v-input messages="Thought type (Select *custom* to make your own)">
            <v-autocomplete
                    v-model="selected.properties['ThoughtType']"
                    :items="thoughtTypes"
                    label="Thoughts"
            ></v-autocomplete>
        </v-input>
        <template v-if="selected.properties['ThoughtType'] === 'custom'">
            <v-input messages="Label of thought">
                <v-text-field label="Label text" type="text" v-model="selected.properties['ThoughtLabel']"></v-text-field>
            </v-input>
            <v-input messages="Description of thought">
                <v-text-field label="Description text" type="text" v-model="selected.properties['ThoughtDescription']"></v-text-field>
            </v-input>
            <v-input messages="Mood boost (if bigger than 0) or mood loss (if lower than 0)">
                <NumberField label="Thought effect" :myModel.sync="selected.properties['ThoughtEffect']"></NumberField>
            </v-input>
            <v-input messages="Thought duration in days">
                <NumberField label="Thought duration" :myModel.sync="selected.properties['ThoughtDuration']"></NumberField>
            </v-input>
        </template>
        <template v-else-if="selected.properties['ThoughtType'] !=='' && selected.properties['ThoughtType'] !== undefined && selected.properties['ThoughtType'] !== 'custom'">
            <v-input messages="Name of other pawn (if type contains {0})">
                <v-text-field label="Other pawn" type="text" v-model="selected.properties['OtherPawn']"></v-text-field>
            </v-input>
        </template>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  export default {
    components : {NumberField},
    props : ["selected"],
    name : "GiveThought",
    data : function() {
      return {
        thoughtTypes : [
          {value : "custom", text : "*Custom*"},
          {value : "Inebriated", text : "alcohol warmth"},
          {value : "Hungover", text : "mild hangover"},
          {value : "AlcoholWithdrawal", text : "alcohol withdrawal"},
          {value : "AmbrosiaHigh", text : "ambrosia warmth"},
          {value : "AmbrosiaWithdrawal", text : "ambrosia withdrawal"},
          {value : "GoJuiceHigh", text : "high on go-juice"},
          {value : "GoJuiceWithdrawal", text : "go-juice withdrawal"},
          {value : "FlakeHigh", text : "high on flake"},
          {value : "PsychiteTeaHigh", text : "psychite tea"},
          {value : "YayoHigh", text : "high on yayo"},
          {value : "PsychiteWithdrawal", text : "psychite withdrawal"},
          {value : "SmokeleafHigh", text : "high on smokeleaf"},
          {value : "SmokeleafWithdrawal", text : "smokeleaf withdrawal"},
          {value : "WakeUpWithdrawal", text : "wake-up withdrawal"},
          {value : "LowExpectations", text : "sky-high expectations"},
          {value : "KnowGuestExecuted", text : "justified execution"},
          {value : "KnowColonistExecuted", text : "justified execution of colonist"},
          {value : "KnowPrisonerDiedInnocent", text : "innocent prisoner died"},
          {value : "KnowColonistDied", text : "colonist died"},
          {value : "BondedAnimalDied", text : "bonded animal {0} died"},
          {value : "PawnWithGoodOpinionDied", text : "my friend {0} died"},
          {value : "PawnWithBadOpinionDied", text : "my rival {0} died"},
          {value : "MySonDied", text : "my son {0} died"},
          {value : "MyDaughterDied", text : "my daughter {0} died"},
          {value : "MyHusbandDied", text : "my husband {0} died"},
          {value : "MyWifeDied", text : "my wife {0} died"},
          {value : "MyFianceDied", text : "my fiance {0} died"},
          {value : "MyFianceeDied", text : "my fiancée {0} died"},
          {value : "MyLoverDied", text : "my lover {0} died"},
          {value : "MyBrotherDied", text : "my brother {0} died"},
          {value : "MySisterDied", text : "my sister {0} died"},
          {value : "MyGrandchildDied", text : "my grandchild {0} died"},
          {value : "MyFatherDied", text : "my father {0} died"},
          {value : "MyMotherDied", text : "my mother {0} died"},
          {value : "MyNieceDied", text : "my niece {0} died"},
          {value : "MyNephewDied", text : "my nephew {0} died"},
          {value : "MyHalfSiblingDied", text : "my half-sibling {0} died"},
          {value : "MyAuntDied", text : "my aunt {0} died"},
          {value : "MyUncleDied", text : "my uncle {0} died"},
          {value : "MyGrandparentDied", text : "my grandparent {0} died"},
          {value : "MyCousinDied", text : "my cousin {0} died"},
          {value : "MyKinDied", text : "my kin {0} died"},
          {value : "DebugBad", text : "debug bad thought"},
          {value : "DebugGood", text : "debug good thought"},
          {value : "AteLavishMeal", text : "ate lavish meal"},
          {value : "AteFineMeal", text : "ate fine meal"},
          {value : "AteAwfulMeal", text : "ate awful meal"},
          {value : "AteRawFood", text : "ate raw food"},
          {value : "AteKibble", text : "ate kibble"},
          {value : "AteCorpse", text : "ate corpse"},
          {value : "AteHumanlikeMeatDirect", text : "raw cannibalism"},
          {value : "AteHumanlikeMeatDirectCannibal", text : "raw cannibalism"},
          {value : "AteHumanlikeMeatAsIngredient", text : "cooked cannibalism"},
          {value : "AteHumanlikeMeatAsIngredientCannibal", text : "cooked cannibalism"},
          {value : "AteInsectMeatDirect", text : "ate insect meat"},
          {value : "AteInsectMeatAsIngredient", text : "ate cooked insect meat"},
          {value : "AteRottenFood", text : "ate rotten food"},
          {value : "GotMarried", text : "got married to {0}"},
          {value : "AttendedWedding", text : "attended wedding"},
          {value : "AttendedParty", text : "attended party"},
          {value : "AteWithoutTable", text : "ate without table"},
          {value : "SleepDisturbed", text : "disturbed sleep"},
          {value : "NewColonyOptimism", text : "initial optimism"},
          {value : "NewColonyHope", text : "initial hope"},
          {value : "SleptOutside", text : "slept outside"},
          {value : "SleptOnGround", text : "slept on ground"},
          {value : "SleptInCold", text : "slept in the cold"},
          {value : "SleptInHeat", text : "slept in the heat"},
          {value : "KnowPrisonerSold", text : "a prisoner was sold"},
          {value : "KnowGuestOrganHarvested", text : "someone's organ harvested"},
          {value : "KnowColonistOrganHarvested", text : "colonist's organ harvested"},
          {value : "MyOrganHarvested", text : "my organ harvested"},
          {value : "WasImprisoned", text : "was imprisoned"},
          {value : "Catharsis", text : "catharsis"},
          {value : "Nuzzled", text : "nuzzled"},
          {value : "KnowBuriedInSarcophagus", text : "buried in sarcophagus"},
          {value : "SoakingWet", text : "soaking wet"},
          {value : "ButcheredHumanlikeCorpse", text : "I butchered humanlike"},
          {value : "KnowButcheredHumanlikeCorpse", text : "we butchered humanlike"},
          {value : "ObservedLayingCorpse", text : "observed corpse"},
          {value : "ObservedLayingRottingCorpse", text : "observed rotting corpse"},
          {value : "WitnessedDeathAlly", text : "witnessed ally's death"},
          {value : "WitnessedDeathNonAlly", text : "witnessed outsider's death"},
          {value : "WitnessedDeathFamily", text : "witnessed family member's death"},
          {value : "WitnessedDeathBloodlust", text : "witnessed death with bloodlust"},
          {value : "KilledHumanlikeBloodlust", text : "killed someone"},
          {value : "DefeatedHostileFactionLeader", text : "defeated hostile leader {0}"},
          {value : "DefeatedHostileFactionLeaderOpinion", text : "defeated hostile leader"},
          {value : "ColonistBanished", text : "colonist banished"},
          {value : "ColonistBanishedToDie", text : "colonist banished to death"},
          {value : "PrisonerBanishedToDie", text : "prisoner banished to death"},
          {value : "BondedAnimalBanished", text : "bonded animal {0} banished"},
          {value : "FailedToRescueRelative", text : "failed to rescue {0}"},
          {value : "RescuedRelative", text : "rescued {0}"},
          {value : "Rescued", text : "rescued"},
          {value : "AteInImpressiveDiningRoom", text : "decent dining room"},
          {value : "JoyActivityInImpressiveRecRoom", text : "decent rec room"},
          {value : "SleptInBedroom", text : "awful bedroom"},
          {value : "SleptInBarracks", text : "awful barrack"},
          {value : "Chitchat", text : "chitchat"},
          {value : "DeepTalk", text : "deep talk"},
          {value : "Slighted", text : "slighted"},
          {value : "Insulted", text : "insulted"},
          {value : "InsultedMood", text : "insulted"},
          {value : "KindWords", text : "kind words"},
          {value : "KindWordsMood", text : "kind words"},
          {value : "RapportBuilt", text : "rapport built"},
          {value : "HadAngeringFight", text : "angering fight"},
          {value : "HadCatharticFight", text : "cathartic fight"},
          {value : "HarmedMe", text : "harmed me"},
          {value : "BotchedMySurgery", text : "botched my surgery"},
          {value : "RescuedMe", text : "rescued me"},
          {value : "RecruitedMe", text : "recruited me"},
          {value : "CrashedTogether", text : "crashed together"},
          {value : "SoldMyLovedOne", text : "loved one sold"},
          {value : "SoldMyBondedAnimal", text : "bonded animal sold"},
          {value : "ForcedMeToTakeDrugs", text : "forced me to take drugs"},
          {value : "ForcedMeToTakeDrugsMood", text : "forced to take drugs"},
          {value : "ForcedMeToTakeLuciferium", text : "forced me to take luciferium"},
          {value : "ForcedMeToTakeLuciferiumMood", text : "forced to take luciferium"},
          {value : "RebuffedMyRomanceAttempt", text : "rebuffed me"},
          {value : "RebuffedMyRomanceAttemptMood", text : "rebuffed by {0}"},
          {value : "FailedRomanceAttemptOnMe", text : "failed to romance me"},
          {value : "FailedRomanceAttemptOnMeLowOpinionMood", text : "had to rebuff {0}"},
          {value : "BrokeUpWithMe", text : "broke up with me"},
          {value : "BrokeUpWithMeMood", text : "broken up with by {0}"},
          {value : "CheatedOnMe", text : "cheated on me"},
          {value : "CheatedOnMeMood", text : "cheated on by {0}"},
          {value : "DivorcedMe", text : "divorced me"},
          {value : "DivorcedMeMood", text : "divorced by {0}"},
          {value : "RejectedMyProposal", text : "rejected my proposal"},
          {value : "RejectedMyProposalMood", text : "my proposal was rejected by {0}"},
          {value : "IRejectedTheirProposal", text : "I rejected their proposal"},
          {value : "HoneymoonPhase", text : "honeymoon phase"},
          {value : "GotSomeLovin", text : "got some lovin’"},
          {value : "KilledMyFriend", text : "killed my friend"},
          {value : "KilledMyRival", text : "killed my rival"},
          {value : "KilledMyLover", text : "killed my lover"},
          {value : "KilledMyFiance", text : "killed my fiance"},
          {value : "KilledMySpouse", text : "killed my spouse"},
          {value : "KilledMyFather", text : "killed my father"},
          {value : "KilledMyMother", text : "killed my mother"},
          {value : "KilledMySon", text : "killed my son"},
          {value : "KilledMyDaughter", text : "killed my daughter"},
          {value : "KilledMyBrother", text : "killed my brother"},
          {value : "KilledMySister", text : "killed my sister"},
          {value : "KilledMyKin", text : "killed my kin"},
          {value : "KilledMyBondedAnimal", text : "killed my bonded animal"},
          {value : "ArtifactMoodBoost", text : "strange feeling"},
          {value : "EnvironmentDark", text : "darkness"},
          {value : "ApparelDamaged", text : "ratty apparel"},
          {value : "DeadMansApparel", text : "tainted {0}"},
          {value : "HumanLeatherApparelSad", text : "human leather {0}"},
          {value : "HumanLeatherApparelHappy", text : "human leather {0}"},
          {value : "Sick", text : "sick"},
          {value : "EnvironmentCold", text : "chilly"},
          {value : "EnvironmentHot", text : "sweaty"},
          {value : "NeedFood", text : "hungry"},
          {value : "NeedRest", text : "drowsy"},
          {value : "NeedJoy", text : "recreation-starved"},
          {value : "NeedComfort", text : "uncomfortable"},
          {value : "NeedBeauty", text : "hideous environment"},
          {value : "NeedRoomSize", text : "confined interior"},
          {value : "NeedOutdoors", text : "entombed underground"},
          {value : "PrisonCell", text : "awful prison cell"},
          {value : "PrisonBarracks", text : "awful barrack"},
          {value : "HospitalPatientRoomStats", text : "awful hospital"},
          {value : "Affair", text : "affair"},
          {value : "Incestuous", text : "incestuous"},
          {value : "Disfigured", text : "disfigured"},
          {value : "HardWorkerVsLazy", text : "hard worker vs lazy"},
          {value : "TeetotalerVsChemicalInterest", text : "teetotaler vs chemical interest"},
          {value : "TeetotalerVsAddict", text : "teetotaler vs addict"},
          {value : "ChemicalInterestVsTeetotaler", text : "chemical interest vs teetotaler"},
          {value : "Drunk", text : "drunk"},
          {value : "Pretty", text : "pretty"},
          {value : "Ugly", text : "ugly"},
          {value : "AnnoyingVoice", text : "annoying voice"},
          {value : "CreepyBreathing", text : "creepy breathing"},
          {value : "Man", text : "man"},
          {value : "Woman", text : "woman"},
          {value : "TranshumanistAppreciation", text : "transhumanist appreciation"},
          {value : "BodyPuristDisgust", text : "body purist disgust"},
          {value : "ButcheredHumanlikeCorpseOpinion", text : "butchered humanlike corpse"},
          {value : "AteRawHumanlikeMeat", text : "ate raw humanlike meat"},
          {value : "SoldPrisoner", text : "sold prisoner to slavery"},
          {value : "ExecutedPrisoner", text : "executed prisoner"},
          {value : "KilledColonist", text : "killed colonist"},
          {value : "KilledColonyAnimal", text : "killed colony animal"},
          {value : "OpinionOfMyLover", text : "opinion of my {0} {1}"},
          {value : "BondedAnimalMaster", text : "{0}'s master"},
          {value : "NotBondedAnimalMaster", text : "not {0}'s master"},
          {value : "WantToSleepWithSpouseOrLover", text : "want to sleep with {0}"},
          {value : "SharedBed", text : "sharing bed"},
          {value : "ColonistLeftUnburied", text : "colonist left unburied"},
          {value : "Naked", text : "naked"},
          {value : "Pain", text : "minor pain"},
          {value : "PsychicEmanatorSoothe", text : "psychic emanator soothe"},
          {value : "PsychicDrone", text : "psychic soothe"},
          {value : "Joywire", text : "joywire"},
          {value : "Aurora", text : "beautiful aurora"},
          {value : "DoingPassionateWork", text : "minor passion for my work"},
          {value : "MasochistPain", text : "masochist in minor pain"},
          {value : "ProsthophileNoProsthetic", text : "transhumanist frustrated"},
          {value : "ProsthophileHappy", text : "transhumanist pleased"},
          {value : "ProsthophobeUnhappy", text : "body purist squeamish"},
          {value : "BrawlerUnhappy", text : "brawler has ranged weapon"},
          {value : "PyromaniacHappy", text : "pyromaniac has incendiary weapon"},
          {value : "ClothedNudist", text : "constraining clothes"},
          {value : "HappyNude", text : "happily nude"},
          {value : "NightOwlDuringTheDay", text : "night owl in daytime"},
          {value : "NightOwlDuringTheNight", text : "night owl at night"},
          {value : "Greedy", text : "greedy for impressive bedroom"},
          {value : "Jealous", text : "jealous of {0}'s bedroom"},
          {value : "Ascetic", text : "ascetic has awful bedroom"},
          {value : "MoodOffsetSanguine", text : "sanguine"},
          {value : "MoodOffsetOptimist", text : "optimist"},
          {value : "MoodOffsetPessimist", text : "pessimist"},
          {value : "MoodOffsetDepressive", text : "depressive"},
        ]
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>