<template>
  <footer class="footer">
    <ul>
      <router-link to = "/home" tag="li">首页</router-link>
      <router-link to = "/kind" tag="li">分类</router-link>
      <router-link to = "/cart" tag="li">购物车</router-link>
      <router-link to = "/user" tag="li">我的</router-link>
    </ul>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "@/lib/reset.scss";
.footer {
  ul {
    @include rect(100%, 100%);
    @include flexbox();
    li {
      @include flex();
      @include rect(auto, 100%);
      @include flexbox();
      @include justify-content();
      @include align-items();


      &.router-link-exact-active, .router-link-active {
        @include text-color(#f66);
      }
    }
  }
}
</style>