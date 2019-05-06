<template>
    <span style="width: 100%; position: relative;">
        <v-text-field v-if="checked" :label="label + ' variable -- input variable name, not a number! (click right icon to switch -->)'" type="text" v-model="thisModel"></v-text-field>
        <v-text-field v-else :label="label" type="number" v-model="thisModel"></v-text-field>
        <label class="var-checkbox">
            <input v-model="checked" type="checkbox" style="display: none;">
            <i :class="'fas fa-shapes' + (checked ? ' checked' : '')"></i>
        </label>
    </span>
</template>

<script>
  export default {
    props : ["label", "myModel"],
    name : "NumberField",
    data() {
      return {
        checked : typeof this.myModel === 'string' && this.myModel.startsWith("v_")
      }
    },
    computed : {
      thisModel : {
        get : function() {
          if (typeof this.myModel === 'string' && this.myModel.startsWith("v_")) {
            return this.myModel.substring(2);
          }
          return this.myModel;
        },
        set : function(value) {
          this.$emit('update:myModel', this.checked ? "v_" + value : value)
        }
      }
    }
  }
</script>

<style scoped>
    .var-checkbox {
        position: absolute;
        right: 17px;
        top: 13px;
        padding: 5px 7px;
    }

    .checked {
        color: #d00000;
    }
</style>