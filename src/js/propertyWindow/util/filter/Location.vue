<template>
    <span>
        <div>
            when pawn is within
        </div>
        <div>
            <LocationField :myModel.sync="filter['Location']"/>
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
    name : "Location"
  }
</script>

<style scoped>
</style>