<template>
    <span>
        <div>
            when pawn is younger than
        </div>
        <div>
            <NumberField label="Age" :myModel.sync="filter['Age']"></NumberField>
        </div>
        <div>
            .
        </div>
    </span>
</template>

<script>
  import NumberField from "../NumberField";
  export default {
    components : {NumberField},
    props : ["filter"],
    name : "NaturalAgeUnder"
  }
</script>

<style scoped>
</style>