<template>
  <aside class="aside">
    <div class="tabWraped" @click="activeClick">
      <h4 :class="{ active: activeIndex === 0 }" data-index="0">相关分类</h4>
      <h4 :class="{ active: activeIndex === 1 }" data-index="1">推荐品牌</h4>
    </div>
    <div class="tabContent">
      <div class="tab-pane active">
        <ul class="partList" v-if="!activeIndex">
          <li>手机</li>
          <li>手机壳</li>
          <li>内存卡</li>
          <li>Iphone配件</li>
          <li>贴膜</li>
          <li>手机耳机</li>
          <li>移动电源</li>
          <li>平板电脑</li>
        </ul>
        <ul class="goodsList">
          <li v-for="goodList in goodsList.slice(0, 5)" :key="goodList.id">
            <div class="list-wrap">
              <div class="p-img">
                <img
                  :src="goodList.defaultImg"
                  @click="goDetail($event, goodList)"
                  data-img="img"
                />
              </div>
              <div class="attr">{{ goodList.title }}</div>
              <div class="price">
                <em>¥</em>
                <i>{{ goodList.price }}</i>
              </div>
              <div class="operate">
                <a @click="goDetail($event, goodList)">加入购物车</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="tab-pane">
        <p>推荐品牌</p>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
export default {
  data() {
    return {
      activeIndex: 0,
      skuId: -1,
    };
  },
  computed: {
    ...mapGetters(["goodsList"]),
  },
  mounted() {
    this.$store.dispatch("getSearchList", {});
  },
  methods: {
    activeClick(event) {
      const attr = event.target.getAttribute("data-index");
      if (attr === "0") {
        this.activeIndex = 0;
      } else {
        this.activeIndex = 1;
        // !更新数据 没有接口
      }
    },
    async goDetail(event, item) {
      const { id } = item;
      //   获取商品的详细数据
      const { data } = await reqGoodsInfo(id);
      const skuInfo = data.skuInfo;
      this.skuId = skuInfo.id;
      //   如果点击的是图片，跳转到详情页
      const attr = event.target.getAttribute("data-img") || undefined;
      //    console.log(attr);
      if (attr) {
        this.$store.dispatch("getDetailInfo", this.skuId);
        //点击的是图片,进行跳转
        this.$router.push({
          name: "detail",
          params: {
            skuId: this.skuId,
          },
        });
        return;
      }
      //   添加购物车，进行数据请求
      if (data) {
        // const res = await reqAddOrUpdateShopCart(this.skuId, "1");
        try {
            console.log(this.skuId);
          await this.$store.dispatch("AddOrUpdateShopCart", {
            skuId: this.skuId,
            skuNum: 1,
          });
          this.$router.push({
            name: "addCartSuccess",
            query: { skuNum: 1 },
          });
          sessionStorage.setItem("SKUINFO", JSON.stringify(skuInfo));
        //   console.log(sessionStorage.getItem('SKUINFO'));
        } catch (err) {
          alert(err.message);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.aside {
  width: 210px;
  float: left;
  border: 1px solid #ccc;

  .tabWraped {
    height: 40px;

    h4 {
      border-top: 3px solid #fff;
      float: left;
      line-height: 37px;
      width: 105px;
      text-align: center;
      border-bottom: 1px solid #ccc;

      &.active {
        border-top: 3px solid #e1251b;
        border-bottom: 0;
        font-weight: normal;
      }
    }
  }

  .tabContent {
    padding: 10px;

    .tab-pane {
      display: none;

      &.active {
        display: block;
      }

      &:nth-child(1) {
        .partList {
          overflow: hidden;

          li {
            width: 50%;
            float: left;
            border-bottom: 1px dashed #ededed;
            line-height: 28px;
          }
        }

        .goodsList {
          & > li {
            margin: 5px 0 15px;
            border-bottom: 1px solid #ededed;
            padding-bottom: 5px;

            .list-wrap {
              .p-img {
                text-align: center;

                img {
                  width: 152px;
                }
              }

              .price {
                font-size: 16px;
                color: #c81623;
              }

              .operate {
                text-align: center;
                margin: 5px 0;
                // color: red;
                a {
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #fff;
                  display: inline-block;
                  padding: 2px 14px;
                  line-height: 18px;
                  background-color: red;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
