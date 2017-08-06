<template>
  <section class="nav-list" :class="{'show': showMenu}">
  <section class="list-ul">
    <a class="item" @click="gotos" v-if="logged">
      <icon name="user-o" class="icon" scale="1"/>
      用戶
    </a>
    <router-link class="item" :to="{'name':'login',params:{tab:'all'}}" v-if="!logged">
      <icon name="arrow-circle-o-right" class="icon" scale="1.7"/>
      登錄
    </router-link>
    <router-link class="item line" :to="{'name':'list',query:{tab:'all'}}">
      <icon name="th-list" class="icon" scale="1"/>
      全部
    </router-link>
    <router-link class="item" :to="{'name':'list',query:{tab:'good'}}">
      <icon name="thumbs-up" class="icon" scale="1"/>
      精华
    </router-link>
    <router-link class="item" :to="{'name':'list',query:{tab:'share'}}">
      <icon name="slideshare" class="icon" scale="1"/>
      分享
    </router-link>
    <router-link class="item" :to="{'name':'list',query:{tab:'ask'}}">
      <icon name="question-circle" class="icon" scale="1"/>
      问答
    </router-link>
    <router-link class="item" :to="{'name':'list',query:{tab:'job'}}">
      <icon name="bullhorn" class="icon" scale="1"/>
      招聘
    </router-link>
    <router-link class="item line" :to="{'name':'message'}">
      <icon name="bell" class="icon" scale="1"/>
      消息
    </router-link>
    <router-link class="item" :to="{'name':'about'}">
      <icon name="info-circle" class="icon" scale="1"/>
      关于
    </router-link>
  </section>
  </section>
</template>

<script>
export default {
  name: 'Menu',
  props: ['showMenu'],
  methods: {
    gotos() {
      this.$router.push(`/user/${this.$store.loginname}`);
    }
  },
  data() {
    return {
      logged: false,
    }
  },
  mounted() {
    this.$store.$on('logged', () => {
      this.logged = true
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nav-list {
  position: fixed;
  background-color: #fff;
  color: #313131;
  transition: all .3s ease;
  left: -200px;
  top: 0px;
  bottom: 0px;
  width:200px;
  z-index: 999;
}
.show {
    transform: translateX(200px);
  }
.list-ul {
  margin: 0 24px;
  // border-top: 1px solid #d4d4d4;
  overflow: hidden;
  padding-top: 9%;
  .item {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    font-weight: 200;
    padding: 9% 0;
    padding-right: 60px;
    // width: 80px;
    text-align: left;
    text-indent: 1px;
    line-height: 15px;
    color: #313131;
    font-weight: bolder;
    &:first-child {
      margin-bottom: 20px;
      font-size: 18px;
      .icon {
        margin-right: 10px;
        font-weight: lighter;
        color:  #FF7744;
      }
    }
    &:nth-of-type(2) {
      padding-top: 30px;
    }
    &:nth-of-type(6){
      padding-bottom: 30px;
    }
    &:nth-of-type(7){
      padding-top: 20px;
    }
    &:before {
      color: #2c3e50;
    }
    .icon {
      margin-right: 30px;
    }
  }
  .line {
    border-top: 1px solid #d4d4d4;
  }
}
</style>
