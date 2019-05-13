<template>
  <div class="container">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>


<style lang="scss">
@import '~@/lib/reset.scss';
html, body, .container {
  @include rect(100%, 100%); // width: 100%;height: 100%;
}


.container {
  @include flexbox(); // display: flex;display:box;.....
  @include flex-direction(column); // flex-direction: column；
  .box {
    @include flex(); // flex:1
    @include rect(100%, auto);
    @include flexbox(); // display: flex;display:box;.....
    @include flex-direction(column); // flex-direction: column；
    .header {
      @include rect(100%, 0.44rem);
      @include background-color(#f66);
    }
    .content {
      @include flex(); // flex:1
      @include rect(100%, auto);
    }
  }
  .footer {
     @include rect(100%, 0.5rem);
     @include background-color(#ccc); // background-color: #ccc
  }
}
</style>