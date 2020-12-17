<template>
  <div class="test">say：{{message}}</div>
</template>
<script>
export default {
  name: "TestComponent",
  setup() {
    const message = "hello vue";
    return {
      message,
    };
  },
};
</script>
<style lang="scss">
.test {
  color: "red";
}
</style>