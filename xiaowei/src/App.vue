<template>
  <div id="app" ref="body">
    <div class="header">
      <!-- logo图标 -->
      <router-link to="/Selftimer" actived class="logo">
          <img src="./components/header/img/logo.png" alt="">
      </router-link>

       <div class="tab">
      <!-- 使用router-link进行导航 -->
        <div class="tab-item">
          <router-link to="/Selftimer">
             <i class="iconfont icon-xiangji1"></i>
             <span class="nav_title">自拍</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/Winning">
             <i class="iconfont icon-zhongjiangjilu"></i>
             <span class="nav_title">中奖</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/activity">
             <i class="iconfont icon-duorenyonghu"></i>
             <span class="nav_title">活动</span>
          </router-link>
        </div>
      </div>
     
     <!-- 未进行登录 -->
      <ul class="nav_footer">
        <!-- 未进行登录 -->
        <li class="logining" @click="showToggle(0)" v-if="isLogin"><span id="login">登录</span></li>
        <!-- 已经登录成功 -->
        <router-link class="logining" to="/my" v-else><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=397751603,3873107322&fm=117&gp=0.jpg" alt="admin" class="admin"></router-link>
        <li class="logining" @click="showToggle(1)"><span>注册</span></li>
      </ul>
    </div>



    <!-- 路由外链 -->
    <keep-alive> 
    <router-view ref="container" id="container" @click=""></router-view>
    </keep-alive>
    <!-- 登录页面 -->
     <div class="mask" v-show="hide">
                 <!-- 登录注册页面 -->
               <v-login v-show="showlogin==1" :flag="0" v-on:listenToChildEvent="showMsgFromChild" v-on:showmaskToChild="showmaskFromChild"></v-login> 
                   <!-- 注册成功页面 -->
                   <v-login v-show="showlogin==2"  :flag="1" v-on:listenToChildEvent="showMsgFromChild" v-on:showmaskToChild="showmaskFromChild"></v-login>
                   <!-- 找回密码 -->
                   <v-seek v-show="showlogin==3" v-on:showmaskToChild="showmaskFromChild">找回密码</v-seek>
                   <!-- 注册成功页面 -->
                   <v-success v-show="showlogin==4"  v-on:listenToChildEvent="showMsgFromChild" v-on:showmaskToChild="showmaskFromChild"></v-success> 
      </div>
  </div>

</template>

<script  type="text/ecmascript-6">
import login from './components/login/login';
import seek from './components/login/seekpassword';
import success from './components/login/sign_success';

const ERR_OK = 0;

export default {
  data () {
    return {
      selftimer: {},
      menu: [
            {'name': '登录'},
            {'name': '注册'}
            ],
      showlogin: 0,
      isLogin: 1,
      hide: false // 蒙层
    };
  },
  mounted () {
    this.init();
  },
  created () {
      this.$http.get('/api/Selftimer').then((response) => {
         // get data
         response = response.body;
         if (response.errno === ERR_OK) {
           this.selftimer = response.data;
         }
      }, response => {
        // error callback
      });
  },
  methods: {
    showToggle (index) {
      this.showlogin = index + 1;
      this.hide = true;
    },
    showMsgFromChild (data) {
      this.showlogin = data;
      this.hide = true;
    },
    showmaskFromChild (data) {
      this.hide = false;
    },
    init () {
     /* setTimeout(() => {
            let aside = document.querySelector('.nav_footer');
            let container = document.querySelector('#container');
            let footer = document.querySelector('.footer');
            // 获取到container的高度
            let containerH = container.offsetHeight;
            let clientH = document.documentElement.clientHeight;
            // 如果窗口的高度小于内容的高度
          if (clientH < containerH) {
               console.log(0);
               footer.style.display = 'none';
               aside.style.height = '100%';
               window.onscroll = function () {
                // 鼠标滚动的高度
                let scrollT = document.body.scrollTop;
                if ((scrollT + clientH) < containerH) {
                   footer.style.display = 'none';
                   aside.style.bottom = '0px';
                } else {
                    footer.style.display = 'block';
                    aside.style.bottom = '120px';
                }
               };
             } else { // 如果窗口的高度大于内容的高度
                footer.style.display = 'block';
                aside.style.bottom = '120px';
            };
      }, 1000); */
    }
  },
  components: {
    'v-login': login,
    'v-success': success,
    'v-seek': seek
  }
};

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../static/font/iconfont.css"

  #app
    .header
      width: 100px
      height: 100%
      background: #dc4242
      text-align: center
      position: fixed
      left: 0
      top: 0
      .logo
        display: block
        margin: 25px auto
      .tab
        margin: 0 auto
        text-align: center
        .tab-item
          padding: 0
          &>a
            display: block
            font-size: 14px
            color: #fff
            border-bottom: 1px solid #eeeeee
            margin: 20px
            padding-bottom: 10px
            opacity: 0.5
            &.active
              opacity: 1
              .nav_title
                opacity:1
            i
              display: block
              font-size: 24px
              color: #fff
              padding-bottom: 8px
            .nav_title
              padding:2
              font-size: 14px
              color: #fff
      .nav_footer
        margin: 0 auto 0
        position: fixed
        left: 20px
        bottom: 120px
        margin: auto
      .logining
        background: rgba(255,255,255,0.2)
        width: 50px
        height: 50px
        border-radius: 50%
        margin: 25px auto
        font-size: 14px
        color: #fff
        line-height: 50px
        cursor: pointer
        &:nth-child(1)
          margin-bottom: 0px
        .admin
          width: 100%
          border-radius: 50%
    .mask
            position:fixed
            left: 100px
            top: 50px
            width: 100%
            height:100%
            background: rgba(0,0,0,0.2)
            z-index: 8
</style>

