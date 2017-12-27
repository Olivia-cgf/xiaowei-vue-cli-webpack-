<template>
  <div class="footer" id="footer">
    <div class="tab">
       <div class="tab-item">
         <router-link to="/aboutus">
            <i></i>
            <span class="nav_title">关于小薇</span>
         </router-link>
       </div>
       <div class="tab-item">
         <router-link to="/joinus">
            <i></i>
            <span class="nav_title">加入我们</span>
         </router-link>
       </div>
       <div class="tab-item">
         <router-link to="/copyright">
            <i></i>
            <span class="nav_title">版权声明</span>
         </router-link>
       </div>
       <div class="tab-item">
         <router-link to="/contact">
            <i></i>
            <span class="nav_title">合作联系</span>
         </router-link>
       </div>
       <div class="tab-item">
         <router-link to="/微信">
            <i class="iconfont icon-weixin-copy nav_title"></i>
          <!--   <span class="nav_title">微信</span> -->
         </router-link>
       </div>
       <div class="tab-item">
         <router-link to="/微博">
            <i class="iconfont icon-weibo nav_title"></i>
            <!-- <span class="nav_title">微博</span> -->
         </router-link>
       </div>
    </div>
    <div class="word">
        <p>Copyright © 2015 xiaowill.com, All rights reserved.Xiaowill   版权所有<br>
        粤公网安备110102000287   粤ICP备14017140号-5</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.footer
    background: #282828
    padding-bottom: 20px
    .tab
        margin-top:30px 20px
        display: flex
        flex-direction: row
        flex-wrap: wrap
        justify-content: center
     .tab-item
        padding: 20px 40px
        &>a
         font-size: 12px
         color: #999999
    .word
        font-size: 12px
        color: #555555
        display: flex
        line-height:20px
        justify-content: center
        text-align: center
</style>
