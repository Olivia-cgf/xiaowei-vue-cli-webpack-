<template>
  <div class="share">
     <h2>分享到</h2>
         <div class="bdsharebuttonbox" data-tag="share_1">
           <li class="" @click="aa($event)">
              <a class="bds_sqq iconfont icon-QQ" data-cmd="sqq"></a>
              <span>qq好友</span>
           </li> 
           <li class="">
              <a class="bds_qzone iconfont icon-qqkongjian2-copy" data-cmd="qzone" href="#"></a>
              <span>qq空间</span>
          </li>
           <li class="">
              <a class="bds_weixin iconfont icon-weixinhaoyou" data-cmd="weixin"></a>
              <span>朋友圈</span>
           </li>
           <li class="">
               <a class="bds_tsina iconfont icon-xinlangweibo" data-cmd="tsina"></a>
               <span>新浪微博</span>
            </li>
         </div>
  </div>
</template>

<script type="text/ecmascript-6">
import '../../../static/js/shareto.js';
export default {
    props: ['imgsrc'],
     methods: {
        aa (data) {
            console.log(event.currentTarget);
            console.log(this.imgsrc);
        }
     }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.share
    position: absolute
    left: 50px
    bottom: 20px
    background: rgba(255,255,255,0.9)
    width: 362px
    border-radius: 5px
    h2
        color: #333
        font-size: 14px
        text-align: center
        padding: 10px
    .bdsharebuttonbox
        overflow: hidden
        margin: 0px 50px  20px
       li
         float: left
         margin-right: 30px
         position: relative
       li:last-child
           margin-right: 0
       a.iconfont
          font-size: 40px
          &.icon-QQ
             color: #4dafea
          &.icon-qqkongjian2-copy 
             color: #eecf3d
          &.icon-weixinhaoyou
             color: #3eb135
          &.icon-xinlangweibo
             color: #df4d69
         a
             width: 100%
             border-radius: 50%
        .bdshare-button-style0-16 
            .bds_sqq,.bds_qzone,.bds_weixin,.bds_tsina
             background: none !important
             margin: 14px 6px 6px 0
        span
            font-size: 12px
            color: #333
            text-align: center
            display: block
</style>
