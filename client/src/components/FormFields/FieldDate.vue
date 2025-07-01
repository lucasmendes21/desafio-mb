<template>
  <div class="form-field-date">
    <label :for="id" class="form-field-date-label">{{ label }}</label>
    <input
      :id="id"
      type="date"
      :placeholder="placeholder"
      :value="value"
      v-model="value"
      :min="minDate"
      :max="maxDate"
      class="form-field-date-input"
    />
    <span class="form-field-date-error" v-if="error">{{ error }}</span>
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

const maxDate = new Date().toLocaleDateString("en-CA");
const minDate = new Date(1900, 0, 1).toLocaleDateString("en-CA");
</script>

<style scoped>
.form-field-date {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
}

.form-field-date-label {
  font-size: 1rem;
  font-weight: 500;
}

.form-field-date-input {
  padding: 0.5rem;
  border-radius: 0.5rem;
  max-width: 100%;
  padding: 0.5rem;
}

.form-field-date-input:focus {
  outline: none;
  border: 2px solid var(--color-primary);
}

.form-field-date-error {
  color: var(--color-error);
  font-size: 0.75rem;
  font-weight: 500;
}
</style>
