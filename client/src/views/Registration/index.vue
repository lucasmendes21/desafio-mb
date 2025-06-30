<template>
  <WelcomeStep v-if="isWelcomeStep" />
  <NaturalPersonStep v-if="isNaturalPerson" />
  <LegalPersonStep v-if="isLegalPerson" />
  <AccessPasswordStep v-if="isAccessPassword" />
  <ReviewInformationStep v-if="isReviewInformation" />
</template>

<script setup>
import { computed } from "vue";
import WelcomeStep from "./Steps/Welcome.vue";
import NaturalPersonStep from "./Steps/NaturalPerson.vue";
import LegalPersonStep from "./Steps/LegalPerson.vue";
import AccessPasswordStep from "./Steps/AccessPassword.vue";
import ReviewInformationStep from "./Steps/ReviewInformation.vue";
import { currentStep, personType } from "../../state/registration";

const isNaturalPerson = computed(() => {
  return currentStep.value === 2 && personType.value === "fisica";
});

const isLegalPerson = computed(() => {
  return currentStep.value === 2 && personType.value === "juridica";
});

const isAccessPassword = computed(() => {
  return currentStep.value === 3;
});

const isWelcomeStep = computed(() => {
  return currentStep.value === 1;
});

const isReviewInformation = computed(() => {
  return currentStep.value === 4;
});
</script>

<style scoped></style>
