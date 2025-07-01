import { ref } from "vue";
import { validateForm } from '../views/Registration/validation'

export const currentStep = ref(1);
export const form = ref({
  email: "",
  personType: "fisica",
  name: "",
  companyName: "",
  cpf: "",
  cnpj: "",
  birthDate: "",
  phone: "",
  companyOpeningDate: "",
  password: "",
});

const getStepName = () => {
  switch (currentStep.value) {
    case 1:
      return 'welcome';
    case 2:
      return form.value.personType === 'fisica' ? 'naturalPerson' : 'legalPerson';
    case 3:
      return 'accessPassword';
    case 4:
      return 'reviewInformation';
    default:
      return 'welcome';
  }
}

export const errors = ref({});

export const nextStep = () => {
  validateCurrentStep()
  if (Object.keys(errors.value).length > 0) return

  if (currentStep.value < 4) {
    currentStep.value++;
  }
};

export const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

export const validateCurrentStep = () => {
  errors.value = validateForm(getStepName(), form.value);
}

export const clearForm = () => {
  form.value = {
    email: "",
    personType: "fisica",
    name: "",
    companyName: "",
    cpf: "",
    cnpj: "",
    birthDate: "",
    phone: "",
    companyOpeningDate: "",
    password: "",
  }
  currentStep.value = 1
};

export const items = [
  { label: "Pessoa física", value: "fisica" },
  { label: "Pessoa jurídica", value: "juridica" },
]
