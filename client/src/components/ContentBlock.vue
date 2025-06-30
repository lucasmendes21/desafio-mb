<template>
  <div class="content-form-block">
    <Header :title="title" :stepper="currentStep" />

    <slot name="form" />

    <div class="content-form-block-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import { currentStep } from "../state/registration";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.content-form-block {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: stretch;
  gap: 1rem;
  width: 100%;
}

.content-form-block-actions {
  display: flex;
  gap: 1rem;
  width: 100%;
}
</style>
