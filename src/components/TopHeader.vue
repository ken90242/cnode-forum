<template>
  <div class="fixed" :class="{ 'show': showMenu }">
    <icon name="bars" scale="1.5" @click.native="bbb"/>
    <span>{{ path }}</span>
    <icon name="send" scale="1.5" @click.native="ccc"/>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  props: ['showMenu'],
  data() {
    return {
      path: '',
    }
  },
  methods: {
    bbb() {
      this.$emit('menuSwitch');
    },
    ccc() {
      this.$router.push('/publish');
    },
  },
  mounted() {
    this.$store.$on('changePath', (path) => {
      let res;
      switch(path) {
        case 'good':
          res = '精華版';
          break;
        case 'top':
          res = '置頂版';
          break;
        case 'share':
          res = '分享版';
          break;
        case 'ask':
          res = '問答版';
          break;
        case 'job':
          res = '招聘版';
          break;
        case 'all':
          res = '全部';
          break;
        default:
          res = path;
      }
      this.path = res;
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fixed {
  position: fixed;
  padding-right: 5%;
  padding-left: 5%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 10px 1px 5px gray;
  height: 44px;
  top: 0px;
  transition:all .3s ease;
  &.show {
    transform: translateX(200px);
  }
  span {
    font-family:Microsoft JhengHei;
    color: #FF9797;
    font-weight: bolder;
    font-size: 22px;
  }
}
</style>
