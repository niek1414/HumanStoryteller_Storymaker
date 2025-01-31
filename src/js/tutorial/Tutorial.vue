<template>
    <div class="tutorial-container" v-if="!loading">
        <v-speed-dial
                direction="top"
                right
                top
                transition="slide-y-reverse-transition"
                v-model="fab"
        >
            <v-btn
                    color="#41474e"
                    dark
                    fab
                    slot="activator"
                    v-model="fab"
            >
                <v-icon>settings</v-icon>
                <v-icon>close</v-icon>
            </v-btn>
            <v-btn
                    color="green"
                    dark
                    fab
                    small
                    v-on:click="hint"
            >
                <v-icon>help_outline</v-icon>
            </v-btn>
            <v-btn
                    color="orange"
                    dark
                    fab
                    small
                    v-on:click="reset"
            >
                <v-icon>restore</v-icon>
            </v-btn>
            <v-btn
                    color="red"
                    dark
                    fab
                    small
                    v-on:click="stop"
            >
                <v-icon>stop</v-icon>
            </v-btn>
        </v-speed-dial>
        <Step
                :finish="isLast"
                :key="index"
                :next="next"
                :step="step"
                v-for="(step, index) of steps"
                v-if="currentStep === index"
        />
    </div>
    <p class="loading" v-else>loading...</p>
</template>

