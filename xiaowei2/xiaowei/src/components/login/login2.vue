<template>
  <div class="login">
     <div class="left">
         <img src="./img/login.jpg" alt="">
     </div>
     <div class="right">
         <i class="iconfont icon-guanbi" @click="close"></i>
         <ul class="menu">
                <li v-for="(item,index) in menu" :class="{'active':flag==index}" @click="light(index)"
                >{{item.name}}</li>
         </ul>
         <!-- 注册页面 -->
         <ul class="msg"  v-if="flag">
          <li class="phone">
              <i class="iconfont icon-shouji"></i>
              <input type="text" placeholder="请输入手机号码" v-model="zhuceCeil" class="zhuceCeil">
          </li>
          <li class="phone">
              <i class="iconfont icon-shuruyanzhengma"></i>
              <input type="text" placeholder="请输入验证码" class="text_code">
              <button class="code" @click="sendCode($event)">获取验证码</button>
          </li>
          <li class="phone">
              <i class="iconfont icon-shuruyanzhengma" ></i>
              <input type="password" placeholder="请输入密码" v-model="zhucePassWord" class="zcPassWord">
          </li>
          <li class="finish">
              <span class="warning">{{zhuceWarning}}</span>
              <input type="submit" value="完成"  @click="signsuccess($event)"  href="javascript:;" v-bind:disabled="zhuceIsabled">
          </li>
      </ul>
      <!-- 登录页面 -->
         <ul class="msg denglu" v-else>
             <li class="phone">
                 <i class="iconfont icon-shouji"></i>
                 <input type="text" placeholder="请输入手机号码" class="loginCeil" v-model="changeCeil">
             </li>
             <li class="phone">
                 <i class="iconfont icon-mima"></i>
                 <input type="password" placeholder="6-16位字母、数字"  class="loginPassword" v-model="changePassWord">
             </li>
             <li class="finish" id="denglu">
                  <span class="warning">{{warning}}</span>
                 <input type="submit" value="登录" @click="tologinIn($event)" v-bind:disabled="isabled">
             </li>
             <div class="autosign">
               <div class="check-wrap">
                 <input type="checkbox" value=""><span>自动登录</span>
               </div>
             <a class="seekpass" @click="sendMsgToParent"  href="javascript:;">找回密码</a>
             </div>
             <span class="quiky">
                社交账号快速登录
             </span>
             <div class="q_w_b">
               <ul>
                 <a  v-bind:href="qqUrl"  class="iconfont icon-qq"></a>
                 <!-- <a href="javascript:void(0);"></a> -->
                 <a v-bind:href="weixinUrl" class="iconfont icon-weixin-copy"></a>
                 <a v-bind:href="weiboUrl" class="iconfont icon-weibo"></a>
               </ul>
             </div>
         </ul>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
