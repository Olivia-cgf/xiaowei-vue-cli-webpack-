<template>
  <div class="prize">
    <!--=====menu-wrapper=====-->
     <v-menu-wrapper :message="winning"  v-on:listenToChildEvent="showMsgFromChild"></v-menu-wrapper>

   <!--每天 主体 -->
   <div class="container" v-if="flag===0">

      <div class="swiper" v-for="(n,index) in 3" v-show="{'on':dots==index}">
           <li v-for="n in 10" class="integral" >
               <img src="http://www.lottery.gov.cn/upload/20170705/20170705134544174.jpg" alt="" class="ticai">
               <img src="../../../static/image/50fen.png" alt="" class="groce">
           </li>
       </div>

       <!-- 索引值切换按钮 -->
       <div class="button">
           <span v-for="(n,index) in 3" @click="on(index)" :class="{'on':dots==index}"></span>
       </div>

       <div class="prize_detail">

           <!-- 中奖排名（周榜） -->
           <ul class="price_left">
               <img src="../../../static/image/4.png" alt="" class="title_img">
               <li class="title">
                   <h2 v-for="n in 3">用户名<hr></h2></h2>
               </li>
               <div class="weekbank">
               <div id="gundong" :style="'margin-top:'+marginTop +'px'" ref="gundong">
                 <li v-for="n in 15" class="son">
                     <span v-for="n in 3">深圳购彩sa9527</span>
                 </li>
               </div>
                </div>
           </ul>

           <!-- 最新资讯 -->
           <div class="prize_right">
               <img src="../../../static/image/4.png" alt="" class="news">
               <li class="news_list" v-for="n in 7">
                   <span class="news_content">八喜临门事事顺心 顶呱刮“八喜”江苏火爆上市</span>
                   <time>08-02</time>
               </li>
           </div>
       </div>
       
       <!-- 上传成功 -->
       <div class="sucess">
   
       </div>
   </div>
   
   <!--试试手气 主体-->
    <div class="try" v-if="flag===1">
        <img src="../../../static/image/5.png" alt="" class="tryTodo">
        <div class="ticketshow">
            <div class="ticket_left">
              <img src="http://www.lottery.gov.cn/upload/20170705/20170705134544174.jpg" alt="">
            </div>
            <div class="ticket_right">
                <li v-for="n in 4" class="pic">
                    <img src="http://www.lottery.gov.cn/upload/20170705/20170705134544174.jpg" alt="">
                </li>
            
           </div>
        </div>
        <div class="guagua">
            <span class="tip">声明：本游戏为模拟在线试刮，中奖概率与真实彩票不同</span>

            <!-- 第一张图片 -->
            <div class="first" style="background: url(http://zhuanti.lottery.gov.cn/shigua/images/cpdq/20170626sbxy/wzj3.jpg) no-repeat;background-size: 100%">
              <!-- 第二张图片 -->
              <canvas>你的浏览器不支持canvas</canvas>
            </div>
            <div class="exchange">
                <button>兑奖</button>
                <button>再刮一张</button>
            </div>
            <div class="mostPrize">
                <p>最高奖金<b>250,000元</b></p>
                <p>中奖机会<b>10次</b></p>
            </div>
            
            <!-- 十倍幸运 -->
            <div class="tenluky">
                <h2> 十倍幸运</h2>
                <div class="tip">
                   <p><span class="gamerule">游戏规则：</span>中奖奖金兼中兼得！刮开覆盖膜，如果在任何一场游戏中的任何号码与中奖号码相同，就可以赢得该场游戏所示的奖金；如果出现“双鱼标志”，就可以赢得该场游戏所示奖金的10倍。</p> 

                </div>
            </div>
        </div>
    </div>
    

    <!-- 中奖详情展示 -->
    <div class="prizedetail"  v-if="flag===2">
        <div class="newstitle">
            <h2>八喜临门事事顺心 顶呱刮“八喜”江苏火爆上市</h2>
            <p class="time"><span>2017-08-09</span> <span>15:27:36</span>  <span>中国体彩网</span></p>
        </div>
        <div class="content">
            

　　八喜临门，事事顺心。“八喜”是体彩文化类主题即开票，主题名称借鉴于中国传统典故“人生四喜”，并根据当前时代风貌进行了拓展，具备较深的文化内涵，票面色彩靓丽、活泼。刮开区覆盖符号巧妙地与“八喜”中的语句相结合，精致有趣、内涵丰富。“八喜”共有八款票面，单票面值2元，有5次中奖机会，头奖3万元。该游戏玩法为找奖金符号。具体游戏规则为：刮开覆盖膜，如果出现金额标志，即中得该金额。中奖奖金兼中兼得。
　　“八喜”单票面值为2元，集齐一套不过16元。前四款分别印有古代诗人《四喜诗》中的一句：久旱逢甘霖，他乡遇故知；洞房花烛夜，金榜题名时。后四款是对《四喜诗》的延伸:事业节节高，财源滚滚来；国强百姓乐，家和万事兴。从而展现出当今盛世的美好，凑成八喜。精致的票面图案，美好的寓意，喜爱顶呱刮的彩友们，快去刮刮“八喜”试试手气吧。

        </div>
    </div>
     <!-- 页脚 -->
   <v-footer ref="foot" id="foot"></v-footer> 
  </div>
</template>

