<template>
  <div id="app">
    <TopHeader :showMenu="showMenu" v-on:menuSwitch="menuSwitch"/>
    <LeftMenu :showMenu="showMenu"/>
    <div :class="{ 'lightbox' : showMenu }" @click="menuSwitch"/>
    <router-view></router-view>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader';
import LeftMenu from './components/Menu';

export default {
  name: 'app',
  components: { TopHeader, LeftMenu },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    menuSwitch() {
      this.showMenu = (this.showMenu === true) ? false : true;
      // ev.preventDefault();
      return false;
    },
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin-top: 3%;
}
.lightbox {
  top:0px;
  position: fixed;
  background: rgba(0,0,0,.4);
  width: 100%;
  height: 100%;
}
html, body {
  margin: 0px;
  padding: 0px;
}
</style>
