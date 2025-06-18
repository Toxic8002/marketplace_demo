<template>
  <div class="pt-12">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Cart from "./components/Cart.vue";
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: rgb(235, 243, 253);
}
</style>
