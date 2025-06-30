import { ref } from "vue";

export const currentStep = ref(1);
export const email = ref("");
export const personType = ref("fisica");
export const name = ref("");
export const companyName = ref("");
export const cpf = ref("");
export const cnpj = ref("");
export const birthDate = ref("");
export const phone = ref("");
export const companyOpeningDate = ref("");
export const password = ref("");

export const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++;
  }
};

export const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

export const clearForm = () => {
  email.value = "";
};

export const items = [
  { label: "Pessoa física", value: "fisica" },
  { label: "Pessoa jurídica", value: "juridica" },
]
