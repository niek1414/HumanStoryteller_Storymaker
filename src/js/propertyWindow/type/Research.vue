<template>
    <div class="info-box">
        <v-input class="property-box" messages="Complete current research?">
            <v-switch
                    label="Complete current research"
                    v-model="selected.properties['FinishCurrent']"
            />
        </v-input>

        <v-input class="property-box" messages="Research to finish. All preconditions will also be researched.">
            <v-autocomplete
                    v-model="selected.properties['Projects']"
                    multiple
                    :items="projects"
                    label="Projects"
            />
        </v-input>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  import DataFile from "../../storyGraph/DataFile";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "Research",
    data : function() {
      return {
        projects : DataFile.ResearchProject
      }
    }
  }
</script>

<style scoped>
</style>