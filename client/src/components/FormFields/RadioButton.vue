<template>
  <div class="form-field-radio">
    <div class="form-field-radio-items" v-for="item in items" :key="item.value">
      <input
        :id="item.value"
        type="radio"
        :value="item.value"
        v-model="value"
        name="personType"
        class="form-field-radio-input"
      />
      <label :for="item.value" class="form-field-radio-label">
        {{ item.label }}
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.form-field-radio {
  display: flex;
  gap: 0.5rem;
}

.form-field-radio-items {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.2rem;
  cursor: pointer;
}

.form-field-radio-label {
  cursor: pointer;
}

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 1rem;
  height: 1rem;
  border-radius: 50%;

  border: 2px solid var(--color-primary);
  background-color: white;

  position: relative;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
}

input[type="radio"]:checked {
  border-color: var(--color-primary);
  background-color: white;
}

input[type="radio"]:checked::before {
  content: "";
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--color-primary);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input[type="radio"],
input[type="radio"]:checked::before {
  transition: all 0.2s ease-in-out;
}
</style>
