<template>
  <div class="selftimer">
      <!--=====menu-wrapper=====-->
         <v-menu-wrapper :message="selftimer" v-on:listenToChildEvent="showMsgFromChild"></v-menu-wrapper>
        <div class="wrapper">
             <!-- 每天 -->
            <v-home  v-if="flag===0"></v-home>

            <!-- 云冲印 -->
            <!-- <v-clone  v-if="flag===1"></v-clone> -->
            <div class="clound"  v-if="flag===1">
              <ul class="clound_container">
                <li class="clound_list" v-for="(item,index) in selftimer.cloneSrc">
                   <img :src="item.imagesrc" alt="">
                   <span class="description">{{item.description}}</span>
                </li>
              </ul>
            </div>

            <!-- 小薇在哪 -->
            <b-map-component   v-if="flag===2"></b-map-component>
        </div>

    <!-- 页脚 -->
   <v-footer ref="foot" id="foot"></v-footer> 
  </div>
</template>

<script type="text/ecmascript-6">
import BMapComponent from '../BMapComponent/BMapComponent.vue';
import menuWrapper from './../../components/menuWrapper/menuWrapper';
import home from './home';
import footer from '../footer/footer';
const ERR_OK = 0;
export default {
 data () {
    return {
      selftimer: {},
      flag: 0
    };
  },
  methods: {
    showMsgFromChild (data) {
      this.flag = data;
      if (this.flag === 0) {
        window.location.reload();
      }
    }
  },
  components: {
    'v-footer': footer,
    'b-map-component': BMapComponent,
    'v-home': home,
    'v-menu-wrapper': menuWrapper
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

<style  lang="stylus" rel="stylesheet/stylus">
.selftimer
    margin-left: 100px
    margin-top: 50px
    .clound
       display: flex
       width: 1100px
      .clound_container
         width: 100%
        .clound_list
          float: left
          width: 33.3%
          padding: 80px 0
          img
            display: block
            margin: auto
          .description
            text-align: center
            display: block
            font-size: 16px
            color: #333333
            padding: 20px 0
        
</style>