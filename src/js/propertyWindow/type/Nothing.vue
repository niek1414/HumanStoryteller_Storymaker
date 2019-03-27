<template>
    <div class="info-box"><p>This event does nothing on its own.<br>Can be used to display a message on its own or create a silent conditional split.</p></div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "Nothing"
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>