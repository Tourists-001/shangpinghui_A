<template>
  <div class="detail">
    <div class="fitting">
      <h4 class="kt">选择搭配</h4>
      <div class="good-suits">
        <div class="master">
          <img src="../images/l-m01.png" />
          <p>￥5299</p>
          <i>+</i>
        </div>
        <ul class="suits">
          <li class="suitsItem">
            <img src="../images/dp01.png" />
            <p>Feless费勒斯VR</p>
            <label>
              <input type="checkbox" value="39" />
              <span>39</span>
            </label>
          </li>
          <li class="suitsItem">
            <img src="../images/dp02.png" />
            <p>Feless费勒斯VR</p>
            <label>
              <input type="checkbox" value="50" />
              <span>50</span>
            </label>
          </li>
          <li class="suitsItem">
            <img src="../images/dp03.png" />
            <p>Feless费勒斯VR</p>
            <label>
              <input type="checkbox" value="59" />
              <span>59</span>
            </label>
          </li>
          <li class="suitsItem">
            <img src="../images/dp04.png" />
            <p>Feless费勒斯VR</p>
            <label>
              <input type="checkbox" value="99" />
              <span>99</span>
            </label>
          </li>
        </ul>
        <div class="result">
          <div class="num">已选购0件商品</div>
          <div class="price-tit">套餐价</div>
          <div class="price">￥5299</div>
          <button class="addshopcar">加入购物车</button>
        </div>
      </div>
    </div>
    <div class="intro">
      <template>
      <ul class="tab-wraped">
        <li
          :class="{ active: activeIndex == i }"
          v-for="(item, i) in title"
          :key="i"
        >
          <a @click="changIndex(i)"> {{ item }} </a>
        
        <!-- <div class="tab-content" :class="{ Hiddle: activeIndex == i }">
        <div id="one" class="tab-pane active">
          <ul class="goods-intro">
            <li>分辨率：1920*1080(FHD)</li>
            <li>后置摄像头：1200万像素</li>
            <li>前置摄像头：500万像素</li>
            <li>核 数：其他</li>
            <li>频 率：以官网信息为准</li>
            <li>品牌： Apple</li>
            <li>商品名称：APPLEiPhone 6s Plus</li>
            <li>商品编号：1861098</li>
            <li>商品毛重：0.51kg</li>
            <li>商品产地：中国大陆</li>
            <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
            <li>系统：苹果（IOS）</li>
            <li>像素：1000-1600万</li>
            <li>机身内存：64GB</li>
          </ul>
          <div class="intro-detail">
            <img src="../images/intro01.png" />
            <img src="../images/intro02.png" />
            <img src="../images/intro03.png" />
          </div>
        </div>
        <div id="two" class="tab-pane">
          <p>规格与包装</p>
        </div>
        <div id="three" class="tab-pane">
          <p>售后保障</p>
        </div>
        <div id="four" class="tab-pane">
          <p>商品评价</p>
        </div>
        <div id="five" class="tab-pane">
          <p>手机社区</p>
        </div>
      </div> -->
        </li>
        <div :class="{'Hiddle': activeIndex == i}" class="tab-item" v-for="(item,i) in title" :key="item">{{item}}</div>
      </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ["商品介绍", "规格与包装", "售后保障", "商品评价", "手机社区"],
      activeIndex: 0,
    };
  },
  methods: {
    changIndex(i) {
      this.activeIndex = i;
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  width: 980px;
  float: right;

  .fitting {
    border: 1px solid #ddd;
    margin-bottom: 15px;

    .kt {
      border-bottom: 1px solid #ddd;
      background: #f1f1f1;
      color: #333;
      padding: 5px 0 5px 15px;
    }

    .good-suits {
      height: 170px;
      padding-top: 10px;

      .master {
        width: 127px;
        height: 165px;
        text-align: center;
        position: relative;
        float: left;

        img {
          width: 87px;
        }

        p {
          color: #c81623;
          font-size: 16px;
          font-weight: 700;
        }

        i {
          position: absolute;
          top: 48px;
          right: -25px;
          font-size: 16px;
        }
      }

      .suits {
        width: 668px;
        height: 165px;
        float: left;

        .suitsItem {
          float: left;
          width: 127px;
          padding: 0 20px;
          text-align: center;

          img {
            width: 120px;
            height: 130px;
          }

          p {
            font-size: 12px;
          }

          label {
            display: block;
            position: relative;

            input {
              vertical-align: middle;
            }

            span {
              vertical-align: middle;
            }
          }
        }
      }

      .result {
        border-left: 1px solid #ddd;
        width: 153px;
        height: 165px;
        padding-left: 20px;
        float: left;

        .num {
          font-size: 14px;
          margin-bottom: 10px;
          margin-top: 10px;
        }

        .price-tit {
          font-weight: bold;
          margin-bottom: 10px;
        }

        .price {
          color: #b1191a;
          font-size: 16px;
          margin-bottom: 10px;
        }

        .addshopcar {
          background-color: #e1251b;
          border: 1px solid #e1251b;
          padding: 10px 25px;
          font-size: 16px;
          color: #fff;
          display: inline-block;
          box-sizing: border-box;
        }
      }
    }
  }

  .intro {
    .tab-wraped {
    position: relative;
      background: #ededed;
      // border: 1px solid #ddd;
      overflow: hidden;

      li {
        float: left;

        & + li > a {
          border-left: 1px solid #ddd;
        }

        &.active {
          a {
            // border: 0;
            background: #e1251b;
            color: #fff;
          }
        }

        a {
          display: block;
          height: 40px;
          line-height: 40px;
          padding: 0 11px;
          text-align: center;
          color: #666;
          background: #fcfcfc;
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
        }
      }
    }
      .tab-item {
          display: none;
        //   position: absolute;
        //   top: 100px;
          color:red;
        //   margin-top: -100px;
        padding-top: 102px;
      }
        .Hiddle {
          display: block !important;
        }
    .tab-content {
      display: none;
      .tab-pane {
        display: none;

        &.active {
          display: block;
        }

        &:nth-child(1) {
          .goods-intro {
            padding-left: 10px;

            li {
              margin: 10px 0;
            }
          }

          .intro-detail {
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