import login from './login3';
export default {
   props: {
      'flag': {
      }
   },
   data () {
       return {
         menu: [
            {'name': '登录'},
            {'name': '注册'}
         ],
         showmask: true,
         show: true,
         seekback: false,
         isabled: false, // 登录是否可以点击
         warning: '',
         /* 登录 */
         changeCeil: '', // 输入框文本监控
         changePassWord: '',
         /* 注册 */
         zhuceCeil: '',
         zhucePassWord: '',
         zhuceIsabled: false,
         zhuceWarning: '',
         qqUrl: 'https://graph.qq.com/oauth/show?which=Login&display=pc&client_id=101368749&redirect_uri=http://xiaowill.com&scope=get_user_info,list_album,upload_pic,add_feeds,do_like&response_type=token',
         weixinUrl: '',
         weiboUrl: 'https://api.weibo.com/oauth2/authorize?client_id=1252785351&redirect_uri=http://www.xiaowill.com&response_type=code&forcelogin=true'
       };
   },
   watch: {
       changeCeil () {
          this.warning = '';
          this.isabled = false;
       },
       changePassWord () {
          this.warning = '';
          this.isabled = false;
       },
       zhuceCeil () {
          this.zhuceWarning = '';
          this.zhuceIsabled = false;
       },
       zhucePassWord () {
          this.zhuceWarning = '';
          this.zhuceIsabled = false;
       }
   },
     mounted () {
    /* var appID = '1252785351';
     var redirectURI = 'http://www.xiaowill.com';
     if (window.location.hash.length === 0) {
        var path = 'https://graph.qq.com/oauth2.0/authorize?';
        var queryParams = ['client_id=' + appID,
                           'redirect_uri=' + redirectURI,
                           'scope=' + 'get_user_info,list_album,upload_pic,add_feeds,do_like',
                           'response_type=token'];
        var query = queryParams.join('&');
        var url = path + query;
        window.location.href = url;
     } else {
        // 获取access token
       var accessToken = window.location.hash.substring(1);
        var map = toParamMap(accessToken);
        // 记录accessToken
        $("#accessToken").text(map.access_token);
        $("#expire").text(map.expires_in);
        // 使用Access Token来获取用户的OpenID
        var path = "https://graph.qq.com/oauth2.0/me?";
        var queryParams = ['access_token='+map.access_token, 'callback=callback'];
        var query = queryParams.join('&');
        var url = path + query;
        openImplict(url);
     }
     this.$nextTick(function () {
        this.$http.jsonp(url).then(function (res) {
          alert(res.data);
        });
     }); */
   },
   methods: {
    light (index) {
         this.flag = index;
    },
    sendMsgToParent () {
         this.$emit('listenToChildEvent', '3');
    },
    signsuccess ($event) {
     // this.$emit('listenToChildEvent', '4');
      console.log($event.target);
      let phone = document.querySelector('.zhuceCeil');
      let password = document.querySelector('.zcPassWord');
      let phoneVal = phone.value;
      let passwordVal = password.value;
      console.log(passwordVal);
      console.log(phoneVal);
      // 判断输入的手机号码是不是数字
      if (phoneVal === '' || passwordVal === '') {
          this.zhuceWarning = '不能为空';
      } else if (!phoneVal || !phoneVal.trim() || isNaN(phoneVal)) {
          // 输入的不是数字
          this.zhuceWarning = '请输入正确手机号码';
      } else {
      }
    },
    close () {
      this.$emit('showmaskToChild', 'true');
    },
    tologinIn ($event) { // 登录页面
      console.log($event.target);
      let phone = document.querySelector('.loginCeil');
      let password = document.querySelector('.loginPassword');
      let phoneVal = phone.value;
      let passwordVal = password.value;
      // 判断输入的手机号码是不是数字
      if (phoneVal === '' || passwordVal === '') {
          this.warning = '不能为空';
      } else if (!phoneVal || !phoneVal.trim() || isNaN(phoneVal)) {
          // 输入的不是数字
          this.warning = '请输入正确手机号码';
      } else {
        // alert('是数字');
        // 请求数据跳转页面
       /* var vm = this;
        axios.get("url")
        .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          }) */
      }
    },
    sendCode ($event) {
      console.log($event.target);
      let that = $event.target;
      let timeSecond = 0;
      that.innerHTML = '已发送' + timeSecond + 's';
      that.style.cssText = 'background:#DC4242;color:#fff;';
      let timer = setInterval(function () {
         timeSecond += 1;
         that.innerHTML = '已发送' + timeSecond + 's';
         if (timeSecond === 60) {
           clearInterval(timer);
           that.innerHTML = '获取验证码';
         }
      }, 1000);
    },
    getOpenId () {
      let code = this.$route.query.id;
      console.log(code);
    }
   },
   components: {
    'v-login': login
   }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import "../../../static/font/iconfont.css"

.login
    width: 800px
    height: max-content
    background: #fff
    border-radius: 10px
    overflow: hidden
    margin: auto
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    .left
        float: left
        margin-left: 30px
        margin-top: 110px
     .right
        float: right
        margin-right: 30px
        padding-bottom: 60px
        i.iconfont.icon-guanbi
          right: 30px
          position: absolute
          top: 20px
          color: #ccc
        .menu
          width: 100%
          padding: 32px 0px 20px
          display: flex
          li
             float: left
             display: block
             width: 50%
             color: #000
             font-size: 14px
             border-bottom: 1px solid #dddddd
             text-align: center
             height: 50px
             line-height: 50px
             cursor: pointer
             &.active
               border-bottom: 1px solid #dc4242
        .msg
            width: 368px
            margin: auto
            li
              border: 1px solid #ddd
              border-radius: 10px
              font-size: 14px
              display: flex
              flex: wrap
              i
                width: 20px
                height: 30px
                display: inline-block
                font-size: 20px
                line-height:60px
                padding-left:6px
                color: #ccc
              input
                width: 303px
                height: 60px
                margin-left: 15px
                font-family: '微软雅黑'
                border-radius: 0px 10px 10px 0
                padding: 0 10px
                font-size: 14px
                color: #333
                line-height: 60px
                &::placeholder
                    text-align: right
                    font-size:12px
              input[type="submit"]
                 background-color: rgba(0,0,0,0)
                 outline: none
                 border: 0
                 width: 344px
                 color: #fff
                 font-size: 16px
                 font-weight: bold
                 display: block
                 height: 60px
                 cursor: pointer
                 letter-spacing: 5px
              .text_code
                  width: 166px
                  border-radius: 0
              .code
                  width: 135px
                  background: #eeeeee
                  font-family: '微软雅黑'
                  font-size: 14px
                  color: #666666
                  display: block
                  outline: none
                  border: 0
                  border-radius: 0px 10px 10px 0
              &.phone
                     border: 1px solid #ddd
                     font-size: 14px
                     color: #333333
                     margin-bottom: 15px
              &.finish
                    background: #ec3a6e
                    color: #fff
                    border: 0
                    margin-top: 30px
                    cursor: pointer
                    position: relative
                  .warning
                    position: absolute
                    left: 0
                    top: -20px
                    color: #d37676
        .msg.denglu
          #denglu
            background: #dddddd
            position: relative
            input[type="submit"]
              color: #999999
            .warning
              position: absolute
              left: 0
              top: -20px
              color: #d37676
          .autosign
            margin-top: 10px
            display: flex
            flex-grow: wrap
            justify-content: space-between
            color: #666666
            font-size: 12px
            .seekpass
              text-decoration: underline
              color: #666
              cursor: pointer
          .quiky
            color: #666666
            font-size: 12px
            text-align: center
            margin:40px auto 35px
            display: block
          .q_w_b
            
              a
                font-size: 25px
                float: left
                width: 33.3%
                text-align: center
              a.icon-qq
                color: #31b2e9
              a.icon-weixin-copy
                color: #4ac200
              a.icon-weibo
                color: #d33a2c
</style>
