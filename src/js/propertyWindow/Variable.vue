<template>
    <div class="info-box">
        <p>
            Here you can set and modify variables. (Explanation at the bottom)<br>
            <v-btn block color="secondary" v-on:click="addVariable">Add modification</v-btn>

            <template v-for="(storage, index) in selected.storage">
                <v-card>
                    <v-card-text>
                        <v-container grid-list-md pa-0 ma-0>
                            <v-layout align-center justify-space-between row>
                                <v-flex xs4>
                                    <v-input messages="The name of the variable. This is case sensitive">
                                        <v-text-field label="Variable name" type="text" v-model="storage['Name']"></v-text-field>
                                    </v-input>
                                </v-flex>
                                <v-flex xs4>
                                    <v-input messages="Modification type. Dividing by zero results in no change.">
                                        <v-select :items="modifications" label="Modification type" type="text" v-model="storage['Modification']"></v-select>
                                    </v-input>
                                </v-flex>
                                <template v-if="storage['Modification'] === 'EqualVar'">
                                    <v-input messages="The name of the variable to copy. This is case sensitive">
                                        <v-text-field label="Variable name" type="text" v-model="storage['NewVar']"></v-text-field>
                                    </v-input>
                                </template>
                                <template v-else>
                                    <v-flex xs4>
                                        <v-input messages="The number at the end of the modification. (`var` add 1 becomes var + 1)">
                                            <v-text-field label="Constant" type="number" v-model="storage['Constant']"></v-text-field>
                                        </v-input>
                                    </v-flex>
                                </template>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat color="error" v-on:click="selected.storage = selected.storage.filter(function(item) {return item !== storage})">remove</v-btn>
                    </v-card-actions>
                </v-card>
                <v-divider v-if="index + 1 < selected.storage.length"></v-divider>
            </template>
            <br><br>
            <b>Explanation:</b><br>
            This is a bit more advanced.<br>
            Variables in this mod are numbers that are stored and can influence the story.<br>
            <br>
            Example:<br><br>
            <kbd>Name: GoodChoiceCounter <br> Modification: add <dfn>1</dfn></kbd>
            <br><br>
            Now <dfn>GoodChoiceCounter</dfn> is 1<br>
            You can use this to give the player a bad event if his GoodChoiceCounter is 0:<br><br>
            <kbd>Condition of an event.<br> Condition name:<dfn> Compare variable</dfn> <br> Name: GoodChoiceCounter<br> Check: equal to<br> Constant: 0</kbd><br>
            <br>
            Now just connect the left of the event to the bad event you want to trigger.<br><br>
            <b>Note 1:</b><br>
            If variables are not known, they will first be created with the value 0<br><br>
            <b>Note 2:</b><br>
            Modifications are executed BEFORE conditional checking and AFTER the execution of the event itself.<br><br>
        </p>
    </div>
</template>

<script>
  export default {
    name : "variable",
    props : ["canvas", "selected"],
    data : () => ({
      modifications : [
        {value : 'Add', text : 'Add'},
        {value : 'Subtract', text : 'Subtract'},
        {value : 'Divide', text : 'Divide by'},
        {value : 'Multiply', text : 'Multiply by'},
        {value : 'Equal', text : 'Set to'},
        {value : 'EqualVar', text : 'Set to variable..'},
      ],
    }),
    methods : {
      addVariable : function() {
        this.selected.storage.push({});
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>