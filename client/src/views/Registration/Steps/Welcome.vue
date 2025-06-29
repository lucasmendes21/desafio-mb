<template>
  <div class="welcome-step">
    <Header title="Seja bem vindo(a)" :stepper="currentStep" />
    <FieldText
      id="email"
      label="Endereço de e-mail"
      type="email"
      v-model:value="email"
    />
    <RadioButton id="radio" :items="items" v-model:value="personType" />
    <ActionButton label="Continuar" @click="handleNextStep" />
  </div>
</template>

<script setup>
import { useRegistration } from "../../../composables/registration";
import Header from "../../../components/Header.vue";
import FieldText from "../../../components/FormFields/FieldText.vue";
import RadioButton from "../../../components/FormFields/RadioButton.vue";
import ActionButton from "../../../components/FormFields/ActionButton.vue";

const { currentStep, email, personType, items, nextStep } = useRegistration();

const handleNextStep = () => {
  nextStep();
};
</script>

<style scoped>
.welcome-step {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
}
</style>
