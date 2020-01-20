<template>
    <div class="info-box">
        <v-input class="property-box" messages="Target pawns">
            <PawnGroupField :myModel.sync="selected.properties['Pawns']"/>
        </v-input>
        <v-input class="property-box" messages="Thought type (Select *custom* to make your own)">
            <v-autocomplete
                    v-model="selected.properties['ThoughtType']"
                    :items="thoughtTypes"
                    label="Thoughts"
            />
        </v-input>
        <template v-if="selected.properties['ThoughtType'] === 'custom'">
            <v-input class="property-box" messages="Label of thought">
                <v-text-field label="Label text" type="text" v-model="selected.properties['ThoughtLabel']"/>
            </v-input>
            <v-input class="property-box" messages="Description of thought">
                <v-text-field label="Description text" type="text" v-model="selected.properties['ThoughtDescription']"/>
            </v-input>
            <v-input class="property-box" messages="Mood boost (if bigger than 0) or mood loss (if lower than 0)">
                <NumberField label="Thought effect" :myModel.sync="selected.properties['ThoughtEffect']"/>
            </v-input>
            <v-input class="property-box" messages="Thought duration in days">
                <NumberField label="Thought duration" :myModel.sync="selected.properties['ThoughtDuration']"/>
            </v-input>
        </template>
        <template v-else-if="selected.properties['ThoughtType'] !=='' && selected.properties['ThoughtType'] !== undefined && selected.properties['ThoughtType'] !== 'custom'">
            <v-input class="property-box" messages="Name of other pawn (if type contains {0})">
                <v-autocomplete
                        v-model="selected.properties['OtherPawn']"
                        :items="names"
                        label="Other pawn"
                        small-chips
                />
            </v-input>
        </template>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  import PawnGroupField from "../util/PawnGroupField";

  export default {
    components : {PawnGroupField, NumberField},
    props : ["selected"],
    name : "GiveThought",
    data : function() {
      return {
        thoughtTypes : [
          {value : "custom", text : "*Custom*"},
          {value : "BondedAnimalMaster", text : "{0}'s master"},
          {value : "KnowPrisonerSold", text : "A prisoner was sold"},
          {value : "Affair", text : "Affair"},
          {value : "Inebriated", text : "Alcohol warmth"},
          {value : "AlcoholWithdrawal", text : "Alcohol withdrawal"},
          {value : "AmbrosiaHigh", text : "Ambrosia warmth"},
          {value : "AmbrosiaWithdrawal", text : "Ambrosia withdrawal"},
          {value : "HadAngeringFight", text : "Angering fight"},
          {value : "AnnoyingVoice", text : "Annoying voice"},
          {value : "Ascetic", text : "Ascetic has awful bedroom"},
          {value : "AteLavishMeal", text : "Ate lavish meal"},
          {value : "AteFineMeal", text : "Ate fine meal"},
          {value : "AteAwfulMeal", text : "Ate awful meal"},
          {value : "AteRawFood", text : "Ate raw food"},
          {value : "AteKibble", text : "Ate kibble"},
          {value : "AteCorpse", text : "Ate corpse"},
          {value : "AteInsectMeatDirect", text : "Ate insect meat"},
          {value : "AteInsectMeatAsIngredient", text : "Ate cooked insect meat"},
          {value : "AteRottenFood", text : "Ate rotten food"},
          {value : "AteWithoutTable", text : "Ate without table"},
          {value : "AteRawHumanlikeMeat", text : "Ate raw humanlike meat"},
          {value : "AttendedWedding", text : "Attended wedding"},
          {value : "AttendedParty", text : "Attended party"},
          {value : "SleptInBedroom", text : "Awful bedroom"},
          {value : "SleptInBarracks", text : "Awful barrack"},
          {value : "PrisonCell", text : "Awful prison cell"},
          {value : "PrisonBarracks", text : "Awful barrack"},
          {value : "HospitalPatientRoomStats", text : "Awful hospital"},
          {value : "Aurora", text : "Beautiful aurora"},
          {value : "BodyPuristDisgust", text : "Body purist disgust"},
          {value : "ProsthophobeUnhappy", text : "Body purist squeamish"},
          {value : "BondedAnimalDied", text : "Bonded animal {0} died"},
          {value : "BondedAnimalBanished", text : "Bonded animal {0} banished"},
          {value : "SoldMyBondedAnimal", text : "Bonded animal sold"},
          {value : "BotchedMySurgery", text : "Botched my surgery"},
          {value : "BrawlerUnhappy", text : "Brawler has ranged weapon"},
          {value : "BrokeUpWithMe", text : "Broke up with me"},
          {value : "BrokeUpWithMeMood", text : "Broken up with by {0}"},
          {value : "KnowBuriedInSarcophagus", text : "Buried in sarcophagus"},
          {value : "ButcheredHumanlikeCorpseOpinion", text : "Butchered humanlike corpse"},
          {value : "Catharsis", text : "Catharsis"},
          {value : "HadCatharticFight", text : "Cathartic fight"},
          {value : "CheatedOnMe", text : "Cheated on me"},
          {value : "CheatedOnMeMood", text : "Cheated on by {0}"},
          {value : "ChemicalInterestVsTeetotaler", text : "Chemical interest vs teetotaler"},
          {value : "EnvironmentCold", text : "Chilly"},
          {value : "Chitchat", text : "Chitchat"},
          {value : "KnowColonistOrganHarvested", text : "Colonist's organ harvested"},
          {value : "KnowColonistDied", text : "Colonist died"},
          {value : "ColonistBanished", text : "Colonist banished"},
          {value : "ColonistBanishedToDie", text : "Colonist banished to death"},
          {value : "ColonistLeftUnburied", text : "Colonist left unburied"},
          {value : "NeedRoomSize", text : "Confined interior"},
          {value : "ClothedNudist", text : "Constraining clothes"},
          {value : "AteHumanlikeMeatAsIngredient", text : "Cooked cannibalism"},
          {value : "AteHumanlikeMeatAsIngredientCannibal", text : "Cooked cannibalism"},
          {value : "CrashedTogether", text : "Crashed together"},
          {value : "CreepyBreathing", text : "Creepy breathing"},
          {value : "EnvironmentDark", text : "Darkness"},
          {value : "DebugBad", text : "Debug bad thought"},
          {value : "DebugGood", text : "Debug good thought"},
          {value : "AteInImpressiveDiningRoom", text : "Decent dining room"},
          {value : "JoyActivityInImpressiveRecRoom", text : "Decent rec room"},
          {value : "DeepTalk", text : "Deep talk"},
          {value : "DefeatedHostileFactionLeader", text : "Defeated hostile leader {0}"},
          {value : "DefeatedHostileFactionLeaderOpinion", text : "Defeated hostile leader"},
          {value : "MoodOffsetDepressive", text : "Depressive"},
          {value : "Disfigured", text : "Disfigured"},
          {value : "SleepDisturbed", text : "Disturbed sleep"},
          {value : "DivorcedMe", text : "Divorced me"},
          {value : "DivorcedMeMood", text : "Divorced by {0}"},
          {value : "NeedRest", text : "Drowsy"},
          {value : "Drunk", text : "Drunk"},
          {value : "NeedOutdoors", text : "Entombed underground"},
          {value : "ExecutedPrisoner", text : "Executed prisoner"},
          {value : "FailedToRescueRelative", text : "Failed to rescue {0}"},
          {value : "FailedRomanceAttemptOnMe", text : "Failed to romance me"},
          {value : "ForcedMeToTakeDrugs", text : "Forced me to take drugs"},
          {value : "ForcedMeToTakeDrugsMood", text : "Forced to take drugs"},
          {value : "ForcedMeToTakeLuciferium", text : "Forced me to take luciferium"},
          {value : "ForcedMeToTakeLuciferiumMood", text : "Forced to take luciferium"},
          {value : "GoJuiceWithdrawal", text : "Go-juice withdrawal"},
          {value : "GotMarried", text : "Got married to {0}"},
          {value : "GotSomeLovin", text : "Got some lovin’"},
          {value : "Greedy", text : "Greedy for impressive bedroom"},
          {value : "FailedRomanceAttemptOnMeLowOpinionMood", text : "Had to rebuff {0}"},
          {value : "HappyNude", text : "Happily nude"},
          {value : "HardWorkerVsLazy", text : "Hard worker vs lazy"},
          {value : "HarmedMe", text : "Harmed me"},
          {value : "NeedBeauty", text : "Hideous environment"},
          {value : "GoJuiceHigh", text : "High on go-juice"},
          {value : "FlakeHigh", text : "High on flake"},
          {value : "YayoHigh", text : "High on yayo"},
          {value : "SmokeleafHigh", text : "High on smokeleaf"},
          {value : "HoneymoonPhase", text : "Honeymoon phase"},
          {value : "HumanLeatherApparelSad", text : "Human leather {0}"},
          {value : "HumanLeatherApparelHappy", text : "Human leather {0}"},
          {value : "NeedFood", text : "Hungry"},
          {value : "ButcheredHumanlikeCorpse", text : "I butchered humanlike"},
          {value : "IRejectedTheirProposal", text : "I rejected their proposal"},
          {value : "Incestuous", text : "Incestuous"},
          {value : "NewColonyOptimism", text : "Initial optimism"},
          {value : "NewColonyHope", text : "Initial hope"},
          {value : "KnowPrisonerDiedInnocent", text : "Innocent prisoner died"},
          {value : "Insulted", text : "Insulted"},
          {value : "InsultedMood", text : "Insulted"},
          {value : "Jealous", text : "Jealous of {0}'s bedroom"},
          {value : "Joywire", text : "Joywire"},
          {value : "KnowGuestExecuted", text : "Justified execution"},
          {value : "KnowColonistExecuted", text : "Justified execution of colonist"},
          {value : "KilledHumanlikeBloodlust", text : "Killed someone"},
          {value : "KilledMyFriend", text : "Killed my friend"},
          {value : "KilledMyRival", text : "Killed my rival"},
          {value : "KilledMyLover", text : "Killed my lover"},
          {value : "KilledMyFiance", text : "Killed my fiance"},
          {value : "KilledMySpouse", text : "Killed my spouse"},
          {value : "KilledMyFather", text : "Killed my father"},
          {value : "KilledMyMother", text : "Killed my mother"},
          {value : "KilledMySon", text : "Killed my son"},
          {value : "KilledMyDaughter", text : "Killed my daughter"},
          {value : "KilledMyBrother", text : "Killed my brother"},
          {value : "KilledMySister", text : "Killed my sister"},
          {value : "KilledMyKin", text : "Killed my kin"},
          {value : "KilledMyBondedAnimal", text : "Killed my bonded animal"},
          {value : "KilledColonist", text : "Killed colonist"},
          {value : "KilledColonyAnimal", text : "Killed colony animal"},
          {value : "KindWords", text : "Kind words"},
          {value : "KindWordsMood", text : "Kind words"},
          {value : "SoldMyLovedOne", text : "Loved one sold"},
          {value : "Man", text : "Man"},
          {value : "MasochistPain", text : "Masochist in minor pain"},
          {value : "Hungover", text : "Mild hangover"},
          {value : "Pain", text : "Minor pain"},
          {value : "DoingPassionateWork", text : "Minor passion for my work"},
          {value : "PawnWithGoodOpinionDied", text : "My friend {0} died"},
          {value : "PawnWithBadOpinionDied", text : "My rival {0} died"},
          {value : "MySonDied", text : "My son {0} died"},
          {value : "MyDaughterDied", text : "My daughter {0} died"},
          {value : "MyHusbandDied", text : "My husband {0} died"},
          {value : "MyWifeDied", text : "My wife {0} died"},
          {value : "MyFianceDied", text : "My fiance {0} died"},
          {value : "MyFianceeDied", text : "My fiancée {0} died"},
          {value : "MyLoverDied", text : "My lover {0} died"},
          {value : "MyBrotherDied", text : "My brother {0} died"},
          {value : "MySisterDied", text : "My sister {0} died"},
          {value : "MyGrandchildDied", text : "My grandchild {0} died"},
          {value : "MyFatherDied", text : "My father {0} died"},
          {value : "MyMotherDied", text : "My mother {0} died"},
          {value : "MyNieceDied", text : "My niece {0} died"},
          {value : "MyNephewDied", text : "My nephew {0} died"},
          {value : "MyHalfSiblingDied", text : "My half-sibling {0} died"},
          {value : "MyAuntDied", text : "My aunt {0} died"},
          {value : "MyUncleDied", text : "My uncle {0} died"},
          {value : "MyGrandparentDied", text : "My grandparent {0} died"},
          {value : "MyCousinDied", text : "My cousin {0} died"},
          {value : "MyKinDied", text : "My kin {0} died"},
          {value : "MyOrganHarvested", text : "My organ harvested"},
          {value : "RejectedMyProposalMood", text : "My proposal was rejected by {0}"},
          {value : "Naked", text : "Naked"},
          {value : "NightOwlDuringTheDay", text : "Night owl in daytime"},
          {value : "NightOwlDuringTheNight", text : "Night owl at night"},
          {value : "NotBondedAnimalMaster", text : "Not {0}'s master"},
          {value : "Nuzzled", text : "Nuzzled"},
          {value : "ObservedLayingCorpse", text : "Observed corpse"},
          {value : "ObservedLayingRottingCorpse", text : "Observed rotting corpse"},
          {value : "OpinionOfMyLover", text : "Opinion of my {0} {1}"},
          {value : "MoodOffsetOptimist", text : "Optimist"},
          {value : "MoodOffsetPessimist", text : "Pessimist"},
          {value : "Pretty", text : "Pretty"},
          {value : "PrisonerBanishedToDie", text : "Prisoner banished to death"},
          {value : "PsychicEmanatorSoothe", text : "Psychic emanator soothe"},
          {value : "PsychicDrone", text : "Psychic soothe"},
          {value : "PsychiteTeaHigh", text : "Psychite tea"},
          {value : "PsychiteWithdrawal", text : "Psychite withdrawal"},
          {value : "PyromaniacHappy", text : "Pyromaniac has incendiary weapon"},
          {value : "RapportBuilt", text : "Rapport built"},
          {value : "ApparelDamaged", text : "Ratty apparel"},
          {value : "AteHumanlikeMeatDirect", text : "Raw cannibalism"},
          {value : "AteHumanlikeMeatDirectCannibal", text : "Raw cannibalism"},
          {value : "RebuffedMyRomanceAttempt", text : "Rebuffed me"},
          {value : "RebuffedMyRomanceAttemptMood", text : "Rebuffed by {0}"},
          {value : "NeedJoy", text : "Recreation-starved"},
          {value : "RecruitedMe", text : "Recruited me"},
          {value : "RejectedMyProposal", text : "Rejected my proposal"},
          {value : "Rescued", text : "Rescued"},
          {value : "RescuedRelative", text : "Rescued {0}"},
          {value : "RescuedMe", text : "Rescued me"},
          {value : "MoodOffsetSanguine", text : "Sanguine"},
          {value : "SharedBed", text : "Sharing bed"},
          {value : "Sick", text : "Sick"},
          {value : "LowExpectations", text : "Sky-high expectations"},
          {value : "SleptOutside", text : "Slept outside"},
          {value : "SleptOnGround", text : "Slept on ground"},
          {value : "SleptInCold", text : "Slept in the cold"},
          {value : "SleptInHeat", text : "Slept in the heat"},
          {value : "Slighted", text : "Slighted"},
          {value : "SmokeleafWithdrawal", text : "Smokeleaf withdrawal"},
          {value : "SoakingWet", text : "Soaking wet"},
          {value : "SoldPrisoner", text : "Sold prisoner to slavery"},
          {value : "KnowGuestOrganHarvested", text : "Someone's organ harvested"},
          {value : "ArtifactMoodBoost", text : "Strange feeling"},
          {value : "EnvironmentHot", text : "Sweaty"},
          {value : "DeadMansApparel", text : "Tainted {0}"},
          {value : "TeetotalerVsChemicalInterest", text : "Teetotaler vs chemical interest"},
          {value : "TeetotalerVsAddict", text : "Teetotaler vs addict"},
          {value : "TranshumanistAppreciation", text : "Transhumanist appreciation"},
          {value : "ProsthophileNoProsthetic", text : "Transhumanist frustrated"},
          {value : "ProsthophileHappy", text : "Transhumanist pleased"},
          {value : "Ugly", text : "Ugly"},
          {value : "NeedComfort", text : "Uncomfortable"},
          {value : "WakeUpWithdrawal", text : "Wake-up withdrawal"},
          {value : "WantToSleepWithSpouseOrLover", text : "Want to sleep with {0}"},
          {value : "WasImprisoned", text : "Was imprisoned"},
          {value : "KnowButcheredHumanlikeCorpse", text : "We butchered humanlike"},
          {value : "WitnessedDeathAlly", text : "Witnessed ally's death"},
          {value : "WitnessedDeathNonAlly", text : "Witnessed outsider's death"},
          {value : "WitnessedDeathFamily", text : "Witnessed family member's death"},
          {value : "WitnessedDeathBloodlust", text : "Witnessed death with bloodlust"},
          {value : "Woman", text : "Woman"},
        ]
      }
    },
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      }
    }
  }
</script>

<style scoped>
</style>