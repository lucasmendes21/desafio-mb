<template>
  <button
    class="form-field-button"
    :class="{ 'form-field-button-secondary': severity === 'secondary' }"
    :type="type"
  >
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "button",
  },
  label: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    required: false,
    default: "primary",
  },
});
</script>

<style scoped>
.form-field-button {
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  width: 100%;
}

.form-field-button-secondary {
  background-color: var(--color-white);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.form-field-button:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.form-field-button:active {
  transform: scale(0.98);
}
</style>
