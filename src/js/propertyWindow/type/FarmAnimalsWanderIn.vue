<template>
    <div class="info-box">
        <v-input :messages="
            selected.properties['Amount'] ==='' ||
            selected.properties['Amount'] === undefined
            ?'Default: between 2 and 10 depending on body size'
            :'Amount of animals'
        ">
            <v-text-field label="Animal amount" type="number" v-model="selected.properties['Amount']"></v-text-field>
        </v-input>

        <v-input :messages="
            selected.properties['Kind'] ==='' ||
            selected.properties['Kind'] === undefined
            ?'Default: random non-wild animal'
            :'Animal kind'
        ">
            <v-autocomplete
                    v-model="selected.properties['Kind']"
                    :items="animals"
                    label="Animal kind"
            ></v-autocomplete>
        </v-input>

        <v-input messages="Assigned from top to bottom. Name overflow will be ignored.">
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
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "FarmAnimalsWanderIn",
    data : function() {
      return {
        animals : [
          {value : "Muffalo", text : "Muffalo"},
          {value : "Gazelle", text : "Gazelle"},
          {value : "Iguana", text : "Iguana"},
          {value : "Dromedary", text : "Dromedary"},
          {value : "Bear_Grizzly", text : "Bear_Grizzly"},
          {value : "Bear_Polar", text : "Bear_Polar"},
          {value : "Cougar", text : "Cougar"},
          {value : "Panther", text : "Panther"},
          {value : "Lynx", text : "Lynx"},
          {value : "Cassowary", text : "Cassowary"},
          {value : "Emu", text : "Emu"},
          {value : "Ostrich", text : "Ostrich"},
          {value : "Turkey", text : "Turkey"},
          {value : "Chicken", text : "Chicken"},
          {value : "Pig", text : "Pig"},
          {value : "Cow", text : "Cow"},
          {value : "Alpaca", text : "Alpaca"},
          {value : "Rhinoceros", text : "Rhinoceros"},
          {value : "Elephant", text : "Elephant"},
          {value : "Megasloth", text : "Megasloth"},
          {value : "Thrumbo", text : "Thrumbo"},
          {value : "Hare", text : "Hare"},
          {value : "Snowhare", text : "Snowhare"},
          {value : "Megascarab", text : "Megascarab"},
          {value : "Spelopede", text : "Spelopede"},
          {value : "Megaspider", text : "Megaspider"},
          {value : "YorkshireTerrier", text : "YorkshireTerrier"},
          {value : "Husky", text : "Husky"},
          {value : "LabradorRetriever", text : "LabradorRetriever"},
          {value : "Cat", text : "Cat"},
          {value : "Squirrel", text : "Squirrel"},
          {value : "Alphabeaver", text : "Alphabeaver"},
          {value : "Capybara", text : "Capybara"},
          {value : "Chinchilla", text : "Chinchilla"},
          {value : "Boomrat", text : "Boomrat"},
          {value : "Raccoon", text : "Raccoon"},
          {value : "Rat", text : "Rat"},
          {value : "Deer", text : "Deer"},
          {value : "Ibex", text : "Ibex"},
          {value : "Elk", text : "Elk"},
          {value : "Caribou", text : "Caribou"},
          {value : "WildBoar", text : "WildBoar"},
          {value : "Tortoise", text : "Tortoise"},
          {value : "Cobra", text : "Cobra"},
          {value : "Monkey", text : "Monkey"},
          {value : "Boomalope", text : "Boomalope"},
          {value : "Warg", text : "Warg"},
          {value : "Wolf_Timber", text : "Wolf Timber"},
          {value : "Wolf_Arctic", text : "Wolf Arctic"},
          {value : "Fox_Fennec", text : "Fox Fennec"},
          {value : "Fox_Red", text : "Fox Red"},
          {value : "Fox_Arctic", text : "Fox Arctic"},
        ],
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>