<template>
  <div class="test2">
    <p>哈哈哈哈哈</p>say：
    <mark>{{message}}</mark>
  </div>
</template>
<script>
export default {
  name: "Test2",
  setup() {
    const message = "hello vue";
    return {
      message,
    };
  },
};
</script>
<style lang="scss">
.test2 {
  color: rgb(252, 196, 13);
}
</style>