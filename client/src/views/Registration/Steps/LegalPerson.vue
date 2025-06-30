<template>
  <ContentBlock title="Pessoa Jurídica">
    <template #form>
      <FieldText
        id="companyName"
        label="Razão social"
        type="text"
        v-model:value="companyName"
      />
      <FieldText id="cnpj" label="CNPJ" type="text" v-model:value="cnpj" />
      <FieldText
        id="companyOpeningDate"
        label="Data de abertura"
        type="date"
        v-model:value="companyOpeningDate"
      />
      <FieldText
        id="phone"
        label="Telefone"
        type="text"
        v-model:value="phone"
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
import ActionButton from "../../../components/FormFields/ActionButton.vue";
import {
  companyName,
  cnpj,
  phone,
  companyOpeningDate,
  previousStep,
  nextStep,
} from "../../../state/registration";
</script>
