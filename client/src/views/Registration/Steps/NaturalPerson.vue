<template>
  <ContentBlock title="Pessoa Física">
    <template #form>
      <FieldText
        id="name"
        label="Nome"
        type="text"
        v-model:value="form.name"
        :error="errors.name"
      />
      <FieldText
        id="cpf"
        label="CPF"
        type="text"
        v-model:value="form.cpf"
        :error="errors.cpf"
      />
      <FieldDate
        id="birthDate"
        label="Data de nascimento"
        type="date"
        v-model:value="formatBirthDate"
        :error="errors.birthDate"
      />
      <FieldText
        id="phone"
        label="Telefone"
        type="text"
        v-model:value="form.phone"
        :error="errors.phone"
      />
    </template>

    <template #actions>
      <ActionButton label="Voltar" severity="secondary" @click="previousStep" />
      <ActionButton label="Continuar" @click="nextStep" />
    </template>
  </ContentBlock>
</template>

<script setup>
import ContentBlock from "../../../components/ContentBlock.vue";
import FieldText from "../../../components/FormFields/FieldText.vue";
import FieldDate from "../../../components/FormFields/FieldDate.vue";
import ActionButton from "../../../components/FormFields/ActionButton.vue";
import { computed } from "vue";
import {
  form,
  previousStep,
  nextStep,
  errors,
} from "../../../state/registration";
import { formatDate, formatDateToISO } from "../../../helpers/format";

const formatBirthDate = computed({
  get: () => formatDateToISO(form.value.birthDate),
  set: (value) => {
    form.value.birthDate = formatDate(value);
  },
});
</script>
