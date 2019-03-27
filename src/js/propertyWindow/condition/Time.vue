<template>
    <div>
        <v-container grid-list-md pa-0 ma-0>
            <v-layout align-center justify-space-between row>
                <v-flex xs3>
                    <v-autocomplete messages="If hour is among:"
                                    v-model="condition['hours']"
                                    multiple
                                    :items="hours"
                                    label="Hours"
                    ></v-autocomplete>
                </v-flex>
                <v-flex xs3>
                    <v-autocomplete messages="If hour is among:"
                                    v-model="condition['days']"
                                    multiple
                                    :items="days"
                                    label="Days"
                    ></v-autocomplete>
                </v-flex>
                <v-flex xs3>
                    <v-autocomplete messages="If hour is among:"
                                    v-model="condition['quadrums']"
                                    multiple
                                    :items="quadrums"
                                    label="Quadrums"
                    ></v-autocomplete>
                </v-flex>
                <v-flex xs3>
                    <v-autocomplete messages="If hour is among:"
                                    v-model="condition['years']"
                                    multiple
                                    :items="years"
                                    label="Years"
                    ></v-autocomplete>
                </v-flex>

            </v-layout>
            <p>
                If none are selected, this is the same as all selected:<br>
                <br>
                <kbd>Hours: -<br> Days: 1,2<br> Quadrums: -<br> Years: -</kbd><br>
                Means Left every first and second day of the quadrum. (in every hour)
            </p>
        </v-container>
    </div>
</template>

<script>
  export default {
    props : ["condition"],
    name : "Time",
    data : function() {
      return {
        hours : [
          {value : "1", text : "1"},
          {value : "2", text : "2"},
          {value : "3", text : "3"},
          {value : "4", text : "4"},
          {value : "5", text : "5"},
          {value : "6", text : "6"},
          {value : "7", text : "7"},
          {value : "8", text : "8"},
          {value : "9", text : "9"},
          {value : "10", text : "10"},
          {value : "11", text : "11"},
          {value : "12", text : "12"},
          {value : "13", text : "13"},
          {value : "14", text : "14"},
          {value : "15", text : "15"},
          {value : "16", text : "16"},
          {value : "17", text : "17"},
          {value : "18", text : "18"},
          {value : "19", text : "19"},
          {value : "20", text : "20"},
          {value : "21", text : "21"},
          {value : "22", text : "22"},
          {value : "23", text : "23"},
          {value : "24", text : "24"},
        ],
        days : [
          {value : "1", text : "1"},
          {value : "2", text : "2"},
          {value : "3", text : "3"},
          {value : "4", text : "4"},
          {value : "5", text : "5"},
          {value : "6", text : "6"},
          {value : "7", text : "7"},
          {value : "8", text : "8"},
          {value : "9", text : "9"},
          {value : "10", text : "10"},
          {value : "11", text : "11"},
          {value : "12", text : "12"},
          {value : "13", text : "13"},
          {value : "14", text : "14"},
          {value : "15", text : "15"},
        ],
        quadrums : [
          {value : "1", text : "Aprimay"},
          {value : "2", text : "Jugust"},
          {value : "3", text : "Septober"},
          {value : "4", text : "Decembary"},
        ],
        years : [
          {value : "0", text : "0"},
          {value : "1", text : "1"},
          {value : "2", text : "2"},
          {value : "3", text : "3"},
          {value : "4", text : "4"},
          {value : "5", text : "5"},
          {value : "6", text : "6"},
          {value : "7", text : "7"},
          {value : "8", text : "8"},
          {value : "9", text : "9"},
          {value : "10", text : "10"},
          {value : "11", text : "11"},
          {value : "12", text : "12"},
          {value : "13", text : "13"},
          {value : "14", text : "14"},
          {value : "15", text : "15"},
          {value : "16", text : "16"},
          {value : "17", text : "17"},
          {value : "18", text : "18"},
          {value : "19", text : "19"},
          {value : "20", text : "20"},
          {value : "21", text : "21"},
          {value : "22", text : "22"},
          {value : "23", text : "23"},
          {value : "24", text : "24"},
          {value : "25", text : "25"},
          {value : "26", text : "26"},
          {value : "27", text : "27"},
          {value : "28", text : "28"},
          {value : "29", text : "29"},
          {value : "30", text : "30"},
          {value : "31", text : "31"},
          {value : "32", text : "32"},
          {value : "33", text : "33"},
          {value : "34", text : "34"},
          {value : "35", text : "35"},
          {value : "36", text : "36"},
          {value : "37", text : "37"},
          {value : "38", text : "38"},
          {value : "39", text : "39"},
          {value : "40", text : "40"},
          {value : "41", text : "41"},
          {value : "42", text : "42"},
          {value : "43", text : "43"},
          {value : "44", text : "44"},
          {value : "45", text : "45"},
          {value : "46", text : "46"},
          {value : "47", text : "47"},
          {value : "48", text : "48"},
          {value : "49", text : "49"},
          {value : "50", text : "50"},
        ],
      }
    }
  }
</script>

<style scoped>
</style>