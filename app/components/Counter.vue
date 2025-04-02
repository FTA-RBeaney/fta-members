<template>
  <div>
    <h3>Counter: {{ count }}</h3>
    <Button @click="increment"> Increment </Button>
    <Button @click="decrement"> Decrement </Button>
  </div>
</template>

<script setup lang="ts">
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };
</script>

<style scoped>
  button {
    margin: 5px;
  }
</style>
