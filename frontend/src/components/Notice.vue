<template>
    <div class="row" style="margin-top: 20px;">
        <div class="col col-2">
            <select v-model="priority" class="form-select" aria-label="Default select example">
                <option value="⭐" selected>⭐</option>
                <option value="⭐⭐">⭐⭐</option>
                <option value="⭐⭐⭐">⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            </select>
        </div>
        <div class="col col-8">
            <input v-model="notice" type="text" class="form-control">
        </div>
        <div class="col col-2">
            <button class="btn btn-primary" @click="createPost">생성</button>
        </div>
    </div>

    <div class="row row-cols-1 row-cols-md-2 g-4" style="margin-top: 20px;">
        <div class="col" v-for="(post,idx) in posts.data" :key="idx">
            <div class="card" style="background-color: rgb(241, 241, 204); ">
                <h5 class="card-title">{{ post.priority }}</h5>
                <p class="card-text">{{ post.notice }}</p>
                <a href="#" class="btn btn-primary" :key="idx" @click="remove(idx)">삭제</a>         
            </div>
        </div>
    </div>
    
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const priority = ref('⭐⭐⭐'); //반응형, 셀렉트박스 기본값 뉴스로 바인딩
    const notice = ref('');
    const posts = reactive({
      data: []
    });

    const createPost = () => {
        const newPost = {
            priority: priority.value,
            notice: notice.value
        }

        axios.post("/api/addPost", { newPost }).then((res) => {
            posts.data = res.data;
           //초기화
            priority.value ='⭐⭐⭐';
            notice.value ='';
        });
    };

    const remove = (idx) => {
        //console.log(idx);
        posts.data.splice(idx,1);
    };

    axios.get("/api/addPost").then((res) => {
        posts.data = res.data;
    });


    return { createPost ,priority ,notice, posts ,remove};
  },
};
</script>