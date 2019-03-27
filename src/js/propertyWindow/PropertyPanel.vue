<template>
    <div style="width: 100%; height: 100%; box-shadow: inset 50px 0 0 #41474e;">
        <div id="property-action-buttons">
            <input type="radio" class="radio-tab" id="home" value="home" v-model="tab">
            <label for="home" class="action-item">
                <i class="far fa-list-alt fa-2x"></i>
                <span class="tooltip-text tooltip-right">Properties</span>
            </label>
            <input type="radio" class="radio-tab" id="condition" value="condition" v-model="tab">
            <label for="condition" class="action-item">
                <i class="fas fa-code-branch fa-2x"></i>
                <span class="tooltip-text tooltip-right">Conditional</span>
            </label>
            <input type="radio" class="radio-tab" id="mail" value="mail" v-model="tab">
            <label for="mail" class="action-item">
                <i class="far fa-envelope fa-2x"></i>
                <span class="tooltip-text tooltip-right">Messages</span>
            </label>
            <input type="radio" class="radio-tab" id="variable" value="variable" v-model="tab">
            <label for="variable" class="action-item">
                <i class="fas fa-shapes fa-2x"></i>
                <span class="tooltip-text tooltip-right">Variables</span>
            </label>
            <div id="slider"></div>
        </div>
        <div id="property-page">
            <property-header>
                <input id="name-input" placeholder="Event name" maxlength="15" v-model="selected.eventName" v-on:input="nameChangeHandler(selected)">
                <i class="far fa-edit"></i>
                <model-select
                        id="type-select"
                        :options="options"
                        v-model="selected.type"
                        v-on:input="typeChangeHandler(selected)"
                        placeholder="Type to search..">
                </model-select>
            </property-header>
            <conditional v-if="tab === 'condition'" v-bind:selected="selected" v-bind:canvas="canvas"></conditional>
            <mail v-else-if="tab === 'mail'" v-bind:selected="selected" v-bind:canvas="canvas"></mail>
            <variable v-else-if="tab === 'variable'" v-bind:selected="selected" v-bind:canvas="canvas"></variable>
            <template v-else>
                <RaidEnemy v-if="selected.type.value.value === 'RaidEnemy'" v-bind:selected="selected"/>
                <Disease v-else-if="selected.type.value.value === 'Disease'" v-bind:selected="selected"/>
                <ShipPartCrash v-else-if="selected.type.value.value === 'ShipPartCrash'" v-bind:selected="selected"/>
                <ManhunterPack v-else-if="selected.type.value.value === 'ManhunterPack'" v-bind:selected="selected"/>
                <Infestation v-else-if="selected.type.value.value === 'Infestation'" v-bind:selected="selected"/>
                <AnimalInsanitySingle v-else-if="selected.type.value.value === 'AnimalInsanitySingle'" v-bind:selected="selected"/>
                <AnimalInsanityMass v-else-if="selected.type.value.value === 'AnimalInsanityMass'" v-bind:selected="selected"/>
                <FarmAnimalsWanderIn v-else-if="selected.type.value.value === 'FarmAnimalsWanderIn'" v-bind:selected="selected"/>
                <TempFlux v-else-if="selected.type.value.value === 'TempFlux'" v-bind:selected="selected"/>
                <Aurora v-else-if="selected.type.value.value === 'Aurora'" v-bind:selected="selected"/>
                <Eclipse v-else-if="selected.type.value.value === 'Eclipse'" v-bind:selected="selected"/>
                <SolarFlare v-else-if="selected.type.value.value === 'SolarFlare'" v-bind:selected="selected"/>
                <Flashstorm v-else-if="selected.type.value.value === 'Flashstorm'" v-bind:selected="selected"/>
                <RefugeeChased v-else-if="selected.type.value.value === 'RefugeeChased'" v-bind:selected="selected"/>
                <HerdMigration v-else-if="selected.type.value.value === 'HerdMigration'" v-bind:selected="selected"/>
                <PsychicDrone v-else-if="selected.type.value.value === 'PsychicDrone'" v-bind:selected="selected"/>
                <MeteoriteImpact v-else-if="selected.type.value.value === 'MeteoriteImpact'" v-bind:selected="selected"/>
                <ShortCircuit v-else-if="selected.type.value.value === 'ShortCircuit'" v-bind:selected="selected"/>
                <CropBlight v-else-if="selected.type.value.value === 'CropBlight'" v-bind:selected="selected"/>
                <ToxicFallout v-else-if="selected.type.value.value === 'ToxicFallout'" v-bind:selected="selected"/>
                <VolcanicWinter v-else-if="selected.type.value.value === 'VolcanicWinter'" v-bind:selected="selected"/>
                <TraderArrival v-else-if="selected.type.value.value === 'TraderArrival'" v-bind:selected="selected"/>
                <VisitorGroup v-else-if="selected.type.value.value === 'VisitorGroup'" v-bind:selected="selected"/>
                <CreatePawn v-else-if="selected.type.value.value === 'CreatePawn'" v-bind:selected="selected"/>
                <SelfTame v-else-if="selected.type.value.value === 'SelfTame'" v-bind:selected="selected"/>
                <ResourcePodCrash v-else-if="selected.type.value.value === 'ResourcePodCrash'" v-bind:selected="selected"/>
                <RefugeePodCrash v-else-if="selected.type.value.value === 'RefugeePodCrash'" v-bind:selected="selected"/>
                <PsychicSoothe v-else-if="selected.type.value.value === 'PsychicSoothe'" v-bind:selected="selected"/>
                <Alphabeavers v-else-if="selected.type.value.value === 'Alphabeavers'" v-bind:selected="selected"/>
                <AmbrosiaSprout v-else-if="selected.type.value.value === 'AmbrosiaSprout'" v-bind:selected="selected"/>
                <Dialog v-else-if="selected.type.value.value === 'Dialog'" v-bind:selected="selected"/>
                <Difficulty v-else-if="selected.type.value.value === 'Difficulty'" v-bind:selected="selected"/>
                <WildManWandersIn v-else-if="selected.type.value.value === 'WildManWandersIn'" v-bind:selected="selected"/>
                <Planetkiller v-else-if="selected.type.value.value === 'Planetkiller'" v-bind:selected="selected"/>
                <PlayAudio v-else-if="selected.type.value.value === 'PlayAudio'" v-bind:selected="selected"/>
                <KillPawn v-else-if="selected.type.value.value === 'KillPawn'" v-bind:selected="selected"/>
                <TimeTravel v-else-if="selected.type.value.value === 'TimeTravel'" v-bind:selected="selected"/>
                <SetRelation v-else-if="selected.type.value.value === 'SetRelation'" v-bind:selected="selected"/>
                <HealPawn v-else-if="selected.type.value.value === 'HealPawn'" v-bind:selected="selected"/>
                <PawnHealth v-else-if="selected.type.value.value === 'PawnHealth'" v-bind:selected="selected"/>
                <GiveThought v-else-if="selected.type.value.value === 'GiveThought'" v-bind:selected="selected"/>
                <RenamePawn v-else-if="selected.type.value.value === 'RenamePawn'" v-bind:selected="selected"/>
                <SolarFlare v-else-if="selected.type.value.value === 'SolarFlare'" v-bind:selected="selected"/>
                <EditPawn v-else-if="selected.type.value.value === 'EditPawn'" v-bind:selected="selected"/>
                <Nothing v-else v-bind:selected="selected"/>
            </template>
        </div>
    </div>
