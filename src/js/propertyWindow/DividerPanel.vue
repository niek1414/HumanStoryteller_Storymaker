<template>
    <div>
        <property-header>Divider</property-header>

        <div class="info-box">
            <b>*WARNING, READ FIRST:*</b><br><br>
            The divider creates two concurrent lanes. This means that one runner splits in two, both executing the next events at the same time.<br>
            A use for this is to continually check if your main character is still alive for example.<br>
            <br>
            <b>DON'T</b> merge two concurrent stories together unless you want the events to be executed twice from that point!<br>
            <b>DON'T</b> put a divider in a loop as this would very fast create a massive amount of concurrent events!<br>
            <br>
            Note that the game does <b>NOT</b> wait per child with splitting.<br>
            Both connected events will be executed <b>right way</b> when a divider is encountered!<br>
            <br>
            The divider is a very powerful tool, but use with caution.
        </div>
    </div>
</template>

<script>
  import PropertyHeader from "./PropertyHeader";

  export default {
    name : "divider-panel",
    components : {PropertyHeader}
  }
</script>

<style scoped>
</style>