<script>
  import Step from "./Step";
  import _ from 'lodash';

  export default {
    name : 'Tutorial',
    components : {Step},
    props : {
      steps : {
        type : Array,
        default : () => []
      },
      finishCallback : {
        type : Function
      },
    },
    data() {
      return {
        currentStep : 0,
        fab : false,
        loading : true
      }
    },
    computed : {
      isLast() {
        return this.currentStep === this.numberOfSteps - 1
      },
      numberOfSteps() {
        return this.steps.length
      },
      activeStep() {
        return this.steps[this.currentStep]
      },
    },
    methods : {
      next : function() {
        if (this.recursiveHint(this.activeStep.graph, window.toolbar.storyArc.currentStory.lastRoot, []) !== null) {
          this.reset();
        }
        if (this.currentStep < this.numberOfSteps - 1) {
          this.currentStep++;
          if (this.steps[this.currentStep].callback !== undefined) {
            this.steps[this.currentStep].callback();
          }
        } else {

          this.finishCallback();
        }
      },
      update : function(graph) {
        if (this.recursiveHint(this.activeStep.graph, graph.lastRoot, []) === null && !this.activeStep.button) {
          this.next();
        }
      },
      stop : function() {
        window.updateTutorial(0);
      },
      reset : function() {
        if (this.currentStep - 1 >= 0) {
          window.toolbar.storyArc.loadTutorial(JSON.parse(JSON.stringify(this.steps[this.currentStep - 1].file)));
        }
      },
      hint : function() {
        const hint = this.recursiveHint(this.activeStep.graph, window.toolbar.storyArc.currentStory.lastRoot, []);
        window.toolbar.popupMessage(hint !== null ? hint : "🤔 This is the solution, press the next button!");
      },
      /**
       * @param exampleNode
       * @param actualNode
       * @param checkedList
       * @returns {string|null}
       */
      recursiveHint : function(exampleNode, actualNode, checkedList) {
        if (checkedList.includes(exampleNode.uuid)) {
          return null;
        }
        checkedList.push(exampleNode.uuid);

        function shouldIgnore(obj, prop) {
          return obj.__ignore !== undefined && obj.__ignore.includes(prop)
        }

        const that = this;

        function name(node) {
          return node.isRoot ? "root" : node.eventName;
        }

        if (exampleNode === null || exampleNode === undefined) {
          return null;
        }
        if (actualNode === null || actualNode === undefined) {
          return `Expected an event of type ${exampleNode.type}. This hint should not happen D:`;
        }
        if (exampleNode.type !== actualNode.type.value.value && !shouldIgnore(exampleNode, "type")) {
          if (!actualNode.isRoot) {
            return `The event '${name(actualNode)}' should be of type ${exampleNode.type}`
          }
        }
        if (exampleNode.isDivider !== actualNode.isDivider && !shouldIgnore(exampleNode, "divider")) {
          return `The event '${name(actualNode)}' should be of type ${exampleNode.type}`
        }

        if (!exampleNode.isDivider) {
          for (let p in exampleNode.properties) {
            if (p === "letter" || p === "__ignore") {
              continue;
            }
            if (exampleNode.properties.hasOwnProperty(p)) {
              function displayValue() {
                let displayValue = exampleNode.properties[p];
                if (Array.isArray(displayValue)) {
                  return "set: " + displayValue.join(", ");
                }
                if (typeof displayValue === "boolean") {
                  return displayValue;
                }
                if (typeof displayValue === 'object') {
                  return JSON.stringify(displayValue);
                }
                if (displayValue.startsWith("v_")) {
                  displayValue = "variable with name:" + displayValue;
                }
                return displayValue;
              }

              let result;
              if (typeof exampleNode.properties[p] === 'object' && !Array.isArray(exampleNode.properties[p])) {
                result = true;
                for (let q in exampleNode.properties[p]) {
                  if (exampleNode.properties[p].hasOwnProperty(q)) {
                    if (!_.isEqual(actualNode.properties[p][q], exampleNode.properties[p][q]) && !shouldIgnore(exampleNode.properties[p], q)){
                      result = false;
                    }
                  }
                }
              } else {
                result = _.isEqual(actualNode.properties[p], exampleNode.properties[p]);
              }

              if ((!actualNode.properties.hasOwnProperty(p) || !result) && !shouldIgnore(exampleNode.properties, p)) {
                return `The event '${name(actualNode)}' should have set property ${p} to ${displayValue()}`
              }
            }
          }

          if (!_.isEqual(exampleNode.conditions, actualNode.conditions) && !shouldIgnore(exampleNode, "conditions")) {
            let val = "a different set of";
            if (exampleNode.conditions.length > actualNode.conditions.length) {
              val = "more";
            } else if (exampleNode.conditions.length < actualNode.conditions.length) {
              val = "less";
            }
            return `The event '${name(actualNode)}' should have ${val} conditions.`
          }

          if (!_.isEqual(exampleNode.storage, actualNode.storage) && !shouldIgnore(exampleNode, "storage")) {
            let val = "a different set of";
            if (exampleNode.storage.length > actualNode.storage.length) {
              val = "more";
            } else if (exampleNode.storage.length < actualNode.storage.length) {
              val = "less";
            }
            return `The event '${name(actualNode)}' should have ${val} variable modifiers.`
          }
        }

        function getConn(port) {
          let con = null;
          const size = port === null ? 0 : port.getConnections().getSize();
          for (let c = 0; c < size; c++) {
            con = port.getConnections().get(c)
          }
          return con === null ? null : {offset : con.getWeight(), target : con.getTarget().parent};
        }

        function checkConnection(exampleConn, actualConn, isLeft = false) {
          const side = isLeft ? "(left)" : "right";
          if (exampleConn === null || exampleConn === undefined) {
            if (actualConn !== null && actualConn !== undefined) {
              return `The node '${actualNode.eventName}' should NOT have a ${side} connection to an event.`
            }
            return null;
          }
          if (actualConn === null || actualConn === undefined) {
            return `The node '${actualNode.eventName}' should have a ${side} connection to an event.`
          }

          if (!shouldIgnore(exampleConn, "offset")) {
            if (Math.abs(exampleConn.offset - actualConn.offset) > 100) {
              return `The node '${actualNode.eventName}' has a ${side} connection with a length of ${Math.round(actualConn.offset) / 1000} but should be ${exampleConn.offset / 1000}.`
            }
          }

          return that.recursiveHint(exampleConn.target, actualConn.target, checkedList);
        }

        if (!shouldIgnore(exampleNode, "left")) {
          const err = checkConnection(exampleNode.left, getConn(actualNode.left), true);
          if (err !== null) {
            return err;
          }
        }
        if (!shouldIgnore(exampleNode, "right")) {
          return checkConnection(exampleNode.right, getConn(actualNode.right))
        }
        return null;
      },
      resolveConnection : function(connection, createdList, source) {
        if (connection !== undefined && connection !== null) {
          for (const created of createdList) {
            if (created.uuid === connection.uuid) {
              return {target : created, source : source, offset : parseFloat(connection.offset), __ignore : connection.__ignore};
            }
          }
        }
        return null;
      },
      resolveStep : function(step) {
        const that = this;
        return new Promise(function(resolve) {
          $.get({
            url : "/tutorial/" + step.name + ".json",
            cache : true,
            complete : function(data) {
              data = data.responseJSON;
              step.file = JSON.parse(JSON.stringify(data));
              let root = null;
              const createdList = [];
              for (const event of data.story) {
                let created;
                if (event.uuid === "root") {
                  delete event.incident.type;
                  created = {type : "LongEntry", properties : event.incident, conditions : [], storage : [], isDivider : false, isRoot : true, __ignore : event.incident.__ignore};
                  root = created;
                } else if (event.uuid.startsWith("D__")) {
                  created = {
                    type : "Nothing",
                    properties : {letter : {show : false}},
                    conditions : [],
                    storage : [],
                    isDivider : true,
                    isRoot : false,
                    __ignore : event.incident.__ignore
                  };
                  created.uuid = event.uuid.substring(3);
                } else {
                  const type = event.incident.type;
                  delete event.incident.type;
                  if (event.incident.letter === undefined) {
                    event.incident.letter = {show : true, type : "Default"};
                  }
                  if (event.storage === undefined) {
                    event.storage = [];
                  }
                  created = {
                    type : type,
                    properties : event.incident,
                    conditions : event.conditions,
                    storage : event.storage,
                    isDivider : false,
                    isRoot : false,
                    __ignore : event.incident.__ignore
                  };
                  created.uuid = event.uuid;
                }

                created.left = event.left;
                created.right = event.right;
                created.eventName = event.name;
                createdList.push(created);
              }

              for (const created of createdList) {
                created.left = that.resolveConnection(created.left, createdList, created);
                created.right = that.resolveConnection(created.right, createdList, created);
              }
              step.graph = root;
              resolve(true);
            }
            ,
            error : function() {
              resolve(false);
            }
          });
        })
      }
    },
    mounted : function() {
      const that = this;
      if (!this.loading) {
        return;
      }
      const promises = [];
      for (let i = 0; i < this.steps.length; i++) {
        const step = this.steps[i];
        if (step.file === null || step.file === undefined) {
          promises.push(this.resolveStep(step))
        }
      }
      Promise.all(promises).then(function(values) {
        that.loading = false;
        if (values.includes(false)) {
          window.toolbar.errorMessage("Couldn't load a tutorial file (" + values.join(",") + ") on tutorial " + that.$parent.$options.name)
        }
        window.onStoryEdit = that.update;
        if (that.steps.length > 0) {
          window.toolbar.storyArc.loadTutorial(JSON.parse(JSON.stringify(that.steps[0].file)));
        }
      });
    }
  }
</script>

<style scoped>
    .tutorial-container {
        position: relative;
        box-shadow: inset 0 0 5px 0px #000;
    }

    .v-speed-dial--top {
        top: 0;
        position: absolute;
    }

    .v-speed-dial--right {
        right: 7px;
    }

    .loading {
        text-align: center;
        height: 160px;
        color: #737373;
        font-size: 3em;
        line-height: 160px;
    }
</style>