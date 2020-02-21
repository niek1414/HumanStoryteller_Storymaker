<template>
    <div>
        <property-header>{{project.name}} - Overview page</property-header>

        <div class="info-box">
            <v-input messages="Publicly visible? Takes effect after upload!" class="property-box">
                <v-switch
                        label="Show publicly"
                        v-model="project.publish"
                />
            </v-input>
            <div class="property-box">
                <br><span style="font-size: 120%">Create a link directly to your story!</span><br><br>
                The share link is available no matter the visibility setting above!<br>
                Therefore the link could also be used to test your story before you make it publicly available.<br>
                What state should players, that click on the link, start in?
                <v-radio-group row v-model="shareUrlStage">
                    <v-radio label="World generation" value="W"/>
                    <v-radio label="Pick landing site" value="S"/>
                    <v-radio label="Pick characters" value="C"/>
                    <v-radio label="In-game" value="G"/>
                </v-radio-group>
                <span style="font-size: 120%">Sharable link: <a :href="shareUrl" v-text="shareUrl"/></span>
                <br><br>
            </div>
            <div class="property-box">
                <br><span style="font-size: 120%">Story debugger</span><br><br>
                Enable the `Creator tools` in de mod settings to enable web debugging.<br>
                <v-btn v-if="ConnectionState.DISCONNECTED === connectionState || ConnectionState.CONNECTING === connectionState"
                       :loading="ConnectionState.CONNECTING === connectionState"
                       :disabled="ConnectionState.CONNECTING === connectionState"
                       block
                       color="indigo"
                       @click="toolbar.debug.startDebugConnection()">Connect <i class="fas fa-bug" style="margin-left: 10px;"/></v-btn>
                <v-btn v-else
                       :loading="ConnectionState.DISCONNECTING === connectionState"
                       :disabled="ConnectionState.DISCONNECTING === connectionState"
                       block
                       color="indigo"
                       @click="toolbar.debug.stopDebugConnection()">Disconnect <i class="fas fa-stop-circle" style="margin-left: 10px;"/></v-btn>
                <br>
            </div>
            <div class="property-box" v-if="ConnectionState.CONNECTED === connectionState">
                <br><span style="font-size: 120%">Load story</span><br><br>
                Load the current version of the story into the connected game.<br>
                <div style="display: flex">
                    <v-btn style="flex: auto;" color="red darken-2" @click="toolbar.debug.uploadAndReboot()">Upload & (Re)Start the story <i class="fas fa-redo"
                                                                                                                                             style="margin-left: 10px;"/></v-btn>
                    <v-btn style="flex: auto;" color="teal" @click="toolbar.debug.uploadAndSync()">Upload & Update current story <i class="fas fa-recycle"
                                                                                                                                    style="margin-left: 10px;"/></v-btn>
                    <br>
                </div>
                <br>
            </div>
            <template v-if="ConnectionState.CONNECTED === connectionState">
                <div class="property-box">
                    <br><span style="font-size: 120%">Sync dependency mods</span><br><br>
                    Saves mod dependencies on the story so others get the option to play your story with the same mods.<br>
                    Also adds items, biomes etc to the storycreator dropdowns that where added by mods in the current setup.
                    <v-btn :disabled="true"
                           block
                           color="indigo">Not yet implemented :( <i class="fas fa-sync" style="margin-left: 10px;"/></v-btn>
                    <br>
                </div>
                <div class="property-box">
                    <br><span style="font-size: 120%">Game data</span><br><br>
                    Does not auto-update!
                    <v-btn @click="toolbar.debug.requestDataBankUpdate()"
                           block
                           color="indigo">Update data <i class="fas fa-sync" style="margin-left: 10px;"/></v-btn>
                    <br>
                    <v-expansion-panel>
                        <v-expansion-panel-content>
                            <template v-slot:header>
                                <div>Variables</div>
                            </template>
                            <v-card>
                                <table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Name</th>
                                        <th class="text-left">Value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in toolbar.debug.gameData.variables" :key="item.Name">
                                        <td>{{ item.Name }}</td>
                                        <td>{{ item.Value }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </v-card>
                        </v-expansion-panel-content>

                        <v-expansion-panel-content>
                            <template v-slot:header>
                                <div>Maps</div>
                            </template>
                            <v-card>
                                <table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Name</th>
                                        <th class="text-left">Tile</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in toolbar.debug.gameData.maps" :key="item.Name">
                                        <td>{{ item.Name }}</td>
                                        <td>{{ item.Tile }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </v-card>
                        </v-expansion-panel-content>

                        <v-expansion-panel-content>
                            <template v-slot:header>
                                <div>Pawns</div>
                            </template>
                            <v-card>
                                <table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Name</th>
                                        <th class="text-left">Label</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in toolbar.debug.gameData.pawns" :key="item.Name">
                                        <td>{{ item.Name }}</td>
                                        <td>{{ item.Label }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </v-card>
                        </v-expansion-panel-content>

                        <v-expansion-panel-content>
                            <template v-slot:header>
                                <div>Pawn groups</div>
                            </template>
                            <v-card>
                                <table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Name</th>
                                        <th class="text-left">Pawns</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in toolbar.debug.gameData.pawnGroups" :key="item.Name">
                                        <td>{{ item.Name }}</td>
                                        <td>
                                            <span v-for="pawn in item.Pawns">{{ pawn }}&#32;</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <br>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
  import PropertyHeader from "./PropertyHeader";
  import SmartTextArea from "./util/SmartTextArea";

  export default {
    name : "overview-panel",
    props : ["project", "toolbar"],
    components : {SmartTextArea, PropertyHeader},
    data : () => ({
      shareUrlStage : "W",
      ConnectionState : Object.freeze({"DISCONNECTED" : 1, "CONNECTING" : 2, "CONNECTED" : 3, "DISCONNECTING" : 4}),
    }),
    computed : {
      shareUrl : function() {
        return "steam://run/294100//HumanStoryteller:" + this.toolbar.view.projectData.id + ":" + this.shareUrlStage + "/";
      },
      connectionState : function() {
        return this.toolbar.debug.remoteConnectionState;
      }
    },
  }
</script>

<style scoped>
    b {
        font-family: "Open Sans Semibold", sans-serif;
        font-weight: bold;
    }

    th {
        line-height:1em;
        font-weight: bold;
        font-size: 1em;
        text-align: left;
        color: #b9b6b6;
    }

    td {
        font-weight: normal;
        font-size: 1em;
        -webkit-box-shadow: 1px 1px 0px 0px #27282d;
        -moz-box-shadow: 1px 1px 0px 0px #27282d;
        box-shadow: 1px 1px 0px 0px #27282d;
    }

    table {
        text-align: left;
        overflow: hidden;
        width: 100%;
        margin: 0 auto;
        display: table;
        padding: 0px 0 8em 0;
    }

    td, th {
        padding: 8px 16px;
    }

    /* Background-color of the odd rows */
    tr:nth-child(odd) {
        background-color: #313131;
    }

    /* Background-color of the even rows */
    tr:nth-child(even) {
        background-color: #313131;
    }

    th {
        background-color: #353532;
    }

    td:first-child {color: #ffffff;}

    tr:hover {
        background-color: #4d4f52;
        -webkit-box-shadow: 0 6px 6px -6px #0E1119;
        -moz-box-shadow: 0 6px 6px -6px #0E1119;
        box-shadow: 0 6px 6px -6px #0E1119;
    }

    td span {
        display: inline-block;
        background: #1b1b1b;
        border-radius: 20px;
        padding: 2px 7px;
        margin: 2px;
    }
</style>