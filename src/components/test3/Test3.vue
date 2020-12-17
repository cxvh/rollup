<template>
  <div class="test3">
    <p>哈哈哈哈哈3333333333</p>say：
    <mark>{{message}}</mark>
  </div>
</template>
<script>
export default {
  name: "TestComponent3",
  setup() {
    const message = "hello vue";
    return {
      message,
    };
  },
};
</script>
<style lang="scss">
.test3 {
  color: rgb(140, 0, 196);
}
</style>