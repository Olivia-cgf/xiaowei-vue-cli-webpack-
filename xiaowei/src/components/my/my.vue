<template>
  <div class="my">
  <!--=====menu-wrapper=====-->
   <v-menu-wrapper  :message="my" v-on:listenToChildEvent="showMsgFromChild"></v-menu-wrapper>
   <div class="user">
     <div class="info">
       <div class="avatar">
       
          <img :src="my.adminInfo.userImg" alt="">
      
       </div>
       <div class="nickname">
          <span class="name">
            {{my.adminInfo.name}}
          </span>
          <p class="introduce">
          </p>
          <i class="love"></i><b class="num">{{my.adminInfo.lovenum}}</b>
       </div>
     </div>
     <div class="time-line" v-for="item in my.adminInfo.timeLine" >
       <h1 class="time">{{item.time}}</h1>
       <div class="perpic">
         <router-link v-for="(item,index) in item.imgArr" class="pank" to="/my/morepic" v-bind="changepank(item.pank)" :class="pankClass" :key="item.id">
           <img :src="item.pic" alt="">
         </router-link>
       </div>
     </div>
   </div>

   <!-- 显示大图 -->
   <!-- <v-morepic></v-morepic> -->
  </div>

</template>

<script type="text/ecmascript-6">
import menuWrapper from './../../components/menuWrapper/menuWrapper';
const ERR_OK = 0;
export default {
  data () {
    return {
      selftimer: {},
      my: {},
      flag: 0,
      pankClass: ''
    };
  },
 components: {
    'v-menu-wrapper': menuWrapper
  },
  methods: {
    showMsgFromChild (data) {
      this.flag = data;
    },
    changepank (data) {
      this.pankClass = 'pank' + data;
    }
  },
  created () {
    this.$http.get('/api/my').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.my = response.data;
      }
    });
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.user
  margin-top: 80px
  margin-left: 112px
  .info
    position: relative
    width: 1080px
    height: 200px
    background: url(../../../static/image/1.png) no-repeat
    .avatar
      width: 60px
      height: 60px
      border: 10px solid #fff
      border-radius: 50%
      display: flex
      position: absolute
      left: 502px
      top: -40px
      img
        width: 100%
        border-radius: 50%
    .nickname
      clear:both
      padding-top: 40px
      text-align: center
      .name
        color: #fff
        font-size: 24px
        text-align: center
        margin-top: 20px
        font-weight: 700
        display: inline-block
      .introduce
        color: #fff
        font-size: 14px
        padding: 10px
        line-height: 20px
      .love
        color: #fff
        font-size: 12px
      .num
        color: #fff
        font-size: 12px
  .time-line
    border-left: 1px solid #ccc
    margin-left: 30px
    padding: 40px 0
    .time
      margin: 0px 0 40px
      color: #fff
      background: url(../../../static/image/3.png) no-repeat 10px 0
      font-size: 12px
      width: 83px
      height: 22px
      line-height: 22px
      text-align: center
      position: relative
      padding-left: 10px
      &::before
        display: block
        content: ""
        width: 10px
        height: 10px
        border-radius: 50%
        position: absolute
        left: -5px
        top: 5px
        z-index: 3
        background: #ccc
    .perpic
      width: 1000px
      margin-left: 30px
      overflow: hidden
      a
        width: 120px
        height: 120px
        margin: 20px 20px 0 0px
        overflow: hidden
        float: left
        position: relative
        cursor: pointer
        &.pank
          &::before
            position: absolute
            display: block
            content: ''
            width: 50px
            height: 56px
            right: 10px
            top: 10px
          &.pank1::before
            background: url(../../../static/image/no1.png) no-repeat
          &.pank2::before
            background: url(../../../static/image/no2.png) no-repeat
          &.pank3::before
            background: url(../../../static/image/no3.png) no-repeat
      img
        width: 100%
</style>
