<template>
   
  <div class="morePic">
<!--   <v-menu-wrapper></v-menu-wrapper>
 -->   <div class="container">
        <div class="wrap" style="margin-left: -1100px">
            <div class="swiper" v-for="n in 6">
                <div class="img">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504516371570&di=fa187d2e2b2e8f968a46598311ea4221&imgtype=0&src=http%3A%2F%2Fwww.cnhubei.com%2Fxwzt%2F2015%2F2015snjlx%2Fsnjfj%2F201509%2FW020150930775925767248.jpg" alt="">

                    <div class="mark">
                       <div class="mark_left">
                          <i class="iconfont icon-aixin"></i>
                          <span>喜欢</span><b>13</b>
                          <div class="shareicon">
                              <i class="iconfont icon-fenxiang"></i>
                                 <!-- 分享弹窗 -->
                               <v-share :imgsrc="getImgsrc"></v-share>
                           </div>
                       </div>
                       <div class="mark_right">
                           <span><i>#</i>田园色彩</span>
                       </div>
                    </div>
                </div>

                
            </div>
            
        </div>
        <!-- 左右切换按钮 -->
        <div class="external">
            <a href="javascript:void(0);" class="arrow arrow_left"><</a>
            <a href="javascript:void(0);" class="arrow arrow_right">></a>
        </div>
   </div> 
  </div>
</template>

<script type="text/ecmascript-6">
/* import menuWrapper from './../../components/menuWrapper/menuWrapper'; */
import swiper from '../../../static/js/swiper.js';
import share from './share';
import '../../../static/js/shareto.js';
export default {
    data () {
        return {
            'getImgsrc': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504516371570&di=fa187d2e2b2e8f968a46598311ea4221&imgtype=0&src=http%3A%2F%2Fwww.cnhubei.com%2Fxwzt%2F2015%2F2015snjlx%2Fsnjfj%2F201509%2FW020150930775925767248.jpg'
        };
    },
    methods: {
        next_pic () {
            swiper();
        }
   },
   components: {
   /* 'v-menu-wrapper': menuWrapper */
    'v-share': share
   }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.morePic
    background: #333
    margin-left: 100px
    margin-bottom: 200px
    position: fixed
    height: 100%
    width: 100%
    .container
        width: 1100px
        height: 100%
        margin-left: 12px
        position: relative
        overflow: hidden
        .wrap
            width:8400px 
            height: 100%
            float:left
        .external
          .arrow
            position: absolute
            font-size: 50px
            width: 50px
            height: 50px
            display: block
            line-height: 50px
            text-align: center
            color:#fff
            top:50%
            &.arrow_left
             left:0
            &.arrow_right
             right: 0
         .swiper
             width: 1100px
             height: 100%
             float:left
             display: flex
             margin: auto
             justify-content: center
             align-items: center
             .img
                 position: relative
                 border: 5px solid #fff
                 color: #fff
                 font-size: 12px
                 font-weight: 700
                .mark
                    position: absolute
                    left: 0
                    bottom: 0px
                    height: 45px
                    line-height: 45px
                    width: 100%
                    background: rgba(0,0,0,0.5)
                    .mark_left
                        float: left
                        margin-left: 20px
                        color: #fff
                        font-size: 12px
                        .shareicon
                            display: inline-block
                            position: relative
                        .icon-fenxiang
                            margin-left: 20px
                            
                    .mark_right
                        float: right
                        margin-right: 20px
                        color: #fff
                        font-size: 12px
                        
         .swiper img
             max-width: 1000px
             max-height: 736px
             
</style>
