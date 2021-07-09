<!--  -->
<template>
  <el-container>
    <el-header class="head">
      <el-input placeholder="请输入内容" v-model="input" class="search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <i class="fabu"><i class="el-icon-circle-plus"></i></i>
    </el-header>
    <div class="navigation">
      <van-tabs v-model="active">
        <van-tab
          :title="cate.cat_name"
          v-for="cate in cates"
          :key="cate.cat_id"
        >
        </van-tab>
      </van-tabs>
    </div>
    <div class="list"></div>
  </el-container>
</template>

<script>
import { getNoParam } from "@/utils/request.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      input: "",
      cates: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  async created() {
    let res = await getNoParam(
      "https://qzimp.cn/api/articlecate/getmobilearticlecates"
    );
    this.cates = res.data;
    // console.log(this.cates)
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
}
.fabu {
  color: white;
  font-size: 30px;
  margin-right: 5px;
  margin-top: 15px;
}
</style>