<template>
  <div class="seek">
        <div class="seekback">
           <h2>找回密码</h2>
            <i class="iconfont icon-guanbi"  @click="close"></i>
        </div>
         <ul class="msg">
            <li class="phone">
                <i class="iconfont icon-shouji"></i>
                <input type="text" placeholder="请输入注册时使用手机号码">
            </li>
            <li>
                <i class="iconfont icon-shuruyanzhengma"></i>
                <input type="text" placeholder="请输入验证码" class="text_code">
                <button class="code">获取验证码</button>
            </li>
            <li>
                <i class="iconfont icon-shuruyanzhengma"></i>
                <input type="text" placeholder="6位以上只能包含字母、数字、下划线">
            </li>
            <li>
                <i class="iconfont icon-shuruyanzhengma"></i>
                <input type="text" placeholder="再次输入您的登录密码">
            </li>
            <li class="finish">
                <input type="submit" value="完成">
            </li>
        </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
   methods: {
         close () {
           this.$emit('showmaskToChild', 'true');
         }
   }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.seek
    width: 400px
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
    .seekback
        padding: 20px 20px
        h2
          font-size: 14px
          color: #000000
          height:40px
          line-height: 35px
          text-align: center
          border-bottom: 1px solid #000
      i.iconfont.icon-guanbi
          right: 30px
          position: absolute
          top: 20px
          color: #ccc
    .msg
            width: 368px
            margin: 0 auto
            li
              border: 1px solid #ddd
              border-radius: 10px
              font-size: 14px
              display: flex
              flex: wrap
              margin-bottom: 5px
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
                border-radius: 0px 10px 10px 0
                padding: 0 10px
                font-size: 14px
                color: #333
                line-height: 60px
                &::placeholder
                    text-align: right
                    font-size:12px
              input[type="submit"]
                 outline: none
                 border: 0
                 width: 344px
                 color: #999999
                 letter-spacing: 5px
                 font-size: 16px
                 font-weight: bold
                 display: block
                 height: 60px
                 cursor: pointer
              .text_code
                  width: 166px
                  border-radius: 0
              .code
                  width: 135px
                  background: #eeeeee
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
              &.finish
                    background: #dddddd
                    color: #999999
                    border: 0
                    margin: 20px auto 18px
                    cursor: pointer
        
</style>
