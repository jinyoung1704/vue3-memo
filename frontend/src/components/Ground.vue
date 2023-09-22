<template>
  <div class="ground">
    <Header/>
    <Notice/>
    <Memo/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Memo from "./Memo.vue";
import Notice from "./Notice.vue";

export default {
  components:{Header, Footer, Memo , Notice}
}
</script>