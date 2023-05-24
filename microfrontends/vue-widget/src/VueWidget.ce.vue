<script setup>
import BasicTable from "./components/BasicTable.vue";
import Container from "./components/Container.vue";
import Modal from "./components/Modal.vue";

import { useKeycloak } from "./keycloak";

const { instance: keycloak } = useKeycloak();
</script>

<template>
  <!-- NOTE: data-theme is for propagate the css variables theme through the shadow dom -->
  <div data-theme="light">
    <Container>
      <h1 v-if="keycloak && keycloak.initialized">Keycloak is initialized!</h1>
      <BasicTable />
      <Modal /> 
    </Container>
  </div>
</template>

<style>
@import "./style.css";
</style>
