<template>
    <span :style="dynamic ? 'position: relative;' : 'width: 100%; position: relative;display: flex;font-weight: normal;line-height: 1;'">
        <v-autocomplete
                v-if="checked" :label="label + ' variable'"
                :items="variables"
                v-model="thisModel"
        />
        <v-text-field v-else :label="label" type="number" v-model="thisModel"/>
        <label class="var-checkbox">
            <input v-model="checked"  type="checkbox" style="display: none;">
            <i :class="'fas fa-shapes' + (checked ? ' checked' : '')"/>
        </label>
    </span>
</template>

<script>
  export default {
    props : ["label", "myModel", "dynamic"],
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
      },
      variables : function(){
        return window.toolbar.view.getVariables();
      }
    },
    watch : {
      checked : function(newChecked) {
        this.thisModel = "";
        this.$emit('update:myModel', "");
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