<template>
    <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, getMarkAttrs, isActive }">
            <div class="menubar">
                <button :class="{ 'is-active': isActive.bold() }"
                        @click="commands.bold"
                        class="menubar__button">
                    <i class="fas fa-bold"/>
                </button>
                <button :class="{ 'is-active': isActive.italic() }"
                        @click="commands.italic"
                        class="menubar__button">
                    <i class="fas fa-italic"/>
                </button>
                <button :class="{ 'is-active': getMarkAttrs('fontsize').level === 5}"
                        @click="commands.fontsize({ level: 5, current: getMarkAttrs('fontsize').level})"
                        class="menubar__button"
                        style="margin-left: 10px"><i class="fas fa-font" style="font-size: 0.6em"/>
                </button>
                <button :class="{ 'is-active': getMarkAttrs('fontsize').level === 6}"
                        @click="commands.fontsize({ level: 6, current: getMarkAttrs('fontsize').level})"
                        class="menubar__button"><i class="fas fa-font" style="font-size: 1em"/>
                </button>
                <button :class="{ 'is-active': getMarkAttrs('fontsize').level === 7}"
                        @click="commands.fontsize({ level: 7, current:  getMarkAttrs('fontsize').level})"
                        class="menubar__button"><i class="fas fa-font" style="font-size: 1.5em"/>
                </button>
                <button :class="{ 'is-active': insertPawnTab}" class="menubar__button"
                        style="margin-left: 10px;width: auto;padding: 0 10px"
                        v-if="!hasNoInteraction" v-on:click="function (){
                            insertPawnTab = !insertPawnTab
                            if (insertPawnTab){ insertVariableTab = false }
                        }">
                    <span>Insert pawn attribute</span>
                </button>
                <button :class="{ 'is-active': insertVariableTab}" class="menubar__button"
                        style="width: auto;padding: 0 10px"
                        v-if="!hasNoInteraction" v-on:click="function (){
                            insertVariableTab = !insertVariableTab
                            if (insertVariableTab){ insertPawnTab = false }
                        }">
                    <span>Insert variable attribute</span>
                </button>
                <div style="clear:both"></div>
                <div class="insertTab" v-if="insertPawnTab || insertVariableTab">
                    <template v-if="insertPawnTab">
                        <v-autocomplete
                                :clearable=true
                                :items="names"
                                label="Pawn name"
                                v-model="pawnName"
                        />
                        <v-autocomplete
                                :items="['IdName','FullName','ShortName','Age']"
                                label="Pawn attribute"
                                v-model="pawnAttribute"
                        />
                        <v-btn :disabled="!pawnName || !pawnAttribute" v-on:click="function() {commands.pmention({ pawn: pawnName, attr: pawnAttribute })}">
                            Insert
                        </v-btn>
                    </template>
                    <template v-else-if="insertVariableTab">
                        <v-autocomplete
                                :items="variables"
                                label="Variable"
                                v-model="variable"
                        />
                        <v-btn :disabled="!variable" v-on:click="function() {
                                commands.vmention({ variable: variable })
                            }">
                            Insert
                        </v-btn>
                    </template>
                </div>
            </div>
        </editor-menu-bar>
        <div :class="'v-input v-textarea v-text-field v-text-field--enclosed v-text-field--outline theme--dark ' + (isFocused?'v-input--is-focused primary--text':'')"
             v-on:click="focusInput()">
            <div class="v-input__control">
                <div class="v-input__slot" style="overflow: auto;">
                    <div class="v-text-field__slot">
                        <label :class="'v-label theme--dark ' + (isFocused?' primary--text ':'') + (isFocused || pullUp?' v-label--active ' : '')" aria-hidden="true"
                               style="left: 0; right: auto; position: absolute;" v-text="label">
                        </label>
                        <div :style="'width: 100%;' + (startBig?' min-height: 120px;':'')" ref="content">
                            <editor-content :editor="editor" class="editor__content"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {Editor, EditorContent, EditorMenuBar, Extension} from 'tiptap'
  import {Bold, HardBreak, Italic} from 'tiptap-extensions'
  import FontSize from "./tiptap/FontSize";
  import PawnMention from "./tiptap/PawnMention";
  import VariableMention from "./tiptap/VariableMention";

  export default {
    props : ["label", "myModel", "hasNoInteraction", "startBig"],
    name : "SmartTextArea",
    components : {
      EditorContent,
      EditorMenuBar,
    },
    data : function() {
      return {
        isFocused : false,
        pullUp : false,
        editor : new Editor({
          extensions : [
            new HardBreak(),
            new class extends Extension {
              keys() {
                return {
                  Enter(state, dispatch, view) {
                    const {schema, tr} = view.state;
                    const hard_break = schema.nodes.hard_break;
                    const transaction = tr.replaceSelectionWith(hard_break.create()).scrollIntoView();
                    view.dispatch(transaction);
                    return true;
                  }
                }
              }
            }(),
            new Bold(),
            new Italic(),
            new FontSize({levels : [5, 6, 7]}),
            new PawnMention({}),
            new VariableMention({}),
          ],
          content : this.myModel,
          onUpdate : ({getJSON, getHTML}) => {
            const html = getHTML();
            this.pullUp = this.$refs.content.textContent !== "";
            this.setState(html);
          },
          onFocus : () => {
            this.isFocused = true
          },
          onBlur : () => {
            this.isFocused = false
          },
        }),
        insertPawnTab : false,
        pawnName : "",
        pawnAttribute : "",
        insertVariableTab : false,
        variable : "",
      }
    },
    methods : {
      setState : function(html) {
        this.$emit('update:myModel', html)
      },
      focusInput : function() {
        this.editor.focus()
      },
    },
    watch : {
      myModel : {
        immediate : true,
        handler(val) {
          if (val === this.editor.getHTML()) {
            return;
          }
          this.editor.setContent(val);
        }
      }
    },
    computed : {
      variables : function() {
        return window.toolbar.storyArc.getVariables();
      },
      names : function() {
        return window.toolbar.storyArc.getNames();
      },
    },
    mounted() {
      this.$nextTick(function() {
        this.pullUp = this.$refs.content.textContent !== "";
      });
    },
    beforeDestroy() {
      this.editor.destroy()
    },
  }
</script>

<style lang="scss">
    .editor {
        margin-top: 5px;
    }

    .insertTab {
        height: 70px;
        background: #20262c;
        padding: 10px;
        display: flex;
    }

    .editor__content {
        width: 100%;
        margin-top: 31px;
        color: #FFF !important;
    }

    .editor__content span {
        padding: 5px;
        margin: 5px;
        border-radius: 50px;
        border: solid 1px #383838;
    }

    .ProseMirror {
        outline: none !important;
    }

    .menubar__button {
        line-height: 2.7;
        margin-right: 5px;
        float: left;
        background: #20262c;
        width: 30px;
        height: 31px;
    }

    .menubar__button.is-active {
        color: #65b9ff;
    }
</style>