<script type="text/ecmascript-6">
import menuWrapper from './../../components/menuWrapper/menuWrapper';
import footer from '../footer/footer';
const ERR_OK = 0;
export default {
 data () {
    return {
        winning: {},
        selftimer: {},
        dots: 0,
        flag: 0,
        marginTop: 0
    };
 },
 methods: {
    on (index) {
        this.dots = index;
    },
    showMsgFromChild (data) {
      this.flag = data;
      if (this.flag === 0) {
      }
    },
    gundong () {
      var weekbank = this.$refs.gundong;
      var _self = this;
      setInterval(function () {
          _self.marginTop = _self.marginTop - 1;
          if (_self.marginTop === -300) {
            _self.marginTop = 0;
          }
          var weekbankfirst = weekbank.children[0];
          weekbank.removeChild(weekbankfirst);
          weekbank.appendChild(weekbankfirst);
      }, 100);
    }
 },
 mounted () {
  this.$nextTick(() => {
    this.gundong();
  });
 },
 components: {
    'v-footer': footer,
    'v-menu-wrapper': menuWrapper
  },
  created () {
    this.$http.get('/api/winning').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.winning = response.data;
        // console.log(this.winning);
      }
    });
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.prize
    margin-left: 100px
    margin-top: 80px
    .container
        width: 1100px
        overflow: hidden
        .swiper
            width: 3300px
         .integral
            float: left
            width: 208px
            height: 208px
            margin: 0px 0 10px 10px
            overflow: hidden
            position: relative
            .ticai
              width: 100%
            .groce
              position: absolute
              left: 0
              top: 0
              right: 0
              bottom: 0
              margin: auto
        .button
            margin: auto
            width: 100px
            span
             display: inline-block
             width: 10px
             height: 10px
             border-radius: 50%
             margin: 20px 5px
             background: #ccc
             &.on
               background: #dc4242
        .prize_detail
          margin-left: 12px
          overflow: hidden
          margin-bottom: 30px
          .price_left
              float: left
              background: #ffec17
              border-radius: 10px
              width: 530px
              position: relative
              margin-top: 30px
              .title_img
                  position: absolute
                  left: 150px
                  top: -30px
              .title
                padding-top: 40px
                h2
                 display: inline-block
                 color: #000
                 font-weight: 700
                 width: 33.3%
                 text-align: center
                 padding-bottom: 10px
                 hr
                    width: 20px
                    border-radius: 5px
                    height: 0px
                    border: 2px solid #ff9e1f
              .son
              .son:nth-child(odd)
                  background: #fff478
              .son:nth-child(even)
                  background: #ffec17
                span
                  display: inline-block
                  width: 33.3%
                  text-align: center
                  height: 40px
                  line-height: 40px
                  color: #000
                  font-size: 14px
        .prize_right
             float: right
             width: 530px
          .news
            margin: 0 auto
            display: flex
            margin-bottom: 40px
          .news_list
              font-size: 14px
              color: #000
              height: 45px
              line-height: 45px
              position: relative
              padding-left: 30px
              display: flex
              justify-content: space-between
              &:hover
                  text-decoration: underline
              &::before
                  display: block
                  content: ""
                  width: 5px
                  height: 5px
                  border-radius: 50%
                  background: #000
                  position: absolute
                  left: 15px
                  top: 22px
              time
                  font-size: 14px
                  color: #000
.try
    width: 1100px
    margin-left: 10px
    .tryTodo
        width: 1100px
        height: 326px
    .ticketshow
        margin: 20px auto 50px
        width: 700px
        overflow: hidden
    .ticket_left
        float: left
        width: 220px
        height: 330px
        overflow: hidden
        img
            width: 100%
    .ticket_right
        float: right
        width: 460px
        overflow: hidden
        .pic
          float: left
          width: 220px
          height: 154px
          margin: 0 20px 20px 0
          overflow: hidden
        .pic:nth-child(2n)
           margin-right: 0
          img
            width: 100%
    .guagua
        margin-top: 80px
        .tip
            font-size: 12px
            color: #e2270b
            display: block
            text-align: center
       .first
          width:357px
          height: 527px
          margin: 20px auto 0
          position: relative
          canvas
              position: absolute
              left: 0
              top:0
              background: rgba(0,0,0,0)
              cursor: url(http://zhuanti.lottery.gov.cn/shigua/images/cpdq/point.cur),auto
       .exchange
           display: table
           margin: auto
           button
               width: 160px
               height:60px
               line-height: 60px
               background: url(../../../static/image/7.png) no-repeat
               font-size: 24px
               color: #d96708
               display: inline-block
               text-align: center
               outline: none
               border: 0
               margin-left: 20px
        .mostPrize
            width: 320px
            height: 141px
            padding: 30px
            display: table
            margin: 30px auto
            background: url(../../../static/image/6.png) no-repeat
            p
                color:#ff0000
                font-size: 24px
                padding:5px 5px
                b
                  font-weight: 700
                  text-align: right
                  color:#ff0000
                  font-size: 24px
                  float: right
        .tenluky
            margin-bottom: 60px
            h2
                margin: 30px auto
                text-align: center
                font-size: 24px
                color: #ba5f00
            .tip
                p
                   font-size: 12px
                   color: #000
                   width: 600px
                   line-height: 30px
                   margin: 0 auto
                   text-align: justify
                  .gamerule
                      font-size: 12px
                      color: #ba5f00
.weekbank
    height: 300px
    overflow: hidden
    border-radius: 0 0 5px 5px
    margin-bottom: 20px
</style>
