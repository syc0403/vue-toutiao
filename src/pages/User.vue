<template>
  <div class="user-profile">
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /导航栏 -->

    <!-- 个人信息 -->
    <van-cell class="avatar-cell" title="头像" is-link center>
      <van-image
        class="avatar"
        round
        fit="cover"
        src="http://img.touxiangwu.com/2020/3/R7VzUr.jpeg"
      />
    </van-cell>
    <van-cell title="昵称" />
    <van-cell title="性别" />
    <van-cell title="生日"/>
    <van-cell title="个人简介"  label="请点击输入" />
    
    <!-- /个人信息 -->
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style>

</style>