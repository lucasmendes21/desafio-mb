<template>
  <ContentBlock title="Revise suas informações">
    <template #form>
      <FieldText
        id="email"
        label="Endereço de e-mail"
        type="email"
        v-model:value="email"
      />
      <FieldText id="name" label="Nome" type="text" v-model:value="name" />
      <FieldText id="cpf" label="CPF" type="text" v-model:value="cpf" />
      <FieldText
        id="birthDate"
        label="Data de nascimento"
        type="date"
        v-model:value="birthDate"
      />
      <FieldText
        id="phone"
        label="Telefone"
        type="text"
        v-model:value="phone"
      />
      <FieldText
        id="password"
        label="Sua senha"
        type="password"
        v-model:value="password"
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
import {
  previousStep,
  email,
  name,
  cpf,
  birthDate,
  phone,
  password,
} from "../../../state/registration";

const handleCreateUser = () => {
  console.log("create user");
};
</script>
