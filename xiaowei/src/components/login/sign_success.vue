<template>
  <div class="success">
    <div class="sing_succcess">
        <img src="./img/sign_s.jpg" alt="">
    </div>
    <input type="submit" value="登录" @click="toLogin">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
     toLogin () {
        this.$emit('listenToChildEvent', '1');
     }
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.success
    width: 400px
    height: 440px
    background: #fff
    border-radius: 10px
    overflow: hidden
    margin: auto
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    .sing_succcess
        margin: 60px 50px 50px
        img
           margin: auto
           display: flex
     input[type="submit"]
         width: 360px
         height: 60px
         font-size: 14px
         color: #fff
         font-weight: 700
         border-radius: 5px
         text-algin: center
         margin: auto
         display: flex
         justify-content: center
         background: #ec3a6e
         cursor: pointer

</style>
