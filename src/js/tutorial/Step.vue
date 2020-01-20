<template>
    <div class="step">
        <div class="title">{{step.title}}</div>
        <div class="content">
            <component :is="componentLoader"/>
        </div>
        <v-btn class="next-button" v-on:click="next" v-if="step.button">Next step</v-btn>
    </div>
</template>

<script>
  import LearnHover from "./LearnHover";

  export default {
    name : "Step",
    props : {
      step : {
        type : Object
      },
      next : {
        type : Function
      },
    },
    data() {
      return {
        component : null,
        rand : Math.random()
      }
    },
    computed : {
      componentLoader() {
        const that = this;
        return () => {
          return new Promise(function(resolve) {
            resolve({
              name : "DynamicComponent_" + that.rand,
              components : {LearnHover},
              template : `<span>` + that.step.content + `</span>`,
            });
          });
        }
      }
    }
  }
</script>

<style scoped>
    .step {
        color: #ebebeb;
        padding: 15px;
        height: 160px;
        overflow: auto;
        line-height: 1.4;
    }

    .content {
        margin-top: 15px;
        margin-left: 5px;
        font-size: 1.2em;
    }

    .next-button {
        opacity: 0.4;
        position: absolute;
        right: 7px;
        bottom: 7px;
    }

    .next-button:hover{
        opacity: 1;
    }
</style>