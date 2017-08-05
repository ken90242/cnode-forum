<template>
  <el-row type="flex" class="fixed" :class="{ 'show': showMenu }">
    <!-- <el-col :span="1">
      <i class="el-icon-menu" @click.native="aaa"/>
    </el-col> -->
    <el-col :span="1">
      <icon name="bars" scale="1.5" @click.native="bbb"/>
    </el-col>
    <el-col :span="22">
      <span>{{path}}</span>
    </el-col>
    <el-col :span="1">
      <icon name="send" scale="1.5" @click.native="ccc"/>
    </el-col>
  </el-row>
</template>

<script>
import store from '@/store';

export default {
  name: 'TopHeader',
  props: ['showMenu'],
  data() {
    return {
      path: store.currentPath,
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fixed {
  padding-right: 25px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 10px 1px 5px gray;
  height: 44px;
  top: 0px;
  transition:all .3s ease;
  &.show {
    transform: translateX(200px);
  }
}
</style>
