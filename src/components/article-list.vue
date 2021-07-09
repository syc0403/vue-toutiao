<template>
  <!-- 根据传过来的图片显示文章，1，0 -->
  <div class="articles">
    <div class="article" v-for="article in articleData" :key="article.article_id">
      <!-- <div class="article-img" v-if="article.thumb">
        <el-image style="width: 100px; height: 100px" :src="article.thumb" fit="cover"></el-image>
      </div> -->
        <div class="van-ellipsis">
            {{article.title}}
        </div>
        <!-- <div class="author">
          <br>{{article.author}}
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props:{
    articles:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      articleData:this.articles
     
    };
  },
  watch:{
    'articles':function(val){
      this.articleData=val;
    }
  }
};
</script> 

<style>
.article{
    display: flex;
    margin-bottom: 30px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 3%;
}
.article-content{
    margin-left:20px;
    position: relative;
}
.van-ellipsis{
    font: 20px;
}
.article-bars{
    position:absolute;
    bottom: 0;
    left: 0;
    font: 13px/23px Arial,sans-serif;
    color: #9195a3;
}
.author{
    font-size:10px;
}

</style>