<template>
    <div>
        <div id="header">
            <slot/>
        </div>
        <hr class="line"/>
    </div>
</template>

<script>
  export default {
    name : "property-header"
  }
</script>

<style scoped>
    #header {
        color: #FFF;
        font-size: 1.3em;
        margin: 10px 30px;
        height: 23px;
    }

    #header input {
        background: #15191d;
        border: none;
        color: #FFF;
        font-size: 1em;
        font-weight: bold;
        padding: 0;
        height: 23px;
    }

    .line {
        margin: 10px 20px;
        border-color: #737577;
    }

    @media only screen and (max-width: 1370px) {
        #header {
            height: 46px;
        }
    }
</style>