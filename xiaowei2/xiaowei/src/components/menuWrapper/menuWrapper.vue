<template>
 <!--=====menu-wrapper=====-->
<div class="menu-wrapper" ref="menuWrapper"  keep-alive>
            <ul>
               <div class="menu-left">
                   <li v-for="(item,index) in message.name" @click="light(index)" :class="{'active':flag==index}" class="menu-item">
                     {{item}}
                   </li>
               </div>

                <select name="area" id="area">
                    <option value="深圳"  v-for="(item,index) in selftimer.area">
                        {{item}}
                    </option>
                </select>
            </ul>
 </div>
</template>

<script type="text/ecmascript-6">
const ERR_OK = 0;
export default {
  props: ['message'],
 data () {
        return {
            selftimer: {},
            flag: 0
        };
      },
      methods: {
        light (index) {
             this.flag = index;
             this.$emit('listenToChildEvent', index);
        }
      },
    created () {
      this.$http.get('/api/selftimer').then((response) => {
        response = response.body;
        /* console.log(this.response); */
        if (response.errno === ERR_OK) {
          this.selftimer = response.data;
        /* console.log(this.selftimer); */
        }
      });
    }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.menu-wrapper
        height: 50px
        background: #f5f5f5
        position: fixed
        width: 100%
        left: 100px
        top: 0
        z-index: 6
        ul
          display: flex
          flex-direction: row
          flex-wrap: wrap
          justify-content: start
          .menu-left
              display: flex
              flex-direction: row
              flex-wrap: wrap
              justify-content: start
              flex: 5
          .menu-item
             display: block
             font-size: 14px
             color: #333
             padding:20px 40px
             cursor: pointer
             &.active
                 color: #dc4242
           #area
                 outline: none
                 border: 0
                 align-items: center
                 margin-right: 20px
</style>