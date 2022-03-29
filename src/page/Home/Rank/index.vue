<template>
  <!-- 商品排行 -->
  <div class="rank">
    <div class="tab">
      <div class="tab-tit clearfix">
        <a
          href="javascript:;"
          :class="{'on':activeIndex === i}"
          v-for="(item, i) in hotTitle"
          :key="i"
          @click="changeActive(i)"
        >
          <p class="img">
            <i></i>
          </p>
          <p class="text">{{ item }}</p>
        </a>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="img-item" v-for="(item,i) in list" :key="i">
            <p class="tab-pic">
              <a href="#">
                <img :src="item.imgSrc" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >{{item.title}}</a
                >
              </div>
              <p class="info-price">定金：¥{{item.price}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            activeIndex: 0
        }
    },
  mounted() {
    this.$store.dispatch("getHotList");
  },
  computed: {
    ...mapState({
      hotList(state) {
        return state.home.hotList;
      },
    }),
    hotTitle() {
        return this.hotList.length === 0 ?  [] : this.hotList[0].hotTitle
    },
    list() {
        return this.hotList.length === 0 ? [] : this.hotTitle[0].list
    }
  },
  methods: {
    changeActive(i) {
      this.activeIndex = i
      this.$store.dispatch("getHotList");
    },
  },
};
</script>

<style lang="less" scoped>
.rank {
  width: 1200px;
  margin: 0 auto;

  .tab {
    margin: 0 auto;
    overflow: hidden;
    width: 312px;

    .tab-tit {
      text-align: center;

      a {
        display: block;
        padding: 0 18px;
        float: left;
        text-decoration: none;
        font-size: 16px;
        color: #999;

        p {
          margin: 5px 0;
        }

        .img {
          i {
            width: 35px;
            height: 35px;
            display: block;
            background: url(./images/bg0.png);
            margin-left: 10px;
          }
        }

        .text {
          line-height: 28px;
        }
      }

      .on {
        color: #e60012;

        .img {
          i {
            background-position: -35px 0;
          }
        }
      }
    }
  }

  .content {
    overflow: hidden;
    padding: 10px;

    ul {
      li {
        overflow: hidden;
        list-style: none;
        line-height: 18px;

        .img-item {
          border: 1px solid #e1251b;
          width: 269px;
          float: left;
          overflow: hidden;
          margin: 0 12px 10px;
          background: #fff;

          .tab-pic {
            width: 230px;
            height: 210px;
            overflow: hidden;
            text-align: center;
            margin: 5px auto 18px;

            a {
              img {
                width: 200px;
                height: 200px;
              }
            }
          }

          .tab-info {
            background: #fafafa;

            .info-title {
              height: 50px;
              line-height: 28px;
              overflow: hidden;
              margin: 0 auto;
              padding-left: 10px;

              a {
                color: #333;
                text-decoration: none;
              }
            }

            .info-price {
              font-size: 20px;
              color: #e1251b;
              height: 35px;
              padding-left: 10px;
              display: block;
              line-height: 24px;
              margin: 10px auto 0;
            }
          }
        }
      }
    }
  }
}
</style>
