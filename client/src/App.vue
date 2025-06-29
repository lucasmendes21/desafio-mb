<template>
  <div class="app">
    <div class="content">
      <Registration />
    </div>
  </div>
</template>

<script setup>
import Registration from "./views/Registration/index.vue";
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100vw;
}

.app .content {
  max-width: var(--max-width-xs);
  margin: 0 auto;
  padding: 0 1.5rem;
}
</style>
