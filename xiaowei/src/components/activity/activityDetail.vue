<template>
      <div class="activityDetail">
<!--       <div class="loading" v-if="loading">
    loading...
</div>
<transition name="slide"></transition> -->
         <!--=====menu-wrapper=====-->
     <v-menu-wrapper :message="activity"></v-menu-wrapper>
       <div class="wrapper">
           <h2 class="title"><i class="iconfont icon-f5"></i>&nbsp;&nbsp;亲子时光&nbsp;&nbsp;<i class="iconfont icon-f5"></i></h2>
           <div class="pic_gallery">
               <div class="add" @click="upload">
                   <img src="./img/3.jpg" alt="">
                   <fieldset class="fieldset auto" id="case">
                       <legend align="center" class="legend">亲子时光</legend>
                       <legend align="bottom" class="join"><b>+</b>参加活动</legend>
                       <!-- <span class="join">+参加活动</span> -->
                   </fieldset>
               </div>
               <div class="picture">
                   <li v-for="n in 12">
                       <router-link to="">
                           <img src="./img/3.jpg" alt="">
                       </router-link>
                   </li>
               </div>
               <div class="picture bottom">
                   <li v-for="n in 40">
                       <router-link to="">
                           <img src="./img/3.jpg" alt="">
                       </router-link>
                   </li>
               </div>
           </div>
       </div>
       <div class="mask" v-show="Mask">
         <div class="upload">
            <div class="title">
                <h3>上传照片</h3>
                <i class="iconfont icon-guanbi" @click="hideMask"></i>
            </div>
             <div class="drag">
                <div class="tip_area" v-show="ispreview">
                   <i class="iconfont icon-xiangji"></i>
                   <span class="explanate">也可以拖拽图片到该区域，完成上传</span>
                   <span class="limit">支持单张10M之内</span>
                </div>
                <input type="file"  @change="preview" id="file">
                <div class="preview" v-show="!ispreview" id="preview" width="180px" height="180px">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505645779678&di=be626358902f667676f18b760da39b54&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01be6c580db907a84a0e282b6dbd1c.gif" alt="" class="uploadImg" id="imghead"> 
                </div>
             </div>
          <span class="tip">
              提示:请严格遵守保密法律法规，严禁在互联网上存储、处理、传输、发布涉密信息。
          </span>
         <div class="choose">
             <h2>请选择分类</h2>
             <div class="slide swpper">
                 <v-swiper></v-swiper>
                 <div class="button">
                   <button class="confirm">
                     确定上传
                   </button>
                    <button class="cancle">
                     取消
                   </button>
                 </div>
             </div>
         </div>
        
      </div>
      </div>
      </div>

</template>

<script type="text/ecmascript-6">
import {previewImage} from '../../../static/js/previewImg.js';
import menuWrapper from './../../components/menuWrapper/menuWrapper';
import swiper from './swiper';
const ERR_OK = 0;
export default {
      data () {
        return {
           activity: {},
           selftimer: {},
           ispreview: true,
           Mask: false
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
        'v-menu-wrapper': menuWrapper,
        'v-swiper': swiper
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
