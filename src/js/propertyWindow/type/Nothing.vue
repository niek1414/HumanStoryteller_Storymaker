<template>
    <div class="info-box">
        <p>This event does nothing on its own.<br>Can be used to display a message on its own or create a silent conditional split.</p>
        <div class="property-box">
            <br><span style="font-size: 120%">Change event type</span><br><br>
            Change the event type anytime using the top right selector, this is only for ease of access.
            <v-expansion-panel>
                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Native</div>
                    </template>
                    <v-card>
                        <table>
                            <thead>
                            <tr>
                                <th class="text-left">Event name</th>
                                <th class="text-left">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="event in NativeEvents">
                                <tr @click="changeType(event)" :key="event.value">
                                    <td>{{ event.text }}</td>
                                    <td>{{ event.desc }}</td>
                                </tr>
                            </template>
                            </tbody>
                        </table>
                    </v-card>
                </v-expansion-panel-content>

                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Godlike</div>
                    </template>
                    <v-card>
                        <table>
                            <thead>
                            <tr>
                                <th class="text-left">Event name</th>
                                <th class="text-left">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="event in GodlikeEvents">
                                <tr @click="changeType(event)" :key="event.value">
                                    <td>{{ event.text }}</td>
                                    <td>{{ event.desc }}</td>
                                </tr>
                            </template>
                            </tbody>
                        </table>
                    </v-card>
                </v-expansion-panel-content>

                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Presentation</div>
                    </template>
                    <v-card>
                        <table>
                            <thead>
                            <tr>
                                <th class="text-left">Event name</th>
                                <th class="text-left">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="event in PresentationEvents">
                                <tr @click="changeType(event)" :key="event.value">
                                    <td>{{ event.text }}</td>
                                    <td>{{ event.desc }}</td>
                                </tr>
                            </template>
                            </tbody>
                        </table>
                    </v-card>
                </v-expansion-panel-content>

                <v-expansion-panel-content>
                    <template v-slot:header>
                        <div>Utility</div>
                    </template>
                    <v-card>
                        <table>
                            <thead>
                            <tr>
                                <th class="text-left">Event name</th>
                                <th class="text-left">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="event in UtilityEvents">
                                <tr @click="changeType(event)" :key="event.value">
                                    <td>{{ event.text }}</td>
                                    <td>{{ event.desc }}</td>
                                </tr>
                            </template>
                            </tbody>
                        </table>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <br>
        </div>
    </div>
</template>

<script>
  import DataFile from "../../storyGraph/DataFile";

  export default {
    props : ["selected"],
    name : "Nothing",
    methods : {
      changeType : function(type) {
        this.selected.type = {text : type.text, value : type};
        this.selected.refreshType();
      }
    },
    data : () => ({
      NativeEvents : DataFile.NativeEvents,
      GodlikeEvents : DataFile.GodlikeEvents,
      PresentationEvents : DataFile.PresentationEvents,
      UtilityEvents : DataFile.UtilityEvents,
    })
  }
</script>

<style scoped>
    th {
        line-height: 1em;
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

    tr {
        cursor: pointer;
    }

    th {
        background-color: #353532;
    }

    td:first-child {
        color: #ffffff;
    }

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