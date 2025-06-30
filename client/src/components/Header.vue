<template>
  <header class="header">
    <div class="header-content">
      <span class="header-stepper"
        >Etapa <span class="header-stepper-active">{{ stepper }}</span> de
        4</span
      >
      <h1 class="header-title">{{ title }}</h1>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  stepper: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.header {
  margin-bottom: 0px;
}

.header-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  word-wrap: break-word;
}

.header-stepper-active {
  color: var(--color-primary);
  font-weight: 400;
}
</style>
