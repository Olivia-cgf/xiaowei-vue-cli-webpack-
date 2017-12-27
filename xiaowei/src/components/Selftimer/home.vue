<template>
  <div class="home">
    <div class="google-plus" id="find">
        <li v-for="(item,index) in selftimer.imagesrc">
          <img :src="item" ref="img" alt="">
        </li>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import '../../../static/js/loadpic.js';
const ERR_OK = 0;
export default {
    data () {
        return {
            selftimer: {},
            sum: 0
        };
    },
     methods: {
     },
    mounted () {
    this.$nextTick(() => {
      window.onload = function () {
        var oDiv = document.getElementById('find');
        let aImg = oDiv.getElementsByTagName('img');
        let aLi = oDiv.getElementsByTagName('li');
        var h = 200;
        var windowWidth = document.documentElement.clientWidth - 120; // 获取到窗口的大小 -（左边的侧栏的宽度+右边的间隔）
        var w = windowWidth;
        var ws = [];
        var c = 0;
        var tw = 0;
        var photos = [];
        for (var value of aImg) {
          let nw = value.width;
          let nh = value.height;
          if (nh !== h) {
             nw = h / nh * nw;
           }
           tw += nw;
           ws.push(nw);
           if (tw >= w) {
            photos.push(ws);
             tw = 0;
             ws = [];
           }
        }
         for (var i = 0; i < photos.length; i++) {
          var line = photos[i];
           let sum = 0;
          for (var n of line) {
            sum += n;
          }
          for (var j = 0; j < line.length; j++) {
            let currentWidth = line[j];
            var realWidth = currentWidth * w / sum;
            // console.log('realWidth' + realWidth);
            // console.log(c);
            aLi[c].style.width = realWidth + 'px';
            aLi[c].setAttribute('class', 'box-border');
           c++;
          }
        }
      };
      });
     },
    created () {
     this.$http.get('/api/selftimer').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.selftimer = response.data;
      }
    });
   }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home
    .google-plus
        overflow: hidden
        li
          border: 5px
          float: left
        img
           height: 200px
           display: block
           float: left
           border: 5px solid #fff
        .box-border
            box-sizing: border-box
            
</style>