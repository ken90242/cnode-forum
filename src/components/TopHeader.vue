<template>
  <el-row type="flex" class="fixed" :class="{ 'show': showMenu }">
    <!-- <el-col :span="1">
      <i class="el-icon-menu" @click.native="aaa"/>
    </el-col> -->
    <el-col :span="1" v-on:click="bbb">
      <i class="el-icon-menu" v-on:click="bbb"/>
    </el-col>
    <el-col :span="22">
      <span>主題</span>
    </el-col>
    <el-col :span="1">
      <i class="el-icon-edit"/>
    </el-col>
  </el-row>
</template>

<script>
import bus from '../eventBus';

export default {
  name: 'TopHeader',
  props: ['showMenu'],
  methods: {
    bbb() {
      this.$emit('menuSwitch')
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
