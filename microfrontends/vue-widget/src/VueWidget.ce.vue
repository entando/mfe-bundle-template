<script setup>
import BasicTable from "./components/BasicTable.vue";
import Container from "./components/Container.vue";
import Modal from "./components/Modal.vue";
</script>

<template>
  <div data-theme="light">
    <Container>
      <BasicTable />
      <Modal />
    </Container>
  </div>
</template>

<style>
@import "./style.css";
</style>
