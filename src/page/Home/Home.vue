<template>
  <div>
    <!-- 三级联动 因为注册为全局组件，所以不需要在引入-->
    <TypeNav />
    <!-- 列表 -->
    <ListContainer />
    <!-- 今日推荐 -->
    <Recommend />
    <!-- 商品列 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!-- 分类 -->
    <Floor v-for="(item,i) in floorList" :key="i" :floorList="item"/>
    <!-- 商标 -->
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/page/Home/ListContainer";
import Recommend from "@/page/Home/Recommend";
import Rank from "@/page/Home/Rank";
import Like from "@/page/Home/Like";
import Floor from "@/page/Home/Floor";
import Brand from "@/page/Home/Brand";
import { mapState } from "vuex";
export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState({
      floorList(state) {
        return state.home.floorList;
      },
    }),
  },
  mounted() {
    this.$store.dispatch("getFloorList");
    // 获取用户信息在首页展示
    this.$store.dispatch('userInfo')
  },
};
</script>

<style></style>
