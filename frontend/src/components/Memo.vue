<template>
  <hr>
  <h2 style="margin-top:25px;">Todo List</h2>
 
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="(d,idx) in state.data" :key="idx" @click="edit(idx)">{{ d }}</li>
    </ul>
  </div>
  <!-- https://icons.getbootstrap.com/ -->
  <i class="bi bi-emoji-smile"></i>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      data: [],
    });

    const add = () => {
      const content = prompt("내용을 입력해주세요.");

      if (!content) {
        alert("내용을 입력해주세요.");
        return add();
      }

      axios.post("/api/memos", { content }).then((res) => {
        
        state.data = res.data;
      });
    };

    const edit = (idx) => {
      const content = prompt("내용을 입력해주세요", state.data[idx]);
      axios.put("/api/memos/" + idx, {content  }).then((res) => {
        state.data[idx] = res.data[idx];
      });
    };

    axios.get("/api/memos").then((res) => {
      state.data = res.data;
    });

    return { state, add, edit };
  },
};
</script>

<style lang="scss" scoped>
.memo {
  .act {
    padding: 10px 10px 5px 5px;
    text-align: right;
  }

  ul {
    list-style: none;
    padding: 15px;
    margin: 0;

    li {
      padding: 15px;
      margin: 10px 0;
      border: 1px solid #eee;
    }
  }
}
</style>
