<template>
    <div class="BMapComponent">
        <div id="allmap"></div>
        <div class="mapoverwrap">
        <!-- 按照区域和地铁寻找 -->
               <ul class="areasubway">
                 <li v-for="(item,index) in areasubway" @mouseover="light(index)" :class="{'active': flag===index}"><span :class="item.class"></span>{{item.name}}</li>
               </ul>

               <!-- 确定选择的内容显示 -->
                 <div class="confirm" v-show="loaction">
                     <span class="choose">当前选择:</span>
                     <span>{{confirm}}</span>
                     <span class="cancle">取消</span>
                 </div>

               <!-- 区域 寻找-->
               <ul class="area"  v-if="0" @mouseleave="hide">
                    <li v-for="(item,index) in area" @click="getarea(item.name)">{{item.name}}</li>
                </ul>

               <!-- 地铁 寻找-->
                <ul class="subway"  v-if="0"  @mouseleave="hide">
                    <li v-for="(item,index) in subway" @mouseenter="show=!show">
                    {{item.name}} 
                       <i class="right"></i>
                    </li>
                    <!-- 鼠标滑过侧栏出现 -->
                    <transition name="fade">
                        <div v-if="show" class="subdetail" @mouseleave="show=!show">
                           <div class="line" v-for="n in 3">
                            <a v-for="(item,index) in subdetail" class="place">{{item.name}}</a>
                           </div>
                        </div>
                    </transition>
                </ul>


        <!-- 寻找终端机 -->
            <div class="nearly">
            <h2 class="seeknum">找到<b class="num">14</b>个终端机</h2>
               <li v-for="n in 5" class="seekList">
                 <div class="img">
                   <img src="http://sz.milike.com/showPicture.htm?path=/home/mfang/files/photos/1177372/1178748/2017090514502846893.JPG&size=120x120&markStyle=" alt="">
                 </div>
                 <div class="right">
                   <h3>南新沃尔玛终端机</h3>
                   <span>距离1130km</span>
                 </div>
               </li>
                
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import BMap from 'BMap';

export default {
  components: {
  },
 data () {
    return {
        areasubway: [ // 地铁区域寻找的导航列表
             {'name': '地铁寻找', 'class': 'iconfont icon-ditie'},
             {'name': '区域寻找', 'class': 'iconfont icon-quyu'}
        ],
        flag: null, // 寻找条件的切换
        placetrigger: 0, // 侧栏圆点颜色的切换
        subway: [ // 地铁列表
          {'name': '1号罗宝线'},
          {'name': '2号蛇口线'},
          {'name': '3号龙岗线'},
          {'name': '4号龙华线'}
        ],
        area: [
          {'name': '龙岗片区'},
          {'name': '宝安片区'},
          {'name': '南山片区'}
        ],
        subdetail: [
          {'name': '罗湖'},
          {'name': '国贸'},
          {'name': '老街'},
          {'name': '老街'},
          {'name': '老街'},
          {'name': '老街'},
          {'name': '华侨城'},
          {'name': '老街'},
          {'name': '老街'},
          {'name': '老街'},
          {'name': '华侨城'}
        ],
        show: 0, // 地铁线详细信息是否出现
        confirm: '', // 确定搜索的位置
        loaction: false // 是否显示选择的定位
    };
  },
  created () {
    this.loadMap();
    // this.ready() // 如果在此处直接调用this.ready()方法，将无法加载地图
  },
  mounted () {
    this.ready();
  },
  methods: {
    loadMap: function () {
      console.log(this.$route.params.name);
      console.log(this.$route.params.addr);
      console.log(this.$route.params.phone);// setTimeout(this.ready, 0)
    },
    ready: function () { // 百度地图API功能
        var map = new BMap.Map('allmap');    // 创建Map实例
        map.centerAndZoom('深圳', 15);  // 初始化地图,用城市名设置地图中心点
        map.addControl(new BMap.MapTypeControl());   // 添加地图类型控件
        map.setCurrentCity('深圳');          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
        // 添加定位标识
        var point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
        var myIcon = new BMap.Icon('http://lbsyun.baidu.com/jsdemo/img/fox.gif', new BMap.Size(300, 157));
        var marker = new BMap.Marker(point, {icon: myIcon});  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
    },
    light (index) { // 地铁区域寻找的导航菜单
        this.flag = index;
    },
    triggerColor (index) { // 地铁区域滑过变色
        this.placetrigger = index;
    },
    getarea (content) { // 获取选中区域的内容
        alert(content);
        this.confirm = content;
        this.loaction = 1;
    },
    hide (index) {
        index = null;
    }
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.BMapComponent
    position: relative
    #allmap
        width: 100%
        height:800px
        border: 1px solid gray
        overflow:hidden
       .anchorBL
           display:none
    .mapoverwrap
        width: 400px
        z-index: 2
        left: 20px
        top: 40px
        bottom: 20px
        position: absolute
        .areasubway
            height: 24px
            background: #fff
            box-shadow: 0 0 6px rgba(0,0,0,.2)
            padding: 14px 0
            line-height: 24px
            font-size: 15px
            position: relative
            z-index: 2
            li
                float: left
                width: 200px
                text-align: center
                cursor: pointer
                &.active
                    color: rgb(220, 66, 66)
                span
                  margin-right: 5px
        .confirm
            width: 360px
            height: 24px
            line-height: 24px
            background: #fff
            padding: 14px 20px
            .choose
                color: #333
                font-size: 14px
            .cancle
                background: #313131
                display: inline-block
                float: right
                font-size: 14px
                padding: 5px 15px
                border-radius: 5px
                color: #f4cf02
                margin-top: -4px
        .subway,.area
          position: absolute
          left: 0
          top: 50px
          background: rgba(255,255,255,1)
          width: 400px
          line-height: 50px
          li
           border-bottom: 1px solid #ecebe9
           padding: 0 10px
           cursor: pointer
           position: relative
           padding: 5px 20px
           &:hover
               background: #ecebe9
           .right
                float: right
                width: 50px
                height: 50px
                background-color: #A59595
          .fade-enter-active, .fade-leave-active
            opacity: 1
          .fade-enter, .fade-leave-to
            opacity: 1
          .subdetail
              color: #000
              font-size: 14px
              position: absolute
              left: 400px
              top: 0px
              padding: 10px 0px 30px 40px
              background: #fff
              width: 310px
              .line
                  width: 100px
                  float: left
              .place
                  color: #333
                  font-size: 14px
                  float: left
                  display: block
                  padding: 0px 20px
                  height: 30px
                  position: relative
                  border-left: 1px solid #ccc
                  cursor: pointer
                  &:hover
                    color: #DC4242
                    &::before
                        background: #DC4242
                  &::before
                      content:""
                      width: 13px
                      height: 13px
                      background: #ccc
                      border-radius: 50%
                      position: absolute
                      left: -7px
                      top: 20px
                      z-index: 4
              .place:nth-child(1)
                border-left: 0
    .nearly
      background: #fff
      margin-top: 20px
      border-radius: 5px
      .seeknum
        font-size: 14px
        color: #999
        padding: 10px
        .num
          font-size: 14px
          color: #999
      .seekList
        display: flex
        flex: direction
        padding: 10px
        .img
          width: 150px
          heihgt: 100px
          img
            width: 100%
        .right
          font-size: 14px
          color: #999
          margin-left: 20px
          h3
            color: #333
            padding-bottom: 10px
</style>