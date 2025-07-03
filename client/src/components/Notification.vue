<template>
  <div
    class="notification"
    :class="[notification.type, { 'not-visible fade-out': !notification.show }]"
  >
    <span class="notification-message">{{ notification.message }}</span>
    <button @click="close" class="notification-close-button">X</button>
  </div>
</template>

<script setup>
import { inject } from "vue";

const notification = inject("notification");
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  color: white;
  padding: 15px;
  border-radius: 5px;
}

.notification .not-visible {
  display: none;
}

.notification.fade-out {
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.3s ease;
}

.success {
  background-color: #4caf50;
}

.error {
  background-color: #f44336;
}
</style>
