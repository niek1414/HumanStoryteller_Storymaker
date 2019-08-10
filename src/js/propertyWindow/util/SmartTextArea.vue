<template>
    <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands }">
            <div class="menubar">
                <button class="menubar__button" @click="commands.mention({ id: 1, label: 'Philipp Kühn' })">
                    <icon name="mention"/>
                    <span>Insert Mention</span>
                </button>
            </div>
        </editor-menu-bar>
        <editor-content class="editor__content" :editor="editor"/>

        <div class="suggestion-list" v-show="showSuggestions" ref="suggestions">
            <template v-if="hasResults">
                <div
                        v-for="(user, index) in filteredUsers"
                        :key="user.id"
                        class="suggestion-list__item"
                        :class="{ 'is-selected': navigatedUserIndex === index }"
                        @click="selectUser(user)"
                >
                    {{ user.name }}
                </div>
            </template>
            <div v-else class="suggestion-list__item is-empty">
                No users found
            </div>
        </div>
    </div>
</template>

<script>
    //TODO make this..
  import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
  import {
    HardBreak,
    Heading,
    Mention,
    Code,
    Bold,
    Italic,
  } from 'tiptap-extensions'
  export default {
    props : ["label", "myModel"],
    name : "SmartTextArea",
    data() {
    },
    computed : {
      thisModel : {
        get : function() {
          return this.myModel;
        },
        set : function(value) {
          this.$emit('update:myModel', value)
        }
      },
      variables : function() {
        return window.toolbar.view.getVariables();
      }
    }
  }
</script>

<style scoped>

</style>