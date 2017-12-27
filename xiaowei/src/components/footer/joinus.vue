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
                     <hr v-show="0"></hr>
                  </router-link>
                </div>
                <div class="tab-item">
                  <router-link to="/joinus">
                     <span class="nav_title">加入我们</span>
                     <hr v-show="1"></hr>
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
                  <article class="right job top">

                <b>广告客户经理</b><br>

             <h6>
                岗位职责
             </h6>
             <p>
                1、具有丰富的广告营销经验，拥有快销品供货商、厂商广告需求投放的客户资源；<br>
                2、具有移动电子设备、智能产品销售经验或铺货渠道资源；<br>
                3、完成大客户之间的业务谈判与合同签订，做到广告费及智能硬件产品销售费用的及时回收；<br>
                4、记录、汇总大客户对公司产品和服务的评价、建议信息，并加以整理分析，形成报告及时向上级汇报；<br>
                5、为客户提供符合公司要求的专业服务，保证当期销售业绩目标的实现及稳步提升。<br>
             </p>
             <h6>
                任职资格
             </h6>
             <p>
                1、大专以上学历，性格外向，口才佳、形象气质佳；<br>
                2、三年以上市场开拓及广告投放工作经验，有广告大客户资源者优先录用；<br>
                3、熟悉产品营销技巧、负责发掘及开拓大客户资源；<br>
                4、具有电子移动终端设备或智能产品推广及铺货渠道资源者优先录用；<br>
                5、熟悉零售商超、各行连锁运营机构者优先录用；<br>
                6、具备较强的市场分析、营销、推广能力，优秀人际沟通、协调能力和分析解决问题的能力。
             </p>           
           </article>
           <article class="right job">
              <b>android开发工程师</b><br>
             <h6>
                岗位职责
             </h6>
             <p>
                1、负责公司Android客户端产品的设计与开发；<br>
                2、参与Android客户端的需求讨论与需求设计；<br>
                3、能够独立搭建软件框架方案；<br>
                4、编写相应模块的设计文档，独立完成编码及单元测试；<br>
                5、与团队成员充分、有效沟通协作，进行技术风险评估、项目时间评估；<br>
             </p>
             <h6>
                任职资格
             </h6>
             <p>
                1、2年以上Android平台开发经验。计算机、软件工程相关专业专科及以上学历；<br>
                2、Android基础必须扎实，熟练掌握自定义控件、常见动画以及不同分辨率的适配，了解系统架构及底层库；<br>
                3、熟悉即时通讯、视频流、UI管理等模块；<br>
                4、熟悉Android平台机制及框架、多线程编程、网络编程,SQLite数据库等操作；<br>
                5、精通Android碎片化、性能优化、内存管理等技术；<br>
                6、熟悉ndk、html5，有混合开发或有主流视频、直播类应用开发经验的优先；
             </p>       
           </article>
           <article class="right job">
            
                <b>硬件运维专员</b><br>
     
             <h6>
                岗位职责
             </h6>
             <p>
                1、负责所在区域的自助终端类产品安装、培训、维护、预防性维护、调试；<br>
                2、独立进行现场的设备维修、指导工作，并登记相关记录文件；<br>
                3、协助开发人员进行软件故障分析，日志拷贝，判断各种故障原因，定期向公司售后服务总部提交故障种类及分析统计报告；<br>
                4、按时提交维护维修周报、月报、季报、年报；<br>
                5、汇总客户要求和建议，提交相关人员或部门，在得到结果之后，反馈客户；<br>
                6、建立并健全所在区域的设备档案，做到定时更新；<br>
                7、所辖区域的备品备件维修及管理，定时更新备件库；<br>
             </p>
             <h6>
                任职资格
             </h6>
             <p>
                1、相关专业专科以上学历；<br>
                2、踏实尽职、富有责任心、勤奋、吃苦耐劳；<br>
                3、具有较强的学习和沟通能力；<br>
                4、具有较强的服务意识和团队精神；<br>
             </p>
           </article>
            <article class="right job">

                <b>运营策划</b><br>

             <h6>
                岗位职责
             </h6>
             <p>
                1、完成公司月度，季度，年度线上线下活动方案的规划；<br>
                2、能独立完成从选题，策划，到执行的全部工作，并且对活动效果负责；<br>
                3、能根据公司产品的属性，协调其他部门制定并执行针对不同用户的固化栏目；<br>
             </p>
             <h6>
                任职资格
             </h6>
             <p>
                1、有2年以上工作经验；<br>
                2、熟悉线上活动从策划到执行的全部流程，能很好的和研发沟通活动功能并保证按时上线；<br>
                3、相关工作经验者优先；<br>
                4、思维活跃，执行力强，喜欢接受新事物和挑战；<br>
                5、有良好的沟通能力和团队协作精神；<br>
             </p>
           </article>
            <article class="right job">

              <b>投递方式</b><br>
             <p>详细个人介绍与简历投递至<br>
             <span class="email">1181492191@qq.com</span><br>
             邮件标题格式为：<br>
             <span class="name">“职位名-真名-来自官网”</span></p>
           </article>
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
       article 
          width: 700px
          margin: 50px 0
         p 
          font-size: 12px
          color: #333
          text-align: justify
          margin-bottom: 50px
          line-height: 25px
        h6 
          font-weight: bold
          margin-top: 50px
       &.job
          margin-top: 0
          margin-bottom: 30px
       &.job a 
          color: #cc456c
       &.job.top 
         margin-top: 50px
</style>
