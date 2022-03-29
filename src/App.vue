<template>
  <div>
    <div v-if="!$route.meta.notFind">
      <Header />
      <router-view></router-view>
      <Footer v-if="$route.meta.show" />
    </div>
    <div v-else style="width:100%;height:100vh;overflow:hidden"><router-view></router-view></div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    //   派发actions 获取商品分类的列表，可以使数据只请求一次
    this.$store.dispatch("categoryList");
  },
};
</script>

<style></style>
