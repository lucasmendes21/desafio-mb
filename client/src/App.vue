<template>
  <div class="app">
    <div class="content">
      <Registration />
    </div>
    <Notification />
  </div>
</template>

<script setup>
import Registration from "./views/Registration/index.vue";
import Notification from "./components/Notification.vue";
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.app .content {
  width: 100%;
  max-width: var(--max-width-xs);
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
}
</style>
