<template>
    <div class="info-box">
        <v-switch
                label="Conditional flow"
                v-model="selected.right !== null"
                v-on:change="()=>{selected.conditions = [];canvas.convertCondition(selected, selected.right === null);}"
        />
        <template v-if="selected.right !== null">
            <v-autocomplete
                    v-model="picked"
                    :items="availableConditions.concat(EventTypes[selected.type.value.value].conditions)"
                    label="Add condition"
                    :search-input.sync="search"
            />
            <v-divider v-if="selected.conditions.length > 0" data-content="PICK LEFT IF"/>
            <template v-for="(con, index) in selected.conditions">
                <v-card :class="availableConditions.concat(EventTypes[selected.type.value.value].conditions).filter(function (i) {return i.value === con.type}).length<1?'invalid':''">
                    <v-card-title primary-title>{{con.type}}</v-card-title>
                    <v-card-text>
                        <Audio v-if="con.type === 'Audio'" v-bind:condition="con"/>
                        <Biome v-if="con.type === 'Biome'" v-bind:condition="con"/>
                        <Cheat v-if="con.type === 'Cheat'" v-bind:condition="con"/>
                        <Colonies v-if="con.type === 'Colonies'" v-bind:condition="con"/>
                        <ColonistOnMap v-if="con.type === 'ColonistOnMap'" v-bind:condition="con"/>
                        <Colonists v-if="con.type === 'Colonists'" v-bind:condition="con"/>
                        <ColonistsOnMap v-if="con.type === 'ColonistsOnMap'" v-bind:condition="con"/>
                        <Dialog v-if="con.type === 'Dialog'" v-bind:condition="con"/>
                        <Difficulty v-if="con.type === 'Difficulty'" v-bind:condition="con"/>
                        <ItemColony v-if="con.type === 'ItemColony'" v-bind:condition="con"/>
                        <ItemMap v-if="con.type === 'ItemMap'" v-bind:condition="con"/>
                        <GroupCount v-if="con.type === 'GroupCount'" v-bind:condition="con"/>
                        <MapCreated v-if="con.type === 'MapCreated'" v-bind:condition="con"/>
                        <PawnHealth v-if="con.type === 'PawnHealth'" v-bind:condition="con"/>
                        <Random v-if="con.type === 'Random'" v-bind:condition="con"/>
                        <Relation v-if="con.type === 'Relation'" v-bind:condition="con"/>
                        <Research v-if="con.type === 'Research'" v-bind:condition="con"/>
                        <Temperature v-if="con.type === 'Temperature'" v-bind:condition="con"/>
                        <Time v-if="con.type === 'Time'" v-bind:condition="con"/>
<!--                        <Quest v-if="con.type === 'Quest'" v-bind:condition="con"/>--> <!--Disabled because of compatibility issues between RW 1.0 and 1.1-->
                        <Trade v-if="con.type === 'Trade'" v-bind:condition="con"/>
                        <Traveled v-if="con.type === 'Traveled'" v-bind:condition="con"/>
                        <QueueEvent v-if="con.type === 'QueueEvent'" v-bind:condition="con"/>
                        <CreatedStructure v-if="con.type === 'CreatedStructure'" v-bind:condition="con"/>
                        <Variable v-if="con.type === 'Variable'" v-bind:condition="con"/>
                        <PawnState v-if="con.type === 'PawnState'" v-bind:condition="con"/>
                        <PlayerCanSee v-if="con.type === 'PlayerCanSee'" v-bind:condition="con"/>
                        <CaravanLocation v-if="con.type === 'CaravanLocation'" v-bind:condition="con"/>
                        <OnLocation v-if="con.type === 'OnLocation'" v-bind:condition="con"/>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat color="error"
                               v-on:click="selected.conditions = selected.conditions.filter(function(item) {return item !== con})">
                            remove
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-divider v-if="index + 1 < selected.conditions.length" data-content="AND"/>
            </template>
        </template>
    </div>
