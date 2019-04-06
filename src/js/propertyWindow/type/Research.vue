<template>
    <div class="info-box">
        <v-input messages="Complete current research?">
            <v-switch
                    label="Complete current research"
                    v-model="selected.properties['FinishCurrent']"
            ></v-switch>
        </v-input>

        <v-autocomplete messages="Research to finish. All preconditions will also be researched."
                        v-model="selected.properties['Projects']"
                        multiple
                        :items="projects"
                        label="Projects"
        ></v-autocomplete>
    </div>
</template>

<script>
  import NumberField from "../util/NumberField";
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    components : {NumberField},
    props : ["selected"],
    name : "Research",
    data : function() {
      return {
        projects : EventTypes.ResearchProject
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>