</template>

<script>
  import Conditional from "./Conditional";
  import Mail from "./Mail";
  import Variable from "./Variable";
  import PropertyHeader from "./PropertyHeader";
  import {ModelSelect} from 'vue-search-select';
  import EventTypes from "../storyGraph/EventTypes";
  import RaidEnemy from "./type/RaidEnemy";
  import Disease from "./type/Disease";
  import ShipPartCrash from "./type/ShipPartCrash";
  import ManhunterPack from "./type/ManhunterPack";
  import Infestation from "./type/Infestation";
  import AnimalInsanitySingle from "./type/AnimalInsanitySingle";
  import AnimalInsanityMass from "./type/AnimalInsanityMass";
  import FarmAnimalsWanderIn from "./type/FarmAnimalsWanderIn";
  import TempFlux from "./type/TempFlux";
  import Aurora from "./type/Aurora";
  import Eclipse from "./type/Eclipse";
  import SolarFlare from "./type/SolarFlare";
  import PsychicDrone from "./type/PsychicDrone";
  import ShortCircuit from "./type/ShortCircuit";
  import CropBlight from "./type/CropBlight";
  import ToxicFallout from "./type/ToxicFallout";
  import VolcanicWinter from "./type/VolcanicWinter";
  import TraderArrival from "./type/TraderArrival";
  import VisitorGroup from "./type/VisitorGroup";
  import WandererJoin from "./type/CreatePawn";
  import ResourcePodCrash from "./type/ResourcePodCrash";
  import RefugeePodCrash from "./type/RefugeePodCrash";
  import PsychicSoothe from "./type/PsychicSoothe";
  import Alphabeavers from "./type/Alphabeavers";
  import AmbrosiaSprout from "./type/AmbrosiaSprout";
  import Nothing from "./type/Nothing";
  import Dialog from "./type/Dialog";
  import Difficulty from "./type/Difficulty";
  import Flashstorm from "./type/Flashstorm";
  import HerdMigration from "./type/HerdMigration";
  import RefugeeChased from "./type/RefugeeChased";
  import MeteoriteImpact from "./type/MeteoriteImpact";
  import SelfTame from "./type/SelfTame";
  import WildManWandersIn from "./type/WildManWandersIn";
  import Planetkiller from "./type/Planetkiller";
  import CreatePawn from "./type/CreatePawn";
  import PlayAudio from "./type/PlayAudio";
  import KillPawn from "./type/KillPawn";
  import TimeTravel from "./type/TimeTravel";
  import SetRelation from "./type/SetRelation";
  import HealPawn from "./type/HealPawn";
  import PawnHealth from "./type/PawnHealth";
  import GiveThought from "./type/GiveThought";
  import RenamePawn from "./type/RenamePawn";
  import EditPawn from "./type/EditPawn";

  export default {
    name : "property-panel",
    props : ["canvas", "selected"],
    methods : {
      nameChangeHandler : function(selected) {
        selected.refreshName();
      },
      typeChangeHandler : function(selected) {
        selected.refreshType();
      }
    },
    components : {
      EditPawn,
      RenamePawn,
      GiveThought,
      PawnHealth,
      HealPawn,
      SetRelation,
      Planetkiller,
      WildManWandersIn,
      SelfTame,
      MeteoriteImpact,
      RefugeeChased,
      HerdMigration,
      Flashstorm,
      PropertyHeader,
      ModelSelect,
      Conditional,
      Mail,
      Variable,
      RaidEnemy,
      Disease,
      ShipPartCrash,
      ManhunterPack,
      Infestation,
      AnimalInsanitySingle,
      AnimalInsanityMass,
      FarmAnimalsWanderIn,
      TempFlux,
      Aurora,
      Eclipse,
      SolarFlare,
      PsychicDrone,
      ShortCircuit,
      CropBlight,
      ToxicFallout,
      VolcanicWinter,
      TraderArrival,
      VisitorGroup,
      WandererJoin,
      ResourcePodCrash,
      RefugeePodCrash,
      PsychicSoothe,
      Alphabeavers,
      AmbrosiaSprout,
      Nothing,
      Dialog,
      Difficulty,
      CreatePawn,
      PlayAudio,
      KillPawn,
      TimeTravel
    },
    data() {
      return {
        options : EventTypes.Events,
        tab : "home",
      }
    },
  }
