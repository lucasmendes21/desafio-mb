<template>
  <ContentBlock title="Seja bem vindo(a)">
    <template #form>
      <FieldText
        id="email"
        label="Endereço de e-mail"
        type="email"
        v-model:value="form.email"
        :error="errors.email"
      />
      <RadioButton id="radio" :items="items" v-model:value="form.personType" />
    </template>

    <template #actions>
      <ActionButton label="Continuar" @click="nextStep" />
    </template>
  </ContentBlock>
</template>

<script setup>
import { form, items, nextStep, errors } from "../../../state/registration";
import ContentBlock from "../../../components/ContentBlock.vue";
import FieldText from "../../../components/FormFields/FieldText.vue";
import RadioButton from "../../../components/FormFields/RadioButton.vue";
import ActionButton from "../../../components/FormFields/ActionButton.vue";
</script>
