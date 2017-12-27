<template>
  <div class="aboutus">
  <div class="container">
   <!--底部信息导航栏  -->
              <!-- <v-secondNav></v-secondNav> -->
              <div class="secondNav">
                <div class="tab-item">
                  <router-link to="/aboutus">
                     <span class="nav_title">关于小薇</span>
                     <hr v-show="0"></hr>
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
                     <hr v-show="1"></hr>
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
             <div class="row">
                 <div class="thumbnail" v-for="n in 5">
                    <img src="http://www.518mgao.com/project/img/jiboceng.jpg" alt="" class="cat_img left">
                    <div class="caption">                       
                        <ul class="list-group">
                            <li>
                                <b>自媒体：吉经理</b>
                            </li>
                            
                            <li>
                                <span>QQ邮箱：</span>
                                <span>1405755349@qq.com</span>
                            </li>
                        </ul>
                    </div>
                   </div>

            </div>
    </div>
                      <div class="clearfix"> </div>
              <!-- 页脚 -->
   <v-footer ref="foot" id="foot"></v-footer> 
  </div>
</template>

<script type="text/ecmascript-6">
import footer from './footer';
export default {
  components: {
    'v-footer': footer
  }
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
.container
  .thumbnail 
      border: 0
      display: flex
      align-items: center
      overflow: hidden
      width: 400px
      margin: 0 auto
     .cat_img 
          background: #e5e5e5
          display: inline-block
          width: 80px
          height: 80px
          margin: 20px
          &.left
              float: left
   .caption 
     .list-group 
       list-style: none
       span 
          text-align: left
          line-height: 28px

</style>

