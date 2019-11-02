<template>
    <span style="width: 100%; position: relative; display: flex;">
        <v-input class="property-box" :messages="message">
            <v-autocomplete
                    v-model="myModel.Thing"
                    :items="things"
                    :label="label"
                    :clearable=true
                    v-on:change="clean()"
            ></v-autocomplete>
            <template v-if="myModel.Thing">
                <v-autocomplete
                        v-if="!hasNoStuff"
                        :items="stuffs"
                        v-model="myModel.Stuff"
                        label="Material (if applicable)"
                        :clearable=true
                ></v-autocomplete>
                <v-select
                        v-if="!hasNoQuality"
                        :items="qualities"
                        v-model="myModel.Quality"
                        label="Quality (if applicable)"
                        :clearable=true
                ></v-select>
                <NumberField v-if="hasAmount" label="Amount" :myModel.sync="myModel.Amount" :dynamic="true"></NumberField>
            </template>
            <slot></slot>
        </v-input>
    </span>
</template>

<script>
  import EventTypes from "../../storyGraph/EventTypes";
  import NumberField from "./NumberField";

  export default {
    components : {NumberField},
    props : ["label", "message", "myModel", "things", "hasAmount", "hasNoQuality", "hasNoStuff"],
    name : "ThingField",
    beforeUpdate : function() {
      if (!(this.myModel && typeof this.myModel === 'object')) {
        this.myModel = {};
      }
    },
    data() {
      if (!(this.myModel && typeof this.myModel === 'object')) {
        this.myModel = {};
      }
      return {
        stuffs : EventTypes.Stuff,
        qualities : EventTypes.ItemQualities,
      }
    },
    methods : {
      clean : function() {
        if (!(this.myModel && typeof this.myModel === 'object')) {
          this.myModel = {};
        }
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