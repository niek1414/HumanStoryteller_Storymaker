<template>
    <span style="width: 100%; position: relative; display: flex;">
        <v-select
                :items="things"
                v-model="myModel.Thing"
                :label="label"
                :clearable=true
                v-on:change="clean()"
        ></v-select>
        <template v-if="myModel.Thing">
            <v-select
                    :items="stuffs"
                    v-model="myModel.Stuff"
                    label="Material (if applicable)"
                    :clearable=true
            ></v-select>
            <v-select
                    :items="qualities"
                    v-model="myModel.Quality"
                    label="Quality (if applicable)"
                    :clearable=true
            ></v-select>
        </template>
    </span>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";

  export default {
    props : ["label", "myModel", "things"],
    name : "ThingField",
    beforeMount : function() {
      if (!(this.myModel && typeof this.myModel === 'object')) {
        this.myModel = {};
      }
    },
    data() {
      return {
        stuffs : EventTypes.Stuff,
        qualities : EventTypes.ItemQualities,
      }
    },
    methods : {
      clean : function() {
        var temp = this.myModel.Thing;
        this.myModel = {};
        this.myModel.Thing = temp;
      }
    },
    watch : {
      myModel : {
        handler : function(newVal) {
          this.$emit('update:myModel', newVal);
        },
        deep : true
      }
    }
  }
</script>

<style scoped>
</style>