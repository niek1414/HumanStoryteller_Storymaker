<template>
    <div class="tip-text" @mouseover="active = true" @mouseleave="active = false">
        <span class="tip-span"><slot/></span>
        <div class="popup" v-if="active"><img :src="image.src"/></div>
    </div>
</template>

<script>
  export default {
    name : "LearnHover",
    props : {
      img : {
        type : String
      },
    },
    data() {
      return {
        active : false,
        loading : true,
        image : null
      }
    },
    mounted : function() {
      const that = this;
      if (!this.loading) {
        return;
      }
      this.image = new Image();
      this.image.onload = function() {
        that.loading = false;
      };
      this.image.src = "/tutorial/img/" + this.img;
    }
  }
</script>

<style scoped>
    .tip-text {
        display: inline-block;
        cursor: pointer;
    }

    .tip-span {
        position: relative;
        background: linear-gradient(to right, #1a21f3, #ff6100);
        background-repeat: repeat-x;
        background-size: 100% 2px;
        background-position: 0 98%;
    }

    .tip-span::before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background: linear-gradient(to right, #ff6100,  #1a21f3);
        background-repeat: repeat-x;
        background-size: 100% 2px;
        background-position: 0 98%;

        transition: opacity 0.5s linear;
        opacity: 0;
    }

    .tip-span:hover::before {
        opacity: 1;
    }

    .popup {
        width: 160px;
        position: absolute;
        z-index: 1;
        bottom: calc(100% + 13px);
        left: 50%;
        margin-left: -80px;
    }

    .popup img {
        width: 100%;
        margin-bottom: -3px;
        border-radius: 8px;
        box-shadow: 0 0 20px 0 #00000059;
    }
</style>