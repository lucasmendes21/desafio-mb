<template>
  <component :is="getStepComponent" />
</template>

<script setup>
import { computed } from "vue";
import WelcomeStep from "./Steps/Welcome.vue";
import NaturalPersonStep from "./Steps/NaturalPerson.vue";
import LegalPersonStep from "./Steps/LegalPerson.vue";
import AccessPasswordStep from "./Steps/AccessPassword.vue";
import ReviewInformationStep from "./Steps/ReviewInformation.vue";
import { currentStep, form } from "../../state/registration";

const getStepComponent = computed(() => {
  const step = currentStep.value;

  switch (step) {
    case 1:
      return WelcomeStep;
    case 2:
      return form.value.personType === "fisica"
        ? NaturalPersonStep
        : LegalPersonStep;
    case 3:
      return AccessPasswordStep;
    case 4:
      return ReviewInformationStep;
    default:
      return WelcomeStep;
  }
});
</script>