</template>

<script>
    import PawnHealth from "./condition/PawnHealth";
    import Dialog from "./condition/Dialog";
    import EventTypes from "./../storyGraph/EventTypes";
    import Variable from "./condition/Variable";
    import Random from "./condition/Random";
    import Difficulty from "./condition/Difficulty";
    import Time from "./condition/Time";
    import Relation from "./condition/Relation";
    import ItemMap from "./condition/ItemMap";
    import ItemColony from "./condition/ItemColony";
    import Biome from "./condition/Biome";
    import Temperature from "./condition/Temperature";
    import Colonists from "./condition/Colonists";
    import Audio from "./condition/Audio";
    import Cheat from "./condition/Cheat";
    import Research from "./condition/Research";
    import Colonies from "./condition/Colonies";
    import MapCreated from "./condition/MapCreated";
    import ColonistsOnMap from "./condition/ColonistsOnMap";
    import ColonistOnMap from "./condition/ColonistOnMap";
    // import Quest from "./condition/Quest";
    import Trade from "./condition/Trade";
    import Traveled from "./condition/Traveled";
    import PawnState from "./condition/PawnState";
    import OnLocation from "./condition/OnLocation";
    import CreatedStructure from "./condition/CreatedStructure";
    import GroupCount from "./condition/GroupCount";
    import PlayerCanSee from "./condition/PlayerCanSee";
    import CaravanLocation from "./condition/CaravanLocation";
    import QueueEvent from "./condition/QueueEvent";

    export default {
        name: "conditional",
        components: {
            QueueEvent,
            CaravanLocation,
            PlayerCanSee,
            GroupCount,
            CreatedStructure,
            OnLocation,
            PawnState,
            Traveled,
            Trade,
            // Quest,
            ColonistOnMap,
            ColonistsOnMap,
            MapCreated,
            Colonies,
            Research,
            Cheat,
            PawnHealth,
            Variable,
            Dialog,
            Random,
            Difficulty,
            Time,
            Relation,
            ItemMap,
            ItemColony,
            Biome,
            Temperature,
            Colonists,
            Audio
        },
        props: ["canvas", "selected"],
        data() {
            return {
                availableConditions: [
                    {value: 'Biome', text: 'Biome'},
                    {value: 'Cheat', text: 'Cheat'},
                    {value: 'CaravanLocation', text: 'Caravan location'},
                    {value: 'Colonies', text: 'Colonies'},
                    {value: 'ColonistOnMap', text: 'Colonist on map'},
                    {value: 'Colonists', text: 'Colonists'},
                    {value: 'ColonistsOnMap', text: 'Colonists on map'},
                    {value: 'GroupCount', text: 'Pawn group count'},
                    {value: 'Variable', text: 'Compare variable'},
                    {value: 'Difficulty', text: 'Difficulty'},
                    {value: 'Relation', text: 'Faction relation'},
                    {value: 'PawnHealth', text: 'Health of pawn '},
                    {value: 'ItemMap', text: 'Items on map'},
                    {value: 'ItemColony', text: 'Items on stockpiles'},
                    {value: 'OnLocation', text: 'Check location'},
                    {value: 'MapCreated', text: 'Map created'},
                    {value: 'Random', text: 'Random chance'},
                    {value: 'Research', text: 'Research'},
                    {value: 'PawnState', text: 'State of pawn'},
                    {value: 'PlayerCanSee', text: 'Player can see'},
                    {value: 'Temperature', text: 'Temperature'},
                    {value: 'Time', text: 'Time/Season'},
                ],
                picked: null,
                search: "",
                clearOnce: false,
                EventTypes: EventTypes
            }
        },
        watch: {
            picked(val) {
                if (val !== null && val !== undefined && val !== "") {
                    this.selected.conditions.push({type: val});
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
    .invalid {
        background-color: #4c2b2b !important;
    }
</style>