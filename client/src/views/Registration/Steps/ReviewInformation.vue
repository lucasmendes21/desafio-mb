<template>
  <ContentBlock title="Revise suas informações">
    <template #form>
      <FieldText
        id="email"
        label="Endereço de e-mail"
        type="email"
        v-model:value="form.email"
        :error="errors.email"
      />
      <FieldText
        id="name"
        label="Nome"
        type="text"
        v-model:value="form.name"
        :error="errors.name"
        v-show="isNaturalPerson"
      />
      <FieldText
        id="companyName"
        label="Razão social"
        type="text"
        v-model:value="form.companyName"
        :error="errors.companyName"
        v-show="!isNaturalPerson"
      />
      <FieldText
        id="cpf"
        label="CPF"
        type="text"
        v-model:value="form.cpf"
        :error="errors.cpf"
        v-show="isNaturalPerson"
      />
      <FieldText
        id="birthDate"
        label="Data de nascimento"
        type="date"
        v-model:value="formatBirthDate"
        :error="errors.birthDate"
        v-show="isNaturalPerson"
      />
      <FieldText
        id="cnpj"
        label="CNPJ"
        type="text"
        v-model:value="form.cnpj"
        :error="errors.cnpj"
        v-show="!isNaturalPerson"
      />
      <FieldDate
        id="companyOpeningDate"
        label="Data de abertura"
        type="date"
        v-model:value="formatCompanyOpeningDate"
        :error="errors.companyOpeningDate"
        v-show="!isNaturalPerson"
      />
      <FieldText
        id="phone"
        label="Telefone"
        type="text"
        v-model:value="form.phone"
        :error="errors.phone"
      />
      <FieldText
        id="password"
        label="Sua senha"
        type="password"
        v-model:value="form.password"
        :error="errors.password"
      />
    </template>

    <template #actions>
      <ActionButton label="Voltar" severity="secondary" @click="previousStep" />
      <ActionButton label="Cadastrar" @click="handleCreateUser" />
    </template>
  </ContentBlock>
</template>

<script setup>
import ContentBlock from "../../../components/ContentBlock.vue";
import ActionButton from "../../../components/FormFields/ActionButton.vue";
import FieldText from "../../../components/FormFields/FieldText.vue";
import FieldDate from "../../../components/FormFields/FieldDate.vue";
import { computed } from "vue";
import {
  previousStep,
  form,
  errors,
  clearForm,
  validateCurrentStep,
} from "../../../state/registration";
import { formatDate, formatDateToISO } from "../../../helpers/format";
import { createUser } from "../../../services/registration.service";

const handleCreateUser = async () => {
  const hasErrors = validateCurrentStep();
  if (hasErrors) return;

  console.log("create user");
  await createUser(form.value);
  clearForm();
};

const formatBirthDate = computed({
  get: () => formatDateToISO(form.value.birthDate),
  set: (value) => {
    form.value.birthDate = formatDate(value);
  },
});

const formatCompanyOpeningDate = computed({
  get: () => formatDateToISO(form.value.companyOpeningDate),
  set: (value) => {
    form.value.companyOpeningDate = formatDate(value);
  },
});

const isNaturalPerson = computed(() => form.value.personType === "fisica");
</script>
