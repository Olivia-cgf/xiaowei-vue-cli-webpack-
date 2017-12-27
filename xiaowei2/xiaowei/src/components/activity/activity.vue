<template>
  <div class="activity">
    <!--=====menu-wrapper=====-->
     <v-menu-wrapper :message="activity" id="aty"></v-menu-wrapper>
      <!--=====recently-wrapper=====-->
      <div class="recently" ref="menuWrapper">
            <h2><i class="iconfont icon-f5"></i>&nbsp;&nbsp;往期花絮&nbsp;&nbsp;<i class="iconfont icon-f5"></i></h2>
              <div id="box" class="albumn">
               <div class="swiper">
    <div class="swiper-container card">
        <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="n in 3" >
              <div class="pic">
                  <img src="./img/1.jpg" alt="">
                  <p class="love iconfont icon-aixin">123123</p>
                </div>
                <div class="recent-wrap">
                    <h1>阳光</h1>
                    <hr>
                    <p>曾经的曾经我们还是纯洁的少年，<br>
                     每天都像阳光一样明媚芳香</p>
                     <router-link to="/activity/recentDetail" class="detail">
                         详情
                     </router-link>
                </div>
            </div>
        </div>
    </div>
   </div>
</div>
     </div>

      <!--=====going-wrapper=====-->
      <div class="going-wrapper">
          <h2 class="title"><i class="iconfont icon-f5"></i>&nbsp;&nbsp;进行中&nbsp;&nbsp;<i class="iconfont icon-f5"></i></h2>
          <ul class="going-display">
              <li v-for="n in 8">
                  <router-link to="/activity/activity_detail">
                      <span>已参与<i>39</i>人</span>
                      <img src="./img/2.jpg" alt="">
                      <h2>亲子时光</h2>
                  </router-link>
              </li>
          </ul>
      </div>

      <!-- 页脚 -->
      <v-footer ref="foot" id="foot"></v-footer> 
  </div>
</template>

<script type="text/ecmascript-6">
import menuWrapper from './../../components/menuWrapper/menuWrapper';
import Swiper from '../../../static/swiper/swiper-3.4.2.min.js';
import '../../../static/swiper/jquery-1.10.1.min.js';
import footer from '../footer/footer';
const ERR_OK = 0;
export default {
     data () {
        return {
        activity: {},
        selftimer: {},
            flag: 0,
            mark: 0
         };
      },
      mounted () {
      // this.$nextTick
       let mySwiper = new Swiper('.swiper-container.card', {
           effect: 'coverflow',
           slidesPerView: 3,
           centeredSlides: false,
           loop: true,
           autoplay: 3000,
           coverflow: {
            rotate: 0,
            stretch: -41,
            depth: 100,
            slideShadows: false
          },
          spaceBetween: 0
      });
       console.log(mySwiper);
      },
      methods: {
      },
      components: {
        'v-footer': footer,
        'v-menu-wrapper': menuWrapper
      },
  created () {
    this.$http.get('/api/activity').then((response) => {
      response = response.body;
      // console.log(this.response);
      if (response.errno === ERR_OK) {
        this.activity = response.data;
        // console.log(this.activity);
      }
    });
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
// @import '../../../static/swiper/swiper-3.4.2.min.css';
#aty .menu-item
    background: url('../../../static/image/add.png') no-repeat 70px 10px
.iconfont.icon-f5
    color: #dc4242
.activity
    margin-left: 100px
    margin-top: 80px
   .recently
       width: 1100px
       margin-left: 12px
       height: 550px
       h2
        font-size: 14px
        color: #333333
        text-align: center
        margin: 40px auto
      .swiper
  position: relative
  width: 620px
  margin: 0 auto 30px
.albumn
  width: 90%
  margin: 0 auto
  .swiper
      width: 100%
.swiper-container
    width: 100%
    .swiper-slide
      background: #fff
      padding-bottom: 30px
    .pic
                   border-radius: 5px 5px 0 0
                   position: relative
                   img
                       width:100%
                       border-bottom: 2px solid #DC4242
                   .love
                       position: absolute
                       left: 0
                       bottom: 0
                       text-align: center
                       font-size: 14px
                       color: #fff
                       width: 100%
                       height: 40px
                       line-height: 40px
                 .recent-wrap
                     box-sizing: border-box
                     padding: 30px
                     border-radius:  0 0 5px 5px
                     box-shadow: 0px 3px 3px 3px rgba(204, 204, 204, 0.6)
                     h1
                         font-size: 16px
                         color: #333
                         text-align: center
                     hr
                         border-bottom: 5px solid  #ee4b4b
                         margin: 12px auto
                         width: 12px
                         clear: both
                     p
                         color: #666666
                         font-size: 12px
                         text-align: center
                         margin: 25px auto
                         line-height: 20px
                     .detail
                         border: 1px solid #666666
                         text-align: center
                         font-size: 12px
                         color: #333
                         padding: 10px 12px
                         width: 50px
                         margin: 30px auto 0
                         display: block
   .going-wrapper
       width: 1100px
       margin-left: 12px
       .title
            font-size: 14px
            color: #333333
            text-align: center
            margin: 40px auto
       .going-display
           width: 100%
           display: flex
           flex-flow: wrap
           margin-bottom: 20px
           li
             margin-right: 10px
             margin-top: 10px
           li:nth-child(4n)
               margin-right: 0px
             a
                 display: block
                 width: 260px
                 height: 260px
                 position: relative
              span
                  color: #fff
                  width: 86px
                  height: 30px
                  background: url("./img/1.png");
                  position: absolute
                  right: 0
                  top: 10px
                  text-align: right
                  line-height: 30px
                  font-size: 12px
                  padding-right: 15px
                i
                    font-size: 14px
              img
                  width:100%
               h2
                  font-size: 12px 
                  color: #fff
                  background: rgba(0,0,0,0.3)
                  padding: 15px 10px
                  position: absolute
                  left: 0
                  bottom: 0
   .border
     border: 1px solid #f00
</style>