<template>
  <section class="nav-list" :class="{'show': showMenu}">
  <section class="list-ul">
    <router-link class="icon-quanbu iconfont item" :to="{'name':'list',params:{tab:'all'}}">全部</router-link>
    <router-link class="icon-hao iconfont item" :to="{'name':'list',params:{tab:'good'}}">精华</router-link>
    <router-link class="icon-fenxiang iconfont item" :to="{'name':'list',params:{tab:'share'}}">分享</router-link>
    <router-link class="icon-wenda iconfont item" :to="{'name':'list',params:{tab:'ask'}}">问答</router-link>
    <router-link class="icon-zhaopin iconfont item" :to="{'name':'list',params:{tab:'job'}}">招聘</router-link>
    <router-link class="icon-xiaoxi iconfont item line" :to="{'name':'message'}">消息</router-link>
    <router-link class="icon-about iconfont item" :to="{'name':'about'}">关于</router-link>
  </section>
  </section>
</template>

<script>
import bus from '../eventBus';

export default {
  name: 'Menu',
  props: ['showMenu'],
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
  border-top: 1px solid #d4d4d4;
  overflow: hidden;
  padding-top: 9%;
  .item {
    display: block;
    font-size: 14px;
    font-weight: 200;
    padding: 9% 0;
    text-align: left;
    text-indent: 1px;
    line-height: 15px;
    color: #313131;
    font-weight: 700;
    &:last-child {
      margin-bottom: 50px;
    }
    &:before {
      color: #2c3e50;
    }
  }
  .line {
    border-top: 1px solid #d4d4d4;
  }
}
</style>
