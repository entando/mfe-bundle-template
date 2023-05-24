<script setup>
import BasicTable from "./components/BasicTable.vue";
import Container from "./components/Container.vue";
import Modal from "./components/Modal.vue";

import { useKeycloak } from "./keycloak";

export default {
  setup() {
    const { instance } = useKeycloak();
  }

  return { keycloak: instance };
}
</script>

<template>
  <!-- NOTE: data-theme is for propagate the css variables theme through the shadow dom -->
  <div data-theme="light">
    <Container>
      <h1 v-if="keycloak.initialized">Keycloak is initialized!</h1>
      <BasicTable />
      <Modal />
    </Container>
  </div>
</template>

<style>
@import "./style.css";
</style>
