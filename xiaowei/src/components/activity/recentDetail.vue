<template>
      <div class="activityDetail">
      <v-menu-wrapper :message="activity"></v-menu-wrapper>
       <div class="wrapper">
           <h2 class="title"><i class="iconfont icon-f5"></i>&nbsp;&nbsp;旅行的意义&nbsp;&nbsp;<i class="iconfont icon-f5"> </i></h2>
           <div class="recent">
               <div class="picture">
                   <li class="leadTitle">
                       <router-link to="">
                           <img src="./img/3.jpg" alt="">
                       </router-link>
                   </li>
                   <li v-for="n in 10">
                       <router-link to="">
                           <img src="./img/3.jpg" alt="">
                       </router-link>
                   </li>
               </div>
           </div>
       </div>
       <div class="wrapper" style="margin-top: 50px;">
           <h2 class="title"><i class="iconfont icon-f5"></i>&nbsp;&nbsp;往期花絮&nbsp;&nbsp;<i class="iconfont icon-f5"> </i></h2>
            <ul class="going-display">
              <li v-for="n in 4">
                  <router-link to="/activity/activity_detail">
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
import {previewImage} from '../../../static/js/previewImg.js';
import menuWrapper from './../../components/menuWrapper/menuWrapper';
import footer from '../footer/footer';
const ERR_OK = 0;
export default {
      data () {
        return {
           activity: {},
           selftimer: {},
           ispreview: true,
           Mask: true
         };
      },
      methods: {
        light (index) {
             this.flag = index;
        },
        preview: function () { // 点击上传图片显示预览图
            this.ispreview = false;
            var oInput = document.getElementById('file');
            previewImage(oInput);
        },
        hideMask () { // 点击x关闭弹窗
          this.Mask = false;
        },
        upload () { // 点击+显示弹窗
          this.Mask = true;
        }
      },
      components: {
        'v-footer': footer,
        'v-menu-wrapper': menuWrapper
        },
      created () {
        this.$http.get('/api/activity').then((response) => {
          response = response.body;
          console.log(this.response);
          if (response.errno === ERR_OK) {
            this.activity = response.data;
            console.log(this.activity);
          }
        });
      }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import "../../../static/font/iconfont.css"
@import "../../../static/css/activityDetail.styl"

</style>
