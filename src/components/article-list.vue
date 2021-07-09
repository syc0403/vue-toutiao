<template>
  <div class="article-list">文章列表</div>
</template>

<script>
import { getNoParam } from '@/utils/request.js'
export default {
  name: 'ArticleList',
  components: {},
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  async created () {
    let res = await getNoParam("https://qzimp.cn/api/articlecate/getmobilearticlecates")
    this.cates = res.data[1]
    console.log(this.cates)
  },
  mounted () {},
  methods: {}
}
</script>

<style>
</style>