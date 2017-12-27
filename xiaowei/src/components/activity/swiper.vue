<template>
  <div class="swiper mark">
    <div class="swiper-container biaoqian">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="spark" v-for="n in 5" >
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505472072076&di=15feee0620ca158a2b26b912b4044d75&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F25%2F20151125234833_CX8ck.jpeg" alt="">
                    <span class="mark">郊游</span>
                </div>
            </div>
            <div class="swiper-slide">
               <div class="spark" v-for="n in 5" >
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505473929276&di=a95e37b88c14b38f3d2b02da1d78fa6b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F0b55b319ebc4b745d1a5e304c5fc1e178a8215ea.jpg" alt="">
                    <span class="mark">毕业季</span>
                </div>
            </div>
            <div class="swiper-slide">
               <div class="spark" v-for="n in 5" >
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505472072076&di=15feee0620ca158a2b26b912b4044d75&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F25%2F20151125234833_CX8ck.jpeg" alt="">
                    <span class="mark">亲子时光</span>
                </div>
            </div>
        </div>
       
        
      

    </div> 
         <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev iconfont icon-jiantou1"></div>
        <div class="swiper-button-next iconfont icon-jiantou"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from '../../../static/swiper/swiper-3.4.2.min.js';
import '../../../static/swiper/jquery-1.10.1.min.js';

export default {
  components: {},
   mounted () {
     console.log('挂载好了');
     let mySwiper = new Swiper('.swiper-container.biaoqian', {
        pagination: '.swiper-pagination',
        lazyLoading: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true
    });
     console.log(mySwiper);
   }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import '../../../static/swiper/swiper-3.4.2.min.css';

.swiper.mark
  position: relative
  width: 620px
  margin: 0 auto 30px
.swiper-container.biaoqian
    width: 100%
    .swiper-wrapper
    .swiper-slide
        .spark
            width: 100px
            height: 100px
            border-radius: 50%
            float: left
            position: relative
            overflow: hidden
            margin: 10px 12px
            cursor: pointer
           img
            width: 100px
            height: 100px
            border-radius: 50%
          .mark
              background: rgba(0,0,0,0.2)
              position: absolute
              left: 0
              bottom: 0
              text-align: center
              display: block
              padding: 5px 0
              width: 100%
              color: #fff
.swiper-button-next.iconfont,.swiper-button-prev.iconfont
    font-size: 40px
    color: #999
    background: none
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction
   bottom: 0px
.swiper-button-next.iconfont
    right: -20px
.swiper-button-prev.iconfont
    left: -35px
.swiper-pagination-bullet
    background:#f00
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled
    opacity: 1
.swiper-pagination
    left: 50%
    bottom: -10px
</style>
