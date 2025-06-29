<template>
  <div class="form-field-text">
    <label :for="id" class="form-field-text-label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      v-model="value"
      class="form-field-text-input"
    />
    <span class="form-field-text-error" v-if="error">{{ error }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "text",
  },
  placeholder: {
    type: String,
    required: false,
  },
  error: {
    type: String,
    required: false,
  },
});

const value = defineModel("value");
</script>

<style scoped>
.form-field-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
}

.form-field-text-label {
  font-size: 1rem;
  font-weight: 500;
}

.form-field-text-input {
  padding: 0.5rem;
  border-radius: 0.5rem;
  max-width: 100%;
  padding: 0.5rem;
}

.form-field-text-input:focus {
  outline: none;
  border: 2px solid var(--color-primary);
}

.form-field-text-error {
  color: var(--color-error);
  font-size: 0.75rem;
  font-weight: 500;
}
</style>
