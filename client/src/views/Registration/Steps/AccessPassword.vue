<template>
  <ContentBlock title="Senha de acesso">
    <template #form>
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
      <ActionButton label="Continuar" @click="nextStep" />
    </template>
  </ContentBlock>
</template>

<script setup>
import ContentBlock from "../../../components/ContentBlock.vue";
import FieldText from "../../../components/FormFields/FieldText.vue";
import ActionButton from "../../../components/FormFields/ActionButton.vue";
import {
  form,
  previousStep,
  nextStep,
  errors,
} from "../../../state/registration";
</script>
