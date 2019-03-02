<template>
    <div class="info-box">
        <p>Has no options. Will try and find used power conduit. If connected battery are not empty the may explode.</p>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "ShortCircuit"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>