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
                         <hr v-show=""></hr>
                      </router-link>
                    </div>
                    <div class="tab-item">
                      <router-link to="/copyright">
                         <span class="nav_title">版权声明</span>
                         <hr v-show="1"></hr>
                      </router-link>
                    </div>
              </div>

              <!-- 正文 -->
               <div class="clearfix"></div>
             <article class="copyright right">
             <p>
                迈高云媒文化传播有限公司，一直十分重视用户权益和网络版权及其他知识产权的保护。提供信息存储空间并根据用户指令提供作品上传、下载、传播等服务，如果您发现有迈高用户上传、传播的图片及相关内容侵犯了您的相关权益，请您向我司发出书面权利通知文件进行投诉。
             </p>
             <p>
                在收到有效的权利通知文件后，我们将采取措施包括但不限于删除涉嫌侵权的作品，同时会以书面的形式包括但不限于发送私信通知上传该等作品的用户，对于多次上传涉嫌侵权作品的用户，我们将采取措施包括但不限于取消该用户资格。如权利通知文件不符合要求（下附），将以书面的形式通知权利申请人（下称“权利人”）提供相应补充信息，且保留直至权利通知文件满足要求之后采取处理措施的权利。
             </p>
             <p>
                在迈高平台上传作品的用户视为同意就前款可能出现的权利纠纷情况所采用的相应措施，迈高不因此而承担任何违约责任或其他任何法律责任。
             </p>
             <h6>
                投诉方法：
             </h6>
             <p>
                发送权利通知文件至邮箱：1181492191@qq.com
             </p>
             <h6>
                权利通知文件需包含以下内容：
             </h6>
             <p>
                1. 权利申请人（下称“权利人”）的姓名/名称、联系方式、地址、有效期内的身份证件扫描件（自然人）企业法人营业执照及法定代表人身份证明扫描件（单位法人）。
                2. 权利人认为构成侵权作品的准确名称和在啪啪的网络链接地址。
                3. 权利人认为构成侵权的初步证明材料，包括但不限于对作品享有版权或依法享有信息网络传播权的权属证明，以及对涉嫌侵权作品侵权事实的举证。
                4. 权利人或其合法授权人亲笔签名，若权利人为单位法人则需加盖单位公章。
                5. 权利通知文件需包含以下声明：权利申请人保证本通知内容的真实性，如因文件不真实引发纠纷，本权利人将对此承担全部法律责任。 
             </p>
             <h6>
                隐私策略：
             </h6>
             <p>
                迈高不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在本网站的非公开内容，但下列情况除外：
             </p>
             <p>
                1. 事先获得用户的明确授权。
                2. 根据有关的法律法规要求。
                3. 按照相关政府主管部门的要求。
                4. 该第三方同意承担与迈高同等的保护用户隐私的责任； 在不透露单个用户隐私资料的前提下，迈高有权对整个用户数据库进 行分析并对用户数据库进行商业上的利用。
             </p>
           </article>
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
.copyright
    font-size: 12px
    color: #333
    line-height: 25px
    article.job 
      b 
      font-size: 14px
    h6 
       margin-top: 5px
       font-weight: 700
      p 
       margin-bottom: 35px
    span.email 
        color: #f00
        font-size: 14px
        font-weight: bold
    span.name 
        color: #f00
</style>

