<!--  -->
<template>
  <div class="">
    <van-tabbar>
      <van-tabbar-item icon="home-o" @click="goHome">首页</van-tabbar-item>
      <van-tabbar-item icon="play-circle-o">西瓜视频</van-tabbar-item>
      <van-tabbar-item icon="add-o">发布</van-tabbar-item>
      <van-tabbar-item icon="tv-o">放映厅</van-tabbar-item>
      <van-tabbar-item icon="manager-o" @click="goMy">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goHome() {
      this.$router.push({ path: "/home" });
    },
    goMy() {
      this.$router.push({ path: "/my" });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style>
</style>