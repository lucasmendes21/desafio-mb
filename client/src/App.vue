<template>
  <div class="app">
    <div class="content">
      <h1 class="title">Seja bem vindo(a)</h1>
      <FieldText
        id="email"
        label="Endereço de e-mail"
        type="email"
        v-model:value="email"
      />
      <ActionButton label="Continuar" @click="teste" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FieldText from "./components/FormFields/FieldText.vue";
import ActionButton from "./components/FormFields/ActionButton.vue";

const email = ref("");

const teste = () => {
  console.log("teste");
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100vw;
}

.app .content {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;

  max-width: var(--max-width-xs);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.app .content .title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}
</style>
