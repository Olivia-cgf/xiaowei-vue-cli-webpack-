<template>
  <div class="aboutus">
       <!--=====menu-wrapper=====-->
         <v-menu-wrapper :message="selftimer" v-on:listenToChildEvent="showMsgFromChild"></v-menu-wrapper>
     
         <!-- container -->
         <div class="container">
             <!--底部信息导航栏  -->
              <!-- <v-secondNav></v-secondNav> -->
              <div class="secondNav">
                <div class="tab-item">
                  <router-link to="/aboutus">
                     <span class="nav_title">关于小薇</span>
                     <hr v-show="1"></hr>
                  </router-link>
                </div>
                <div class="tab-item">
                  <router-link to="/joinus">
                     <span class="nav_title">加入我们</span>
                     <hr v-show="0"></hr>
                  </router-link>
                </div>
                <div class="tab-item">
                  <router-link to="/contact">
                     <span class="nav_title">合作联系</span>
                     <hr v-show="0"></hr>
                  </router-link>
                </div>
                <div class="tab-item">
                  <router-link to="/copyright">
                     <span class="nav_title">版权声明</span>
                     <hr v-show="0"></hr>
                  </router-link>
                </div>
              </div>

              <!-- 正文 -->
               <div class="clearfix"></div>
              <div class="introduce">
                 <p>
                   深圳市迈高云媒文化传播有限公司是一家拥有多项知识产权，专利，商标品牌的国家高新技术产业公司，是一家专业从事互联网+广告的云媒体平台服务商，我们基于客户需求不断创新，现公司旗下拥有线上新媒体广告，小薇APP,小薇网，线下小薇智能终端机，正是凭着敏锐的市场洞察力、超前的方案设计理念、卓越的行业拓展能力，以及高效、快捷的业务平台和营销网络引领着互联网+广告云媒体平台的新势力发展。
                 </p>
              </div>
              <div class="detail">
               
           <h4 class="news">最新动态<span>News</span></h4>
             <ul class="list-group left">
              <li class="def_item" v-for="n in 6">公司官网新版上线<span class="time">2017.07.01</span></li>
            </ul>
               <div class="right">
                    <img src="http://www.518mgao.com/project/img/img41.png" alt="">
               </div>
              </div>
         </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.aboutus
  margin-left: 100px
  margin-top: 80px
  .container
     width: 1000px
     padding: 50px
     margin-top: 80px
     .secondNav
       width: 500px
       margin: 0 auto
       a
         display: inline-block
         padding: 20px 25px
         float: left
         span
           color: #333
           font-size: 14px
         hr
           width: 20px
           height: 5px
           border-radius: 5px
           background: #dc4242
           border: 0
     .clearfix
       clear: both
     .introduce
       margin: 60px 0
       p
        color: #333
        font-size: 12px
        width: 1000px
        line-height: 20px
      .detail
        h4.news 
         margin-top: 80px
         border-left: 5px solid #dc4242
         padding-left: 10px
         span 
          color: #dc4242
        .left
          float: left
        .right
          float: right
          margin: 10px 60px 0 0
      .list-group
          width: 550px
          background: #fff
          font-size: 12px
          color: #333
        .def_item
          color: #666666
          list-style-type: none
          margin-top: 17px
          position: relative
          padding-left: 20px
          &::before
              display: block
              content: ""
              position: absolute
              width: 5px
              height: 5px
              background-color: #666666
              line-height: 50px
              left: 0px
              top: 4px
          .time
            float: right
            margin-right: 15px
         .def_item:hover
            color: #c28383
      
</style>
