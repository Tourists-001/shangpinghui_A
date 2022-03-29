<template>
  <div class="pagination">
    <button @click="changePage(pageNo - 1)" :disabled="pageNo == 1">上一页</button>
    <button
      v-show="startMumAndEndMun.start > 1"
      @click="changePage(1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-show="startMumAndEndMun.start > 2">···</button>

    <button
      v-for="(page, index) in startMumAndEndMun.end"
      :key="index"
      v-show="startMumAndEndMun.start <= page"
      @click="changePage(page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>

    <button v-show="startMumAndEndMun.end < totalPage - 1">···</button>
    <button
      v-show="startMumAndEndMun.end < totalPage"
      @click="changePage(totalPage)"
      :class="{ active: pageNo == totalPage }"
    >
      {{ totalPage }}
    </button>
    <button @click="changePage(pageNo + 1)" :disabled="pageNo == totalPage">下一页</button>

    <input
      class="input"
      type="text"
      placeholder="到第几页"
      v-model="goPage"
      @change="changePage(goPage)"
    />
    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      goPage: "",
    };
  },
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 总共多少页
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算连续的页码数
    startMumAndEndMun() {
      const { pageNo, totalPage, continues } = this;
      let start = 0;
      let end = 0;
      // 总页数小于连续的页码数
      if (totalPage < continues) {
        // 当总页数小于连续的页数的时候，开始页为1，结束页为总页数
        start = 1;
        end = totalPage;
      } else {
        // 总 10 当前为 4 连续为 5 开始为  2 结束为 6
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          // 当前 2 连续 5 开始为 0 结束为 5
          start = 1;
          end = continues;
        }
        if (end > totalPage) {
          // 结束页大于总页数
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      return { start, end };
    },
  },
  methods: {
    changePage(index) {
      if (index < 1) {
        index = 1;
      }
      if (index > this.totalPage) {
        index = this.totalPage;
      }
      this.$emit("changePage", +index);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;
    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
  .input {
    width: 86px;
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    // min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;
  }
}
</style>