</script>

<style scoped>
    #slider {
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 53px;
        background-color: #FFF;

        transition: top .6s;
    }

    #condition:checked ~ #slider {
        top: 53px;
        transition: top .6s;
    }

    #mail:checked ~ #slider {
        top: 106px;
        transition: top .6s;
    }

    #variable:checked ~ #slider {
        top: 159px;
        transition: top .6s;
    }

    #name-input {
        width: 200px;
    }

    #property-action-buttons {
        width: 50px;
        z-index: 2;
        top: 0;
        float: left;
        position: sticky;
        background-color: #41474e;
    }

    #property-page {
        width: calc(100% - 50px);
        height: 100%;
        float: right;
    }

    #type-select {
        background-color: #15191d;
        color: #fff;
        height: 23px;
        float: right;
        width: 300px;
        padding: 0;
        margin: 0;
        display: inline-block;
        min-height: auto;
        border: none !important;
    }

    #type-select:focus {
        border: none !important;
    }

    .radio-tab {
        display: none;
    }

    .action-item {
        display: block;
        background-color: hsl(212, 9%, 28%);

        transition: background-color .6s .3s;
    }

    input:checked + .action-item {
        background-color: hsl(212, 9%, 22%);

        transition: background-color .6s;
    }

    @media only screen and (max-width: 1370px) {
        #type-select {
            float: left;
            margin-left: -11px;
            width: 100%;
        }
    }
</style>