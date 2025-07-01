<template>
  <ContentBlock title="Pessoa Jurídica">
    <template #form>
      <FieldText
        id="companyName"
        label="Razão social"
        type="text"
        v-model:value="form.companyName"
        :error="errors.companyName"
      />
      <FieldText
        id="cnpj"
        label="CNPJ"
        type="text"
        v-model:value="form.cnpj"
        :error="errors.cnpj"
      />
      <FieldDate
        id="companyOpeningDate"
        label="Data de abertura"
        type="date"
        v-model:value="formatCompanyOpeningDate"
        :error="errors.companyOpeningDate"
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

const formatCompanyOpeningDate = computed({
  get: () => formatDateToISO(form.value.companyOpeningDate),
  set: (value) => {
    form.value.companyOpeningDate = formatDate(value);
  },
});
</script>
