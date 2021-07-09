<template>
  <div class="my-container">
    <van-cell-group>
      <div class="iconfont">
        <van-icon name="scan" style="margin: 3%; margin-top: 6%" size="23" />
        <van-icon
          name="envelop-o"
          style="margin: 3%; margin-top: 6%"
          size="23"
        />
        <van-icon
          name="setting-o"
          style="margin: 3%; margin-top: 6%; margin-left: 62%"
          size="23"
        />
      </div>
      <van-cell title="单元格" value="内容" center>
        <van-image
          slot="icon"
          width="50"
          height="50"
          round
          fit="cover"
          src="http://img.touxiangwu.com/2020/3/R7VzUr.jpeg"
        />
        <div slot="title" style="margin-left: 20px">昵称</div>
        <van-button size="small" round @click="goUser">个人主页</van-button>
      </van-cell>
      <van-grid style="font-size:10px">
        <van-grid-item>
          <div slot="text">
            <div class="span">111</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">222</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">333</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">444</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>

    <div class="not-login">
      <div @click="$router.push('/login')"></div>
    </div>

    <van-grid :column-num="2">
      <van-grid-item icon-prefix="toutiao" icon="shoucang" text="收藏" />
      <van-grid-item icon-prefix="toutiao" icon="lishi" text="历史" />
    </van-grid>
    <van-grid>
      <van-grid-item icon="apps-o" text="创作首页" />
      <van-grid-item icon="cashier-o" text="数据助手" />
      <van-grid-item icon="refund-o" text="收益提现" />
      <van-grid-item icon="delete-o" text="草稿箱" />
    </van-grid>
    <van-cell title="消息通知"/>
    <van-cell title="退出登录" @click="goLogin" />
    <h-tabber></h-tabber>
  </div>
</template>

<script>
import HTabber from '../components/h-tabber.vue';
export default {
  name: "MyIndex",
  components: {HTabber},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    goLogin(){
      this.$router.push({ path: "/login" });
    },
    goUser(){
      this.$router.push({ path: "/user" });
    }
  },
};
</script>

<style>
.iconfont {
  display: flex;
}
</style>