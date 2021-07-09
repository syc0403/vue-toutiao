<!--  -->
<template>
  <el-container>
    <el-header class="head">
      <van-search
        class="search"
        shape="round"
        background="red"
        placeholder="请输入搜索关键词"
      />
      <i class="fabu"><i class="el-icon-circle-plus"></i></i>
    </el-header>
    <div class="navigation">
      <van-tabs @click="getCatId">
        <van-tab
          :title="cate.cat_name"
          v-for="cate in cates"
          :key="cate.cat_id"
          :name="cate.cat_id"
        >
        </van-tab>
      </van-tabs>
      <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane :label="cate.cat_name"  v-for="cate in cates" :key="cate.cat_id"></el-tab-pane>
  </el-tabs> -->
    </div>
    <div class="article-list">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <article-list :articles="articles"></article-list>
      </van-pull-refresh>
    </div>
    <div>
      <h-tabber></h-tabber>
    </div>
  </el-container>
</template>

<script>
import { Toast } from "vant";
import { getNoParam, get } from "@/utils/request.js";
import ArticleList from "../components/article-list.vue";
import HTabber from "../components/h-tabber.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { ArticleList, HTabber },
  data() {
    //这里存放数据
    return {
      input: "",
      cates: [],
      articles: [],
      id: "",
      isLoading: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getCatId(name) {
      let params = { cat_id: name };
      console.log(params);
      let res = await get("https://qzimp.cn/api/articles/open", params);
      console.log(res);
      this.articles = res.data;
      console.log(res.data);
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  async created() {
    let res1 = await getNoParam(
      "https://qzimp.cn/api/articlecate/getmobilearticlecates"
    );
    this.cates = res1.data;
    // console.log(this.cates)
    let params = { cat_id: 21 };
    let res = await get("https://qzimp.cn/api/articles/open", params);
    this.articles = res.data;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style>
.home {
  display: flex;
  flex-direction: column;
}
.head {
  background-color: red;
  display: flex;
}
.search {
  margin: 10px;
  margin-left: 15%;
}
.fabu {
  color: white;
  font-size: 30px;
  margin-top: 5%;
}
.article-list {
  position: fixed;
  left: 0;
  right: 0;
  top: 110px;
  bottom: 50px;
  overflow-y: auto;
}
</style>