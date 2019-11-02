<template>
    <span>
        <div>
            when pawn can reach
        </div>
        <div>
            <LocationField :myModel.sync="filter['Target']"></LocationField>
        </div>
        <div>
            .
        </div>
    </span>
</template>

<script>
  import LocationField from "../LocationField";

  export default {
    components : {LocationField},
    props : ["filter"],
    name : "CanReach"
  }
</script>

<style scoped>
</style>