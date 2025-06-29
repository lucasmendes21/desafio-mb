import { ref } from "vue";

export const useRegistration = () => {
  const currentStep = ref(1);
  const email = ref("");
  const personType = ref("fisica");

  const items = [
    { label: "Pessoa física", value: "fisica" },
    { label: "Pessoa jurídica", value: "juridica" },
  ];

  const nextStep = () => {
    if (currentStep.value < 4) {
      currentStep.value++;
    }
  };

  const previousStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--;
    }
  };

  const clearForm = () => {
    email.value = "";
  };

  return {
    currentStep,
    email,
    personType,
    items,
    nextStep,
    previousStep,
    clearForm
  };
};
