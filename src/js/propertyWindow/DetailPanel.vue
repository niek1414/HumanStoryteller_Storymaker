<template>
    <div>
        <property-header>Story settings</property-header>

        <div class="info-box">
            <v-text-field
                    label="Story title"
                    v-model="project.name"
            ></v-text-field>
            <v-textarea
                    outline
                    label="Mail message"
                    v-model="project.description"
            ></v-textarea>
        </div>
    </div>
</template>

<script>
  import PropertyHeader from "./PropertyHeader";

  export default {
    name : "detail-panel",
    props : ["project"],
    components : {PropertyHeader}
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }

    b {
        font-family: "Open Sans Semibold", sans-serif;
        font-weight: bold;
    }
</style>