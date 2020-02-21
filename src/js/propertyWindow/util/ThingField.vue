<template>
    <span style="width: 100%; position: relative; display: flex;">
        <v-input class="property-box" :messages="message">
            <v-autocomplete
                    v-model="myModel.Thing"
                    :items="things"
                    :label="label"
                    :clearable=true
                    v-on:change="clean()"
            />
            <template v-if="myModel.Thing">
                <v-autocomplete
                        v-if="!hasNoStuff"
                        :items="stuffs"
                        v-model="myModel.Stuff"
                        label="Material (if applicable)"
                        :clearable=true
                />
                <v-select
                        v-if="!hasNoQuality"
                        :items="qualities"
                        v-model="myModel.Quality"
                        label="Quality (if applicable)"
                        :clearable=true
                />
                <NumberField v-if="hasAmount" label="Amount" :myModel.sync="myModel.Amount" :dynamic="true"/>
            </template>
            <slot/>
        </v-input>
    </span>
</template>

<script>
    import EventTypes from "../../storyGraph/EventTypes";
    import NumberField from "./NumberField";

    export default {
        components: {NumberField},
        props: ["label", "message", "myModel", "things", "hasAmount", "hasNoQuality", "hasNoStuff"],
        name: "ThingField",
        beforeUpdate: function () {
            if (!(this.myModel && typeof this.myModel === 'object')) {
                this.myModel = {};
            }
        },
        data() {
            if (!(this.myModel && typeof this.myModel === 'object')) {
                this.myModel = {};
            }
            return {
                stuffs: EventTypes.Stuff,
                qualities: EventTypes.ItemQualities,
            }
        },
        methods: {
            clean: function () {
                if (!(this.myModel && typeof this.myModel === 'object')) {
                    this.myModel = {};
                }
                const myModel = this.myModel;

                this.myModel.Thing =  myModel.Thing;
                delete myModel.Stuff;
                delete myModel.Quality;
                this.myModel.Thing = myModel.Thing;

                this.myModel = myModel;
            }
        },
        watch: {
            myModel: {
                handler: function (newVal) {
                    this.$emit('update:myModel', newVal);
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
</style>