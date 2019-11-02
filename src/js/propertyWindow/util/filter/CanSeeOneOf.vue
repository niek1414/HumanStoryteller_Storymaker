<template>
    <span>
        <div>
            when pawn can see one of
        </div>
        <div>
            <PawnGroupSourceField :myModel.sync="filter['Target']"></PawnGroupSourceField>
        </div>
        <div>
            .
        </div>
    </span>
</template>

<script>
  import PawnGroupSourceField from "../PawnGroupSourceField";
  export default {
    components : {PawnGroupSourceField},
    props : ["filter"],
    name : "CanSeeOneOf"
  }
</script>

<style scoped>
